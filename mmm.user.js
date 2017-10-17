// ==UserScript==
// @name         Mega Megamagnate
// @namespace    https://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.megamagnate.net/*
// @match        *://megamagnate.net/*
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    $(function() {
        switchLocation(window.location.pathname.split('/').splice(1));
    });

    function switchLocation(loc) {
        switch(loc[0]) {
            case 'buildings':
                buildings.init();
                break;
            case 'casino':
                if(loc[1] === 'play') casinos.init();
                break;
        }
    }

    var casinos = {
        init() {
            var botones = $('<div style="text-align:center;margin:1em;"></div>').insertBefore('#mensajescasino');
            $('<button>Auto</button>').appendTo(botones).attr('disabled', $('.tablaerror').length > 0).click(function() {
                if ($(this).text() === 'Auto') {
                    $(this).text('Stop');
                    casinos.timerId = setInterval(casinos.interval, 500);
                } else {
                    $(this).text('Auto');
                    clearInterval(casinos.timerId);
                }
            });
            $('<button>Max fichas</button>').appendTo(botones).click(function() {
                var fichas = document.getElementById("fichas");
                fichas.value = fichas.length*5;
            });
        },
        timerId: false,
        interval() {
            apostar();
        }
    };

    var buildings = {
        calc() {
            $('.tablaContenido2 tr td').each(function(elm) {
                var content = $(this).text();
                var precio = /- Precio: (.+)\n/gm.exec(content);
                var beneficiosdia = /- Bºs al dia: (.+)\n/gm.exec(content);
                if (precio && beneficiosdia) {
                    precio = parseInt(precio[1].replace('.', ''));
                    beneficiosdia = parseInt(beneficiosdia[1].replace('.', ''));
                    var eficiencia = beneficiosdia/precio;
                    if(!$(this).find('.eficiencia').length) {
                        $(this).find('.imageListadoDiv').css('margin-bottom', '1em');
                        $(this).find('br').last().before('<br><p style="display:inline" title="Porcentaje del coste que se recupera al día">- Eficiencia: <span class="eficiencia"></span></p>');
                    }
                    $(this).find('.eficiencia').html((eficiencia*100).toFixed(2) + '%');
                }
            });
        },
        init() {
            // verificarPrecio se llama después de comprar un edificio y parsear el ajax
            var old_verificarPrecio = verificarPrecio.clone();
            verificarPrecio = function(id) {
                buildings.calc();
                old_verificarPrecio(id);
            };
            buildings.calc();
        }
    };

    Function.prototype.clone = function() {
        var that = this;
        var temp = function temporary() { return that.apply(this, arguments); };
        for(var key in this) {
            if (this.hasOwnProperty(key)) {
                temp[key] = this[key];
            }
        }
        return temp;
    };
})();