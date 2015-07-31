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
//                 var newImg = new Image();
//                 var atTooEx = isRetina() ? '@2x' : '';
//                 newImg.src = 'img/' + texName + '.png' + atTooEx;


                this.partImgDict[texName] = newImg;
            }
        }
    },
    
    render: function(context) {
        for (var i = 0; i < this.parts.length; i++) {
            var part = this.parts[i];

            if (this.partImgDict[part.textureName].complete) {
                this.drawPart(part, context);
            }
        }
    },

    drawPart: function(part, context) {
        var partX = part.x, partY = part.y;

        var image = this.partImgDict[part.textureName];
        var anchorAdjustX = image.width * part.anchorX;
        var anchorAdjustY = image.height * part.anchorY;

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
        
            arguments[0] = this.tintOverlay;
//             context.drawImage.apply(context, arguments);
//         context.drawImage(image, 0, 0);
        context.restore();
    },


      applyTint: function(image, color) {
         // Create an offscreen buffer
         this.tintOverlay.width = image.width;
         this.tintOverlay.height = image.height;

         var context = this.tintOverlay.getContext('2d');

         // Fill offscreen buffer with tint color
         context.fillStyle = color;
         context.fillRect(0, 0, image.width, image.height);
      
         // destination atop makes a result with an alpha channel identical to fg,
         // but with all pixels retaining their original color *as far as I can tell*
         context.globalCompositeOperation = "destination-atop";
         context.globalAlpha = 0.75;
         context.drawImage(image, 0, 0);
         context.globalAlpha = 1;
      },
});