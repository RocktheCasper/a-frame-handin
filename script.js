AFRAME.registerComponent('click-change', {

    init: function () {

        var COLORS = [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'violet'
          ];

        var i = 0;

        this.el.addEventListener('click', function () {
            console.log('clicked');
            this.setAttribute('material', 'color', COLORS[i++ % COLORS.length]);
            this.object3D.position.y += 0.5;
        });
    }

});
