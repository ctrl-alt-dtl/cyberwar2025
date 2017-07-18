var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var layer = new Konva.Layer();

var center_hex = new Konva.RegularPolygon({
  x: 693,
  y: 394,
  sides: 6,
  radius: 33,
  fill: '',
  stroke: 'black',
  strokewidth: 2,
  rotation: 90
});

// Red Base Outline.
var rBase = new Konva.Line({
  //        X1   Y1   X2  Y2   X3    Y3   X4   Y4   X5   Y5   X6   Y6
  points: [580, 735, 590, 717, 795, 717, 805, 735, 795, 753, 590, 753],
  stroke: 'red',
  strokewidth: 2,
  closed: true

});

var r1Hex = new Konva.RegularPolygon({
  x: 534,
  y: 735,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r2Hex = new Konva.RegularPolygon({
  x: 851,
  y: 735,
  sides: 6,
  radius: 21,
  fill: '',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r3Hex = new Konva.RegularPolygon({
  x: 588,
  y: 642,
  sides: 6,
  radius: 21,
  fill: 'red',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90,
  visible: true,
  listening: true,
  id: r3Hex,

});

var r4Hex = new Konva.RegularPolygon({
  x: 693,
  y: 642,
  sides: 6,
  radius: 21,
  fill: '',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r5Hex = new Konva.RegularPolygon({
  x: 797,
  y: 642,
  sides: 6,
  radius: 21,
  fill: '',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r6Hex = new Konva.RegularPolygon({
  x: 640,
  y: 552,
  sides: 6,
  radius: 21,
  fill: '',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r7Hex = new Konva.RegularPolygon({
  x: 745,
  y: 552,
  sides: 6,
  radius: 21,
  fill: '',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r8Hex = new Konva.RegularPolygon({
  x: 693,
  y: 461,
  sides: 6,
  radius: 21,
  fill: '',
  stroke: 'red',
  strokewidth: 2,
  rotation: 90
});

var r1Text = new Konva.Text({
  text: '4',
  x: 525,
  y: 722,
  width: 220,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF'
});

var r3Text = new Konva.Text({
  text: '2',
  x: 579,
  y: 628,
  width: 220,
  fontFamily: 'sans-serif',
  fontSize: 30,
  fill: '#FFF'
});


var rBaseToR1Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [580, 735, 555, 735],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var r1HexToR3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [544, 717, 577, 660],
  stroke: 'red',
  strokeWidth: 2,
  lineCap: 'round',
  lineJoin: 'round'
});

var imageObj = new Image();
// background board
imageObj.onload = function() {
  var bgBoard = new Konva.Image({
    x: 10,
    y: 10,
    image: imageObj,
    width: 1366,
    height: 768
  });

  // add the shapes to the layer
  layer.add(bgBoard);
  layer.add(center_hex);
  layer.add(rBase);
  layer.add(r1Hex);
  layer.add(r2Hex);
  layer.add(r3Hex);
  layer.add(r4Hex);
  layer.add(r5Hex);
  layer.add(r6Hex);
  layer.add(r7Hex);
  layer.add(r8Hex);

  layer.add(r1Text);
  layer.add(r3Text);
  layer.add(rBaseToR1Hex);
  layer.add(r1HexToR3Hex);

  // add the layer to the stage
  stage.add(layer);

};


imageObj.src = '../img/Board-Web.png';
