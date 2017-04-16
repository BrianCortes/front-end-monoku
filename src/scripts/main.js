// Require Node modules in the browser thanks to Browserify: http://browserify.org


var bespoke = require('bespoke'),
  gsap = require('gsap')
  cube = require('bespoke-theme-cube'),
  nebula = require('bespoke-theme-nebula'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  // cube(),
  nebula(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

var tl = new gsap.TimelineMax({repeat:-1, repeatDelay:1, yoyo:true});
tl.staggerTo("h5", 0.2, {className:"+=superShadow", top:"-=9px", ease:Power1.easeIn}, "0.2", "start")

var panel1 = document.querySelector('#panel1'),
    panel2 = document.querySelector("#panel2"),
    panel3 = document.querySelector("#panel3"),
    panel4 = document.querySelector("#panel4"),
    panel5 = document.querySelector("#panel5"),
    panel6 = document.querySelector("#panel6"),
    description1 = document.querySelector("#description1"),
    namefront = document.querySelector("#namefront"),
    description2 = document.querySelector("#description2"),
    namefront2 = document.querySelector("#namefront2"),
    description3 = document.querySelector("#description3"),
    namefront3 = document.querySelector("#namefront3"),
    description4 = document.querySelector("#description4"),
    namefront4 = document.querySelector("#namefront4"),
    description5 = document.querySelector("#description5"),
    namefront5 = document.querySelector("#namefront5"),
    description6 = document.querySelector("#description6"),
    namefront6 = document.querySelector("#namefront6")

var bc = new TimelineMax({delay:0.5, repeat:-1, repeatDelay:2});
//banner animation code
bc.from(panel1, 1, {autoAlpha:0})
  .from(description1, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .from(namefront, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .set(panel2, {autoAlpha:0})
  .from(panel2, 0.5, {autoAlpha:0, scale:1.5})
  .from(description2, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .from(namefront2, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .set(panel3, {autoAlpha:0})
  .from(panel3, 0.5, {autoAlpha:0, scale:1.5})
  .from(description3, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .from(namefront3, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .set(panel4, {autoAlpha:0})
  .from(panel4, 0.5, {autoAlpha:0, scale:1.5})
  .from(description4, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .from(namefront4, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .set(panel5, {autoAlpha:0})
  .from(panel5, 0.5, {autoAlpha:0, scale:1.5})
  .from(description5, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .from(namefront5, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .set(panel6, {autoAlpha:0})
  .from(panel6, 0.5, {autoAlpha:0, scale:1.5})
  .from(description6, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
  .from(namefront6, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut});


