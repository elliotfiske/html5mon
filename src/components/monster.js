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

        this.x = GAME_WIDTH/2;
        this.y = GAME_HEIGHT/2;
    },

    // Populate the image -> part dictionary
    loadParts: function() {
        for (var i = 0; i < this.parts.length; i++) {
            var texName = this.parts[i].textureName;
            if ( !(this.partImgDict.hasOwnProperty(texName)) ) {
                var newImg = new Image();
                var atTooEx = isRetina() ? '@2x' : '';
                newImg.src = 'img/' + texName + '.png' + atTooEx;

                if (this.parts[i].colorable) {
                    
                }

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

        if (part.type == "body") {
            partX = partY = 0;
        }

        context.drawImage(this.partImgDict[part.textureName], this.x + partX, this.y + partY);
    },
});