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
	var cta = $('<div>', { id : 'cta' }).appendTo(main);

	var nav  = $('<div>', 	{ id : 'nav' 	}).appendTo(main);
	var line = $('<div>', 	{ id : 'line' 	}).appendTo(nav);

	var hit1 = $('<div>', 	{ id : 'hit1', class : 'hit active' }).appendTo(nav);
	var hit2 = $('<div>', 	{ id : 'hit2', class : 'hit' }).appendTo(nav);
	var hit3 = $('<div>', 	{ id : 'hit3', class : 'hit' }).appendTo(nav);

	var hitTxt1 = $('<div>', { id : 'hitTxt1', class : 'hitTxt active' }).appendTo(nav);
	var hitTxt2 = $('<div>', { id : 'hitTxt2', class : 'hitTxt' }).appendTo(nav);
	var hitTxt3 = $('<div>', { id : 'hitTxt3', class : 'hitTxt' }).appendTo(nav);

	var spot1 = $('<div>', { id : 'spot1' , class : 'hotspot g1 s1' 	}).prependTo(shoeContainer);
	var spot2 = $('<div>', { id : 'spot2' , class : 'hotspot g1 s2' 	}).prependTo(shoeContainer);
	var spot3 = $('<div>', { id : 'spot3' , class : 'hotspot g1 s3'     }).prependTo(shoeContainer);

	var spot4 = $('<div>', { id : 'spot4' , class : 'hotspot g2 s1' 	}).prependTo(shoeContainer);
	var spot5 = $('<div>', { id : 'spot5' , class : 'hotspot g2 s2' 	}).prependTo(shoeContainer);
	var spot6 = $('<div>', { id : 'spot6' , class : 'hotspot g2 s3' 	}).prependTo(shoeContainer);

	var spot7 	= $('<div>', { id : 'spot7'  , class : 'hotspot g3 s1' 	}).prependTo(shoeContainer);
	var spot8 	= $('<div>', { id : 'spot8'  , class : 'hotspot g3 s2' 	}).prependTo(shoeContainer);
	var spot9 	= $('<div>', { id : 'spot9'  , class : 'hotspot g3 s3' 	}).prependTo(shoeContainer);
	var spot10 	= $('<div>', { id : 'spot10' , class : 'hotspot g3 s4' 	}).prependTo(shoeContainer);

	var txt_1_1 = $('<div>', { id : 'txt_1_1', class : 'txt tg1 c1' 	}).prependTo(shoeContainer);
	var txt_1_2 = $('<div>', { id : 'txt_1_2', class : 'txt tg1 c2' 	}).prependTo(shoeContainer);
	var txt_1_3 = $('<div>', { id : 'txt_1_3', class : 'txt tg1 c3' 	}).prependTo(shoeContainer);

	var txt_2_1 = $('<div>', { id : 'txt_2_1', class : 'txt tg2 c1' 	}).prependTo(shoeContainer);
	var txt_2_2 = $('<div>', { id : 'txt_2_2', class : 'txt tg2 c2' 	}).prependTo(shoeContainer);
	var txt_2_3 = $('<div>', { id : 'txt_2_3', class : 'txt tg2 c3' 	}).prependTo(shoeContainer);

	var txt_3_1 = $('<div>', { id : 'txt_3_1', class : 'txt tg3 c1' 	}).prependTo(shoeContainer);
	var txt_3_2 = $('<div>', { id : 'txt_3_2', class : 'txt tg3 c2' 	}).prependTo(shoeContainer);
	var txt_3_3 = $('<div>', { id : 'txt_3_3', class : 'txt tg3 c3' 	}).prependTo(shoeContainer);
	var txt_3_4 = $('<div>', { id : 'txt_3_4', class : 'txt tg3 c4' 	}).prependTo(shoeContainer);

	app = new Application({width : 1120, height : 840, legacy : true, transparent: true});
	$(app.view).appendTo(shoeContainer);

	stageW = app.renderer.view.width;
	stageH = app.renderer.view.height;

	var _width = window.innerWidth;
	var _height = window.innerHeight;

	log(_width);

	t.set(['.g2', '.g3'], {autoAlpha:0});

	function handleShoe() {

		function handleHotspot(e) {

			t.to('.txt', 0.4, {opacity:0, ease:Power2.easeOut});
			t.to('.hotspot', 0.4, {rotation:'0deg', ease:Power2.easeOut});


			switch (e) {

				case 'spot1':
					if ( $('#spot1').hasClass('active') ) {
						$('#spot1').removeClass('active');
						$(txt_1_1).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot1').addClass('active');
						$(txt_1_1).addClass('active');
						t.to('#spot1', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_1_1, 	0.4, 	{opacity:1, ease:Power2.easeOut});
						t.from(txt_1_1, 0.4, 	{y:'-=20', ease:Power2.easeOut});
					}
				break;

				case 'spot2':
					if ( $('#spot2').hasClass('active') ) {
						$('#spot2').removeClass('active');
						$(txt_1_1).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot2').addClass('active');
						$(txt_1_2).addClass('active');
						t.to('#spot2', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_1_2, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_1_2, 0.4, {y:'+=20', ease:Power2.easeOut});
					}
				break;

				case 'spot3':
					if ( $('#spot3').hasClass('active') ) {
						$('#spot3').removeClass('active');
						$(txt_1_3).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot3').addClass('active');
						$(txt_1_3).addClass('active');
						t.to('#spot3', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_1_3, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_1_3, 0.4, {y:'-=20', ease:Power2.easeOut});
					}
				break;

				case 'spot4':
					if ( $('#spot4').hasClass('active') ) {
						$('#spot4').removeClass('active');
						$(txt_2_1).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot4').addClass('active');
						$(txt_2_1).addClass('active');
						t.to('#spot4', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_2_1, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_2_1, 0.4, {y:'-=20', ease:Power2.easeOut});
					}
				break;

				case 'spot5':
					if ( $('#spot5').hasClass('active') ) {
						$('#spot5').removeClass('active');
						$(txt_2_2).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot5').addClass('active');
						$(txt_2_2).addClass('active');
						t.to('#spot5', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_2_2, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_2_2, 0.4, {y:'-=20', ease:Power2.easeOut});
					}
				break;

				case 'spot6':
					if ( $('#spot6').hasClass('active') ) {
						$('#spot6').removeClass('active');
						$(txt_2_3).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot6').addClass('active');
						$(txt_2_3).addClass('active');
						t.to('#spot6', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_2_3, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_2_3, 0.4, {y:'+=20', ease:Power2.easeOut});
					}
				break;

				case 'spot7':
					if ( $('#spot7').hasClass('active') ) {
						$('#spot7').removeClass('active');
						$(txt_3_1).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot7').addClass('active');
						$(txt_3_1).addClass('active');
						t.to('#spot7', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_3_1, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_3_1, 0.4, {y:'-=20', ease:Power2.easeOut});
					}
				break;

				case 'spot8':
					if ( $('#spot8').hasClass('active') ) {
						$('#spot8').removeClass('active');
						$(txt_3_2).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot8').addClass('active');
						$(txt_3_2).addClass('active');
						t.to('#spot8', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_3_2, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_3_2, 0.4, {y:'-=20', ease:Power2.easeOut});
					}
				break;

				case 'spot9':
					if ( $('#spot9').hasClass('active') ) {
						$('#spot9').removeClass('active');
						$(txt_3_3).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot9').addClass('active');
						$(txt_3_3).addClass('active');
						t.to('#spot9', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_3_3, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_3_3, 0.4, {y:'+=20', ease:Power2.easeOut});
					}
				break;

				case 'spot10':
					if ( $('#spot10').hasClass('active') ) {
						$('#spot10').removeClass('active');
						$(txt_3_4).removeClass('active');
					} else {
						$('.hotspot').removeClass('active');
						$('.txt').removeClass('active');
						$('#spot10').addClass('active');
						$(txt_3_4).addClass('active');
						t.to('#spot10', 0.2, {rotation:'135deg', ease:Power2.easeOut});
						t.to(txt_3_4, 	0.2, {opacity:1, ease:Power2.easeOut});
						t.from(txt_3_4, 0.4, {y:'+=20', ease:Power2.easeOut});
					}
				break;
			}
		}

		$('.hotspot').mouseover(function(e) {
			t.to(this, 0.4, {scale:1.5, ease:Elastic.easeOut});
			//t.to(this, 0.4, {rotation:'180deg', ease:Power2.easeOut});
		}).mouseout(function(e) {
			t.to(this, 0.9, {scale:1.0, ease:Elastic.easeOut});
			//t.to(this, 0.4, {rotation:'0deg', ease:Power2.easeOut});
		}).click(function(e) {
			//log(e.target.id);
			handleHotspot(e.target.id);
			//t.to(this, 0.2, {rotation:'135deg', ease:Power2.easeOut});
		});

		$(hit1).click(function(e) {
			if (shoeSequence.currentFrame !== 0) {
				$('.hit').removeClass('active');
				$('.hitTxt').removeClass('active');
				$(hit1).addClass('active');

				t.to(hitTxt1, 0.3, {y:'-=20', opacity:0, ease:Power3.easeOut, onComplete:function(){ $(hitTxt1).addClass('active'); } });
				t.to(hitTxt1, 0.3, {y:'+=20', opacity:1, ease:Back.easeOut, delay:'0.3'});

				t.to('.hotspot', 0.3, {autoAlpha : 0, scale:0.0, rotation:'0deg', ease:Power3.easeOut});
				t.to('.txt', 0.4, {opacity:0, ease:Power2.easeOut});
				if (shoeSequence.currentFrame === 12) {
					shoeSequence.gotoAndStop(44);
					shoeSequence.play();
					shoeSequence.onFrameChange = function(e) {
						if (shoeSequence.currentFrame === 0) {
							shoeSequence.stop();
							t.staggerTo(['#spot1', '#spot2', '#spot3'], 0.7, {autoAlpha : 1, scale:1.0, ease:Elastic.easeOut}, 0.05);
							shoeSequence.onFrameChange = null;
						}
					}
				} else if (shoeSequence.currentFrame === 28) {
					shoeSequence.play();
					shoeSequence.onFrameChange = function(e) {
						if (shoeSequence.currentFrame === 0) {
							shoeSequence.stop();
							t.staggerTo(['#spot1', '#spot2', '#spot3'], 0.7, {autoAlpha : 1, scale:1.0, ease:Elastic.easeOut}, 0.05);
							shoeSequence.onFrameChange = null;
						}
					}
				}
			}

		});

		$(hit2).click(function(e) {
			if (shoeSequence.currentFrame != 12) {
				$('.hit').removeClass('active');
				$('.hitTxt').removeClass('active');
				$(hit2).addClass('active');
				//$(hitTxt2).addClass('active');

				t.to(hitTxt2, 0.3, {y:'-=20', opacity:0, ease:Power3.easeOut, onComplete:function(){ $(hitTxt2).addClass('active'); } });
				t.to(hitTxt2, 0.3, {y:'+=20', opacity:1, ease:Back.easeOut, delay:'0.3'});

				t.to('.hotspot', 0.3, {autoAlpha : 0, scale:0.0, ease:Power3.easeOut});
				t.to('.txt', 0.4, {opacity:0, ease:Power2.easeOut});
				if (shoeSequence.currentFrame === 0) {
					shoeSequence.play();
					shoeSequence.onFrameChange = function(e) {
						if (shoeSequence.currentFrame === 12) {
							shoeSequence.stop();
							t.staggerTo(['#spot4', '#spot5', '#spot6'], 0.7, {autoAlpha : 1, scale:1.0, ease:Elastic.easeOut}, 0.05);
							shoeSequence.onFrameChange = null;
						}
					}
				} else if (shoeSequence.currentFrame === 28) {
					shoeSequence.play();
					shoeSequence.onFrameChange = function(e) {
						if (shoeSequence.currentFrame === 44) {
							shoeSequence.stop();
							shoeSequence.gotoAndStop(12);
							t.staggerTo(['#spot4', '#spot5', '#spot6'], 0.7, {autoAlpha : 1, scale:1.0, ease:Elastic.easeOut}, 0.05);
							shoeSequence.onFrameChange = null;
						}
					}
				}
			}
		});

		$(hit3).click(function(e) {
			if (shoeSequence.currentFrame != 28) {
				$('.hit').removeClass('active');
				$('.hitTxt').removeClass('active');
				$(hit3).addClass('active');
				//$(hitTxt3).addClass('active');

				t.to(hitTxt3, 0.3, {y:'-=20', opacity:0, ease:Power3.easeOut, onComplete:function(){ $(hitTxt3).addClass('active'); } });
				t.to(hitTxt3, 0.3, {y:'+=20', opacity:1, ease:Back.easeOut, delay:'0.3'});

				t.to('.hotspot', 0.3, {autoAlpha : 0, scale:0.0, ease:Power3.easeOut});
				t.to('.txt', 0.4, {opacity:0, ease:Power2.easeOut});
				if (shoeSequence.currentFrame === 0) {
					shoeSequence.play();
					shoeSequence.onFrameChange = function(e) {
						if (shoeSequence.currentFrame === 28) {
							shoeSequence.stop();
							t.staggerTo(['#spot7', '#spot8', '#spot9', '#spot10'], 0.7, {autoAlpha : 1, scale:1.0, ease:Elastic.easeOut}, 0.05);
							shoeSequence.onFrameChange = null;
						}
					}
				} else if (shoeSequence.currentFrame === 12) {
					shoeSequence.play();
					shoeSequence.onFrameChange = function(e) {
						if (shoeSequence.currentFrame === 28) {
							shoeSequence.stop();
							t.staggerTo(['#spot7', '#spot8', '#spot9', '#spot10'], 0.7, {autoAlpha : 1, scale:1.0, ease:Elastic.easeOut}, 0.05);
							shoeSequence.onFrameChange = null;
						}
					}
				}
			}

		});

	}

	function setUp() {

		shoeHolder = new PIXI.Container()

		shoeTextures = [
			resources['fury_00.png'].texture, // 0
			resources['fury_01.png'].texture, // 0
			resources['fury_02.png'].texture,
			resources['fury_03.png'].texture,
			resources['fury_04.png'].texture,
			resources['fury_05.png'].texture,
			resources['fury_06.png'].texture, // 5
			resources['fury_07.png'].texture,
			resources['fury_08.png'].texture,
			resources['fury_09.png'].texture,
			resources['fury_10.png'].texture,
			resources['fury_11.png'].texture, // 10
			resources['fury_12.png'].texture,
			//
			resources['fury_13.png'].texture, // 12
			resources['fury_14.png'].texture, // 13
			resources['fury_15.png'].texture,
			resources['fury_16.png'].texture, // 15
			resources['fury_17.png'].texture,
			resources['fury_18.png'].texture,
			resources['fury_19.png'].texture,
			resources['fury_20.png'].texture,
			resources['fury_21.png'].texture, // 20
			resources['fury_22.png'].texture,
			resources['fury_23.png'].texture,
			resources['fury_24.png'].texture,
			resources['fury_25.png'].texture,
			resources['fury_26.png'].texture, // 25
			resources['fury_27.png'].texture,
			resources['fury_28.png'].texture, // 28
			//
			resources['fury_27.png'].texture, // 30
			resources['fury_26.png'].texture,
			resources['fury_25.png'].texture,
			resources['fury_24.png'].texture,
			resources['fury_23.png'].texture,
			resources['fury_22.png'].texture, // 35
			resources['fury_21.png'].texture,
			resources['fury_20.png'].texture,
			resources['fury_19.png'].texture,
			resources['fury_18.png'].texture,
			resources['fury_17.png'].texture, // 40
			resources['fury_16.png'].texture,
			resources['fury_15.png'].texture,
			resources['fury_14.png'].texture,
			resources['fury_13.png'].texture, // 44
			resources['fury_12.png'].texture, // 45
			resources['fury_11.png'].texture,
			resources['fury_10.png'].texture,
			resources['fury_09.png'].texture,
			resources['fury_08.png'].texture,
			resources['fury_07.png'].texture, // 50
			resources['fury_06.png'].texture,
			resources['fury_05.png'].texture,
			resources['fury_04.png'].texture,
			resources['fury_03.png'].texture,
			resources['fury_02.png'].texture, // 50
			resources['fury_01.png'].texture, // 50

		];

		shoeSequence = new PIXI.extras.AnimatedSprite(shoeTextures);
		shoeHolder.addChild(shoeSequence);
		app.stage.addChild(shoeHolder);
		//shoeSequence.loop = false;
		//$(shoeContainer).css({ top : '50%', left : '50%' , 'transform' : 'translate(-50%, -50%) scale(0.8)' });
		shoeSequence.animationSpeed = 0.2;

		handleShoe();


	} // SETUP

	function loadProgressHandler() {
		//loadingText.setText( 'LOADING ' + Math.round(loader.progress) + '%');
	}

	function initLoader() {
      loader.add([
	  	'fury_00.png',
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
      ]).on('progress', loadProgressHandler).load(setUp);
	}
	initLoader();
}





































//