/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const DeviceMotion = require('DeviceMotion');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// Enables async/await in JS [part 1]
(async function() {
    const [head] = await Promise.all([Scene.root.findFirst('Neck')])

    const headTransform = head.transform;
    const deviceWorldTransform = DeviceMotion.worldTransform;    

    // headTransform.rotationX = camTransform.rotationX;
    // headTransform.rotationY = camTransform.rotationY;
    // headTransform.rotationZ = camTransform.rotationZ;

    headTransform.rotationX = deviceWorldTransform.rotationX.mul(1);
    headTransform.rotationY = deviceWorldTransform.rotationY.mul(1);
    headTransform.rotationZ = deviceWorldTransform.rotationZ.mul(1);    

    // camTransform.scaleX = headTransform.scale.x.mul(2);
    // camTransform.scaleY = headTransform.scale.y.mul(2);    

    // const mouthOpenness = face.mouth.openness.mul(4).add(1);    

    // camTransform.scaleX = mouthOpenness;
    // camTransform.scaleY = mouthOpenness;

})();