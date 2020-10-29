const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');

Promise.all([
    Textures.findFirst('icon_1'),
    Textures.findFirst('icon_2'),
    Textures.findFirst('icon_3'),
]).then(onReady);


function onReady(assets) {

    const texture0 = assets[0];
    const texture1 = assets[1];
    const texture2 = assets[2];

    const picker = NativeUI.picker;

    const index = 0;
    const selection = 0;

    const configuration = {

      selectedIndex: index,

      items: [
        {image_texture: texture0},
        {image_texture: texture1},
        {image_texture: texture2}
      ]

    };

    picker.configure(configuration);
    picker.visible = true;

    picker.selectedIndex.monitor().subscribe(function(index) {
      Patches.inputs.setScalar('selection', index.newValue);
    });
}
