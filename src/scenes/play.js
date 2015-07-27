var PlayScreen = Juicy.State.extend({
    constructor: function() {
       this.monster = new Juicy.Entity(this, ['Monster', 'Animations', 'Button']); 

        // TODO: add monster mouse events
    },

    init: function() {
        var self = this;
    },

    mouseMoved: function(x, y) {
        this.monster.getComponent('Button').checkMouse
    },

    mouseDown: function(x, y) {
        this.monster.getComponent('Button').checkMouseDown(x, y);
    },

    mouseUp: function(x, y) {
        this.monster.getComponent('Button').checkMouseUp(x, y);
    },

    update: function(dt, input) {
        this.monster.update(dt);
    },

    render: function(context) {
        this.monster.render(context);
    },
});
