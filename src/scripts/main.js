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
    panel1Text = document.querySelector("#text1"),
    panel2Text = document.querySelector("#panel2 h2"),
    info = document.querySelector("#info"),
    list = document.querySelector("li"),
    orderNow = document.querySelector("#orderNow"),
    tl;

var bc = new TimelineMax({delay:0.5, repeat:-1, repeatDelay:2});

//banner animation code (only 11 lines)

 bc.from(panel1, 0.5, {autoAlpha:0})
   .from(panel1Text, 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut});
