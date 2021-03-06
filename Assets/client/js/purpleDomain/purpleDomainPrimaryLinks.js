/**
 * PURPLE DOMAIN MAIN PATHS
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 *    ../domainLibs/serverPointCoordinates.js
 */

// TIER 4
var pBaseToP1Hex = new Konva.Line({
  points: [
    pt_pBase1Hex_X,
    pt_pBase1Hex_Y,
    pt_p1Hex_X,
    pt_p1Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var pBaseToP2Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_pBase2Hex_X,
    pt_pBase2Hex_Y,
    pt_p2Hex_X,
    pt_p2Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 3
var p1HexToP3Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p1Hex_X,
    pt_p1Hex_Y,
    pt_p3Hex_X,
    pt_p3Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var p2HexToP5Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p2Hex_X,
    pt_p2Hex_Y,
    pt_p5Hex_X,
    pt_p5Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TIER 3
var p3HexToP4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p3Hex_X,
    pt_p3Hex_Y,
    pt_p4Hex_X,
    pt_p4Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var p5HexToP4Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p5Hex_X,
    pt_p5Hex_Y,
    pt_p4Hex_X,
    pt_p4Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 2
var p4HexToP7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p4Hex_X,
    pt_p4Hex_Y,
    pt_p7Hex_X,
    pt_p7Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var p5HexToP7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p5Hex_X,
    pt_p5Hex_Y,
    pt_p7Hex_X,
    pt_p7Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var p4HexToP6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p4Hex_X,
    pt_p4Hex_Y,
    pt_p6Hex_X,
    pt_p6Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var p3HexToP6Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p3Hex_X,
    pt_p3Hex_Y,
    pt_p6Hex_X,
    pt_p6Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TIER 2
var p6HexToP7Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p6Hex_X,
    pt_p6Hex_Y,
    pt_p7Hex_X,
    pt_p7Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

// TO TIER 1
var p6HexToP8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p6Hex_X,
    pt_p6Hex_Y,
    pt_p8Hex_X,
    pt_p8Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});

var p7HexToP8Hex = new Konva.Line({
  //       XS    YS   XE   YE
  points: [
    pt_p7Hex_X,
    pt_p7Hex_Y,
    pt_p8Hex_X,
    pt_p8Hex_Y
  ],
  stroke: 'purple',
  strokeWidth: mainLinksStroke,
  lineCap: 'round',
  lineJoin: 'round',
  visible: lineVisible,
});