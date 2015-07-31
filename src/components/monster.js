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

//         this.x = 400;
//         this.y = 400;

        this.tintOverlay = document.createElement('canvas');
//         this.applyTint(image, "white");
    },


    // Populate the image -> part dictionary
    loadParts: function() {
        for (var i = 0; i < this.parts.length; i++) {
            var texName = this.parts[i].textureName;
            if ( !(this.partImgDict.hasOwnProperty(texName)) ) {
                var newImg = new Juicy.Entity(this, ['Image']);
                newImg.setImage('img/' + this.parts[i].textureName + '.png', 'blue');
                newImg.transform.position.x = this.parts[i].x;
                newImg.transform.position.y = this.parts[i].y;

//                 this.partImgDict[texName] = newImg;
                this.imageParts.push(newImg);
            }
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
        var partX = part.x, partY = part.y;

//         var image = this.partImgDict[part.textureName];
        var anchorAdjustX = part.transform.width * part.anchorX;
        var anchorAdjustY = part.transform.height * part.anchorY;

        if (part.type == "body") {
            partX = partY = 0;
        }

        context.save();

        context.translate(this.x, this.y);
        context.translate(partX, partY);
        context.rotate(part.orbitalAngle + part.userAngle);
        context.scale(part.scaleFactor, part.scaleFactor);
        context.translate(anchorAdjustX, -anchorAdjustY);
//         context.translate(-this.x, -this.y);
        
            part.render(context);
//         context.drawImage(image, 0, 0);
        context.restore();
    },

});