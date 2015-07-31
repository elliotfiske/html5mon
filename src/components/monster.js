isRetina = function() {
    var root = (typeof exports === 'undefined' ? window : exports);
    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';

    if (root.devicePixelRatio > 1) {
        return true;
    }

    if (root.matchMedia && root.matchMedia(mediaQuery).matches) {
        return true;
    }

    return false;
};



Juicy.Component.create('Monster', {
    constructor: function() {
        this.parts = mon2;
        this.imageParts = [];
        this.partImgDict = {};
        this.loadParts(); 

        this.x = 0;
        this.y = 0;

        this.tintOverlay = document.createElement('canvas');
//         this.applyTint(image, "white");
    },


    // Populate the image -> part dictionary
    loadParts: function() {
        for (var i = 0; i < this.parts.length; i++) {
            var part = this.parts[i];

            var partImage = new Juicy.Entity(this, ['Image']);
            if (part.colorable) {
                var partColor = 'rgb(' + Math.floor(part.colorR*255) + ', ' + Math.floor(part.colorG*255) + ', ' + Math.floor(part.colorB*255) + ')'
                partImage.setImage('http://elliotfiske.com/html5mon/img/' + this.parts[i].textureName + '.png', partColor);
             }
            else {
                partImage.setImage('img/' + this.parts[i].textureName + '.png');
            }
            partImage.transform.position.x = this.parts[i].x;
            partImage.transform.position.y = this.parts[i].y;
            partImage.ob = part;

            this.imageParts.push(partImage);      
        }
    },
    
    render: function(context) {
        for (var i = 0; i < this.imageParts.length; i++) {
            var part = this.imageParts[i];

//             if (this.partImgDict[part.textureName].complete) {
                this.drawPart(part, context);
//             }
        }
    },

    drawPart: function(part, context) {
        var partX = part.ob.x, partY = part.ob.y;

//         var image = this.partImgDict[part.textureName];
        var anchorAdjustX = part.transform.width * part.ob.anchorX;
        var anchorAdjustY = part.transform.height * part.ob.anchorY;

        if (part.ob.type == "body") {
            partX = 0;
            partY = 0;
        }

        context.save();

        context.translate(this.x, this.y);
        context.translate(partX, partY);
        context.rotate(part.ob.orbitalAngle + part.ob.userAngle);
        context.scale(part.ob.scaleFactor, part.ob.scaleFactor);
        context.translate(anchorAdjustX, -anchorAdjustY);
//         context.translate(-this.x, -this.y);
            part.render(context);
//         context.drawImage(image, 0, 0);
        context.restore();
    },

});