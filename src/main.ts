import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';

gsap.registerPlugin(PixiPlugin);

PixiPlugin.registerPIXI(PIXI);

// const app = new PIXI.Application();
// await app.init({});

// document.body.appendChild(app.canvas);

gsap.to(".box", {
  rotation: 360,
  duration: 5,
  repeat: -1,
  ease: "linear"
});