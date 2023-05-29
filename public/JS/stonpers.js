(()=>{"use strict";const t=function(){function t(){}return t.rectangleCollision=function(t,r){return t.x<r.x+r.width&&t.x+t.width>r.x&&t.y<r.y+r.height&&t.y+t.height>r.y},t.circleCollision=function(t,r){return Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2))<t.radius+r.radius},t}(),r=function(){function t(){}return t.clicou=!1,t}(),o=function(){function t(){this.tag=""}return t.prototype.hasCode=function(){return Reflect.getPrototypeOf(this).constructor.name},t.prototype.colidir=function(){},t.prototype.desenhar=function(){},t}();var n,i=(n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},n(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)});const e=function(o){function n(t,r,n,i,e,a,c){var s=o.call(this)||this;return s.virada=!1,s.width=n,s.height=i,s.x=t,s.y=r,s.valor=e,s.naipe=a,s.imagem=c,s}return i(n,o),n.prototype.desenhar=function(){if(this.imagem.desenhar(this.x,this.y,this.width,this.height),this.virada)this.imagem.x=141,this.imagem.y=410;else{var t=n.cardsCut.get(this.valor.toString()+this.naipe);this.imagem.x=t.x,this.imagem.y=t.y}},n.prototype.colidir=function(){return t.rectangleCollision(this,{x:r.x,y:r.y,width:1,height:1})&&r.clicou?(console.log(this.valor+this.naipe),{carta:this,colidiu:!0}):{colidiu:!1}},n.prototype.virar=function(){this.virada=!this.virada},n.naipes=["PAUS","OUROS","COPAS","ESPADAS"],n.cardsCut=new Map,n}(o),a=function(){function t(t,r){this.width=t.width,this.height=t.height,this.x=t.x,this.y=t.y,this.image=new Image,this.image.src=r}return t.prototype.desenhar=function(t,r,o,n){f.ctx.drawImage(this.image,this.x,this.y,this.width,this.height,t,r,o,n)},t}();var c=function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},t(r,o)};return function(r,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=r}t(r,o),r.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const s=function(t){function r(){var r=t.call(this)||this;return r.cartas=[],r.create(),r}return c(r,t),r.prototype.create=function(){for(var t=0;t<4;t++)for(var o=0;o<13;o++){var n=o+1;13!=n||"OUROS"!=e.naipes[t]&&"COPAS"!=e.naipes[t]||(n=0);var i=e.cardsCut.get(n.toString()+e.naipes[t]),c=new a(i,"./public/image/do_meu_avo.png"),s=new e(8*o,0,r.widthC,r.heightC,n,e.naipes[t],c);this.cartas.push(s)}},r.prototype.desenhar=function(){this.cartas.forEach((function(t){t.desenhar()}))},r.prototype.colidir=function(){if(this.cartas[this.cartas.length-1].colidir().colidiu)for(var t=0;t<f.gameObjects.length;t++)console.log(f.gameObjects[t].tag),"player1"===f.gameObjects[t].tag&&f.gameObjects[t].comprar(this.retirar())},r.prototype.retirar=function(){var t=this.cartas[this.cartas.length-1];return this.cartas.pop(),t},r.prototype.embaralhar=function(){for(var t=this.cartas.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),o=this.cartas[t],n={x:this.cartas[t].x,y:this.cartas[t].y};this.cartas[t].x=this.cartas[r].x,this.cartas[t].y=this.cartas[r].y,this.cartas[t]=this.cartas[r],this.cartas[r].x=n.x,this.cartas[r].y=n.y,this.cartas[r]=o}},r.prototype.distribuir=function(t){for(var r=0;r<4;r++)t.mao.cartas.push(this.cartas[this.cartas.length-1]),this.cartas.pop()},r.widthC=70,r.heightC=100,r}(o);var h=function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},t(r,o)};return function(r,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=r}t(r,o),r.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const u=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.cartas=[],r}return h(r,t),r.prototype.desenhar=function(){this.cartas.forEach((function(t){t.desenhar()}))},r.prototype.colidir=function(){for(var t=0;t<this.cartas.length;t++){var r=this.cartas[t].colidir();if(r.colidiu)return{carta:r.carta,index:t}}return null},r.prototype.trocar=function(t,r){t.x=this.cartas[r].x,t.y=this.cartas[r].y,this.cartas[r]=t},r}(o);var p=function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},t(r,o)};return function(r,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=r}t(r,o),r.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const l=function(t){function r(r,o,n){var i=t.call(this)||this;return i.comprada=null,i.x=r,i.y=o,i.mao=n,i}return p(r,t),r.prototype.arrumarCartas=function(){for(var t=0;t<this.mao.cartas.length;t++)this.mao.cartas[t].y=t%2==0?this.y-s.heightC:this.y,this.mao.cartas[t].x=this.x-s.widthC+s.widthC*Math.floor(t/2)},r.prototype.desenhar=function(){var t;this.mao.desenhar(),this.comprada&&(null===(t=this.comprada)||void 0===t||t.desenhar())},r.prototype.colidir=function(){var t=this.mao.colidir();t&&this.trocar(t.index)},r.prototype.comprar=function(t){this.comprada=t,console.log(this.comprada),this.comprada.x=3*s.widthC,this.comprada.y=this.y},r.prototype.trocar=function(t){this.comprada&&this.mao.trocar(this.comprada,t)},r}(o),f=function(){function t(){}return t.prototype.update=function(){var o=this;t.gameObjects.forEach((function(t){t.colidir()})),r.clicou&&(r.clicou=!r.clicou),window.requestAnimationFrame((function(){return o.update()}))},t.prototype.render=function(){var r=this;t.ctx.clearRect(0,0,t.WIDTH,t.HEIGHT),t.ctx.fillStyle="#0FF0CB",t.ctx.fillRect(0,0,t.WIDTH,t.HEIGHT),t.gameObjects.forEach((function(t){t.desenhar()})),window.requestAnimationFrame((function(){return r.render()}))},t.prototype.start=function(){for(var r=0;r<4;r++)for(var o=0;o<13;o++){var n=o+1;13!=n||"OUROS"!=e.naipes[r]&&"COPAS"!=e.naipes[r]||(n=0);var i=n.toString()+e.naipes[r];e.cardsCut.set(i,{x:71*o,y:103*r,width:71,height:103})}var a=new s,c=new l(t.WIDTH/2,t.HEIGHT/2,new u);a.embaralhar(),console.log(a),a.distribuir(c),c.arrumarCartas(),c.tag="player1",t.gameObjects.push(a),t.gameObjects.push(c),this.render(),this.update()},t.gameObjects=[],t.WIDTH=.99*window.innerWidth,t.HEIGHT=.99*window.innerHeight,t}();var y=document.getElementById("canvas1");f.ctx=y.getContext("2d"),y.width=.99*window.innerWidth,y.height=.99*window.innerHeight,y.getBoundingClientRect().x,y.getBoundingClientRect().y,window.addEventListener("click",(function(t){r.clicou=0==t.button})),window.addEventListener("mousemove",(function(t){r.x=t.clientX,r.y=t.clientY})),(new f).start()})();