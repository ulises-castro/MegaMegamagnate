!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}i(1);var o=n(i(2)),a=n(i(3)),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(4));console.log("Mega Megamagnate is loaded"),formatNumber=function(t){var e=new NumberFormat;return e.setInputDecimal("."),e.setNumber(t),e.setPlaces("0",!1),e.setCurrencyValue(""),e.setCurrency(!0),e.setCurrencyPosition(e.RIGHT_OUTSIDE),e.setNegativeFormat(e.LEFT_DASH),e.setNegativeRed(!0),e.setSeparators(!0,".","."),e.toFormatted()},$(".footer").hide(),$('.trozoLogin a[href="https://play.google.com/store/apps/details?id=net.megamagnate"]').hide(),$(".cajaDinero").css("font-family","monospace").prepend('<span id="tiempoHastaLlenado" style="font-size: 0.225em;color:#aaa;"></span>'),$("#cajetoDinero").css("font-size","0.85em").html(formatNumber(window.dinero)),setInterval(function(){var t=parseInt($("#cajetoDinero").attr("data").split(":")[1].split(".").join("")),e=parseFloat($("#alsegundo").html()),i=(t-dinero)/e;i>0?$("#tiempoHastaLlenado").html(function(t){var e=parseInt(t,10);return[Math.floor(e/3600)%24,Math.floor(e/60)%60,e%60].map(function(t){return t<10?"0"+t:t}).filter(function(t,e){return"00"!==t||e>0}).join(":")}(i)+" hasta llenado"):$("#tiempoHastaLlenado").html("Lleno")},500),function(t){switch(t[0]){case"buildings":o.default.init();break;case"casino":"play"===t[1]?a.default.init():"hilo"===t[1]&&r.init()}}(window.location.pathname.split("/").splice(1))},function(t,e,i){"use strict";Function.prototype.clone=function(){var t=this,e=function(){return t.apply(this,arguments)};for(var i in this)this.hasOwnProperty(i)&&(e[i]=this[i]);return e}},function(t,e,i){"use strict";t.exports={calcEficiencia:function(){$(".tablaContenido2 tr td").each(function(t){var e=$(this).text(),i=/- Precio: (.+)\n/gm.exec(e),n=/- Bºs al dia: (.+)\n/gm.exec(e);if(i&&n){i=parseInt(i[1].split(".").join(""));var o=(n=parseInt(n[1].split(".").join("")))/i;$(this).find(".eficiencia").length||($(this).find(".imageListadoDiv").css("margin-bottom","1em"),$(this).find("br").last().before('<br><p style="display:inline" title="Porcentaje del coste que se recupera al día">- Eficiencia: <span class="eficiencia"></span></p>')),$(this).find(".eficiencia").html((100*o).toFixed(2)+"%")}})},calcEficienciaOptimizar:function(){for(var t=[],e=0;e<e_name.length;e++)t[e]=parseInt($("#ned"+(e+1)).html());$("#eficienciaOptimizarNegocio").html(rentabilidadOptimizarNegocio(t,$("#precioOptimizarNegocio").val().split(".").join(""))+"%")},init:function(){var t=this,e=window.verificarPrecio.clone();window.verificarPrecio=function(i){t.calcEficiencia(),t.calcEficienciaOptimizar(),e(i)},this.calcEficiencia(),$(".tablaContenido2").last().after('\n    <table  class="tablaContenido2" cellspacing="0" cellpadding="0" style="margin-top:15px">\n    <tr>\n      <td class="topTitulo2"> Eficiencia de Optimizar Negocio </td>\n    </tr>\n    <tr>\n      <td>\n        Precio de Optimizar Negocio: <input type="text" id="precioOptimizarNegocio" />\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <p style="display:inline" title="Porcentaje del coste que se recupera al día">- Eficiencia: <span id="eficienciaOptimizarNegocio">0%</span></p>\n      </td>\n    </tr>\n    </table>\n  '),$("#precioOptimizarNegocio").on("change, input",function(){buildings.calcEficienciaOptimizar()})}}},function(t,e,i){"use strict";var n={slowMode:!1,salirEnBote:!1,auto:!0,slowCounter:0,lastTs:1*new Date,init:function(){var t=document.getElementById("fichas");t.value=5*t.length;var e=$('<div style="text-align:center;margin:1em;"></div>').insertBefore("#mensajescasino");$("<button></button>").appendTo(e).click(function(){n.auto=!n.auto,$(this).text(n.auto?"Stop Auto":"Start Auto")}).click(),$("<button></button>").appendTo(e).click(function(){n.slowMode=!n.slowMode,$(this).text(n.slowMode?"Stop SlowMode":"Activar SlowMode")}).click(),$("<button></button>").appendTo(e).click(function(){n.salirEnBote=!n.salirEnBote,$(this).text(n.salirEnBote?"Stop SalirEnBote":"Activar SalirEnBote")}).click(),$('<div style="margin: 1em 0;color:#333;">SlowMode: Si el bote es menos de 800.000, solamente se apuesta cada 10 segundos</div>').appendTo(e),$('<div style="margin: 1em 0;color:#333;">SalirEnBote: Si el bote igual o menos de 100.000, avisar y salir automáticamente</div>').appendTo(e),this.interval()},interval:function(){setTimeout(n.interval,500);var t=$(".tablaerror").length>0,e=1*new Date-n.lastTs;if(n.lastTs=1*new Date,!t&&n.auto){var i=parseInt($("#mbote").html().split(".").join(""));if(n.salirEnBote&&i<=1e5)return alert("Bote!!"),document.location="/casino/list",void(n.auto=!1);if(n.slowMode&&i<8e5)o=1e4;else var o=500;n.slowCounter+=e,n.slowCounter>=o&&(n.slowCounter=0,apostar())}}};t.exports=n},function(t,e,i){"use strict";function n(){for(var t=document.querySelector(".hilo"),e=document.querySelectorAll("#jugadas, #disponible"),i=0;i<e.length;i++)e[i].addEventListener("DOMSubtreeModified",function(e){var i=parseInt(t.style.backgroundPosition.split("px")[0]),n=Math.abs(Math.floor(i/82));n>12&&(n=0);var o={hi:(12-n)/12,lo:n/12},a={hi:"color: #222; font-weight: bold;",lo:"color: #222; font-weight: bold;"};o.hi>.5?(a.hi="color: limegreen; font-weight: bold;",a.lo="color: orangered; font-weight: normal;"):o.lo>.5&&(a.lo="color: limegreen; font-weight: bold;",a.hi="color: orangered; font-weight: normal;"),Object.keys(o).map(function(t,e){o[t]=Math.floor(1e4*o[t])/100,o[t]=o[t]<10?"0"+o[t]:o[t]});var r='\n        <div id="chances" style="margin:0 5px;flex: 1 1;">\n          <div>Hi chances: <span style="'+a.hi+'">'+o.hi+'%</span></div>\n          <div>Lo chances: <span style="'+a.lo+'">'+o.lo+"%</span></div>\n        </div>\n      ";$("#chances").html(r)})}t.exports={init:function(){$(".cajaHilo").css("flex","1 0").parent().css("display","flex"),$("<div id='chances'></div>").insertAfter(".cajaHilo"),$("#jugadaspendientes").parents(".tablaContenido2").last().after('<div id="HiLoHelper"></div>'),$("#HiLoHelper").html('<a href="https://wizardofodds.com/games/blackjack/card-counting/high-low/" target="_blank"><img style="width:100%;" src="https://i.imgur.com/4FCUpB1.png"/></a>'),n()},setListeners:n}}]);