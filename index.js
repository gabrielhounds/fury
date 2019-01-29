$(document).ready(function(){
	loadScripts();
});

function loadScripts() {
  $.when(
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" ),
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.5/pixi.min.js" ),
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/plugins/PixiPlugin.min.js" ),
    $.getScript( "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
	).done(function(){
		console.log('SCRIPTS LOADED');
    	setTimeout( function() { init(); }, 500);
	});
}

function init() {
	var log 		= console.log,
	Application 	= PIXI.Application,
	loader 			= PIXI.loader,
	resources 		= PIXI.loader.resources,
	Sprite 			= PIXI.Sprite;

	var t = TweenMax;

	var stageW = 0
	var stageH = 0;

	var shoeHolder, shoeTextures, shoeSequence;

	log('init');

	var main = $('<div>', { id : 'main' }).css({ width : '100%' , height : '100%'}).prependTo('body');
	var shoeContainer = $('<div>', { id : 'shoeContainer' }).css({}).appendTo(main);
	var logo = $('<div>', { id : 'logo' }).appendTo(main);
	var logo_2 = $('<div>', { id : 'logo_2' }).appendTo(main);
	var nav = $('<div>', { id : 'nav' }).appendTo(main);
	var line = $('<div>', { id : 'line' }).appendTo(nav);

	var cta = $('<div>', { id : 'cta' }).appendTo(main);

	var btn1 = $('<div>', { id : 'btn1' , class : 'btn' }).css({ width : '100px' , height : '100px', top : 0, right : 0, 'background-color' : 'red', 'z-index' : 99}).prependTo('body');
	var btn2 = $('<div>', { id : 'btn2' , class : 'btn' }).css({ width : '100px' , height : '100px', top : '100px', right : 0, 'background-color' : 'blue', 'z-index' : 98}).prependTo('body');
	var btn22 = $('<div>', { id : 'btn2' , class : 'btn' }).css({ width : '100px' , height : '100px', top : '200px', right : 0, 'background-color' : 'green', 'z-index' : 97}).prependTo('body');

	var spot1 = $('<div>', { id : 'spot1' , class : 'hotspot g1 s1' 	}).prependTo(shoeContainer);
	var spot2 = $('<div>', { id : 'spot2' , class : 'hotspot g1 s2' 	}).prependTo(shoeContainer);
	var spot3 = $('<div>', { id : 'spot3' , class : 'hotspot g1 s3' }).prependTo(shoeContainer);

	var spot4 = $('<div>', { id : 'spot4' , class : 'hotspot g2 s1 ' 	}).prependTo(shoeContainer);
	var spot5 = $('<div>', { id : 'spot5' , class : 'hotspot g2 s2 ' 	}).prependTo(shoeContainer);
	var spot6 = $('<div>', { id : 'spot6' , class : 'hotspot g2 s3' 	}).prependTo(shoeContainer);

	var spot7 	= $('<div>', { id : 'spot7' , class : 'hotspot g3 s1 ' 	}).prependTo(shoeContainer);
	var spot8 	= $('<div>', { id : 'spot8' , class : 'hotspot g3 s2 ' 	}).prependTo(shoeContainer);
	var spot9 	= $('<div>', { id : 'spot9' , class : 'hotspot g3 s3' 	}).prependTo(shoeContainer);
	var spot10 	= $('<div>', { id : 'spot10' ,class : 'hotspot g3 s4' 	}).prependTo(shoeContainer);

	app = new Application({width : 1120, height : 840, legacy : true});
	app.renderer.backgroundColor = 0x1e354f;
	$(app.view).appendTo(shoeContainer);

	stageW = app.renderer.view.width;
	stageH = app.renderer.view.height;

	function setUp() {

		shoeHolder = new PIXI.Container()

		shoeTextures = [
			resources['fury_01.png'].texture,
			resources['fury_02.png'].texture,
			resources['fury_03.png'].texture,
			resources['fury_04.png'].texture,
			resources['fury_05.png'].texture,
			resources['fury_06.png'].texture,
			resources['fury_07.png'].texture,
			resources['fury_08.png'].texture,
			resources['fury_09.png'].texture,
			resources['fury_10.png'].texture,
			resources['fury_11.png'].texture,
			resources['fury_12.png'].texture,
			resources['fury_13.png'].texture,

			resources['fury_14.png'].texture,
			resources['fury_15.png'].texture,
			resources['fury_16.png'].texture,
			resources['fury_17.png'].texture,
			resources['fury_18.png'].texture,
			resources['fury_19.png'].texture,
			resources['fury_20.png'].texture,
			resources['fury_21.png'].texture,
			resources['fury_22.png'].texture,
			resources['fury_23.png'].texture,
			resources['fury_24.png'].texture,
			resources['fury_25.png'].texture,
			resources['fury_26.png'].texture,
			resources['fury_27.png'].texture,
			resources['fury_28.png'].texture,
			resources['fury_29.png'].texture,

			resources['fury_28.png'].texture,
			resources['fury_27.png'].texture,
			resources['fury_26.png'].texture,
			resources['fury_25.png'].texture,
			resources['fury_24.png'].texture,
			resources['fury_23.png'].texture,
			resources['fury_22.png'].texture,
			resources['fury_21.png'].texture,
			resources['fury_20.png'].texture,
			resources['fury_19.png'].texture,
			resources['fury_18.png'].texture,
			resources['fury_17.png'].texture,
			resources['fury_16.png'].texture,
			resources['fury_15.png'].texture,
			resources['fury_14.png'].texture,
			resources['fury_13.png'].texture,
			resources['fury_12.png'].texture,
			resources['fury_11.png'].texture,
			resources['fury_10.png'].texture,
			resources['fury_09.png'].texture,
			resources['fury_08.png'].texture,
			resources['fury_07.png'].texture,
			resources['fury_06.png'].texture,
			resources['fury_05.png'].texture,
			resources['fury_04.png'].texture,
			resources['fury_03.png'].texture,
			resources['fury_02.png'].texture,
		];
		shoeSequence = new PIXI.extras.AnimatedSprite(shoeTextures);

		shoeHolder.addChild(shoeSequence);
		app.stage.addChild(shoeHolder);

		$(shoeContainer).css({ top : '50%', left : '50%' , 'transform' : 'translate(-50%, -50%) scale(0.8)' });

		shoeSequence.animationSpeed = 0.2;

		$(btn1).click(function(e) {
			t.set('.hotspot', {opacity : 0});
			if (shoeSequence.currentFrame != 0) {
				shoeSequence.play();
				shoeSequence.onFrameChange = function(e) {
				if (shoeSequence.currentFrame === 0) {
					shoeSequence.stop();
					log('stop');
					t.set('.g1', {opacity : 1});
				}
			}
			}

		});

		$(btn2).click(function(e) {
			t.set('.hotspot', {opacity : 0});
			if (shoeSequence.currentFrame != 13) {
				shoeSequence.play();
				shoeSequence.onFrameChange = function(e) {
					log(shoeSequence.currentFrame);
					if (shoeSequence.currentFrame === 13) {
						shoeSequence.stop();
						log('stop');
						t.set('.g2', {opacity : 1});
					}
				}
			}

		});

		$(btn22).click(function(e) {
			t.set('.hotspot', {opacity : 0});
			if (shoeSequence.currentFrame != 28) {
				shoeSequence.play();
				shoeSequence.onFrameChange = function(e) {
					log(shoeSequence.currentFrame);
					if (shoeSequence.currentFrame === 28) {
						shoeSequence.stop();
						log('stop');
						t.set('.g3', {opacity : 1});
					}
				}
			}

		});

	}

	function loadProgressHandler() {
		//loadingText.setText( 'LOADING ' + Math.round(loader.progress) + '%');
	}

	function initLoader() {
      loader.add([
      	'fury_01.png',
      	'fury_02.png',
      	'fury_03.png',
      	'fury_04.png',
      	'fury_05.png',
      	'fury_06.png',
      	'fury_07.png',
      	'fury_08.png',
      	'fury_09.png',
      	'fury_10.png',
      	'fury_11.png',
      	'fury_12.png',
      	'fury_13.png',

      	'fury_14.png',
      	'fury_15.png',
      	'fury_16.png',
      	'fury_17.png',
      	'fury_18.png',
      	'fury_19.png',
      	'fury_20.png',
      	'fury_21.png',
      	'fury_22.png',
      	'fury_23.png',
      	'fury_24.png',
      	'fury_25.png',
      	'fury_26.png',
      	'fury_27.png',
      	'fury_28.png',
      	'fury_29.png'
      ]).on('progress', loadProgressHandler).load(setUp);
	}
	initLoader();
}





































//