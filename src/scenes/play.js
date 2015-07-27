var PlayScreen = Juicy.State.extend({
    constructor: function() {
       this.monster = new Juicy.Entity(this, ['Monster', 'Animations', 'Button']); 
    },

    init: function() {
        var self = this;
    },

    click: function(x, y) {
        this.monster.checkMouseClick(x, y);
    },

    update: function(dt, input) {
        this.monster.update(dt);
    },

    render: function(context) {
        this.monster.render(context);
    },
});
