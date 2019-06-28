// Çekirdek ayarları
nostaljiengine.oyun_ismi = "NEN Waves Invaders";
nostaljiengine.pxM=0;
nostaljiengine.select_tusu=32;
nostaljiengine.A_tusu=77;

// Oyun ayarları
nostaljiengine.dusmanAdet=1;
nostaljiengine.dusmanMaxAdet=100000;
nostaljiengine.mermiMenzil=40;
nostaljiengine.mermiHiz=2;
nostaljiengine.playerHiz=2;
nostaljiengine.avPuan=10;
nostaljiengine.topPuan=0;
nostaljiengine.ekraniSars=0;
nostaljiengine.playerCan=5;
nostaljiengine.playerMaxCan=5;
nostaljiengine.dokunulmazlikRenk1='red';
nostaljiengine.dokunulmazlikRenk2='blue';
nostaljiengine.dokunulmazlikSure=50;
nostaljiengine.dalgaHiz=10;
nostaljiengine.dalgaSuresi = 1000;
nostaljiengine.dalgaUyariSuresi = 60;
nostaljiengine.dalgaAnahtar = 0;
nostaljiengine.suluBolgeAnahtar = 0;
nostaljiengine.suluBolgeSuresi = 100;
nostaljiengine.suCekilmeSuresi = 0;
nostaljiengine.uyariSuresi = 0;
nostaljiengine.bgRenk=['#a50','#952','#745','#537','#329','#11c','blue'];
nostaljiengine.bgRenkTonu=0;


// Kısaltılmış Renk Kodları 
var g = 'green';
var brw = '#763400';
var adaRenk = '#E3BC4D';
var ag = '#FFEF65';
//gri
var gr = '#DADADA';
//siyah
var sh = '#2B2B2B';
//beyaz
var bz = '#ECECEC';
//sari
var si = '#FFF300';
//koyu gri
var kgr = '#565655';
// ten 
var tn = '#FFDF89';
var si = '#FFF300';
// dalga
var n = '#85C1E9';
var m = 'blue';


var map = {
	'player_dur':{
		'sure':0,
		'gorsel':[
			[
				[0,1,1,1,0],
				[1,0,1,0,1],
				[1,1,1,1,1],
				[0,1,1,1,0]
			]
		]
	},
	'player_sag':{
		'sure':20,
		'gorsel':[
			[
				[0,1,1,1,0],
				[1,1,0,1,0],
				[1,1,1,1,1],
				[0,1,1,1,0]
			]/*,
			[
				[0,1,1,1,0],
				[1,1,0,1,0],
				[0,1,1,1,0],
			]*/
		]
	},
	'player_sol':{
		'sure':20,
		'gorsel':[
			[
				[0,1,1,1,0],
				[0,1,0,1,1],
				[1,1,1,1,1],
				[0,1,1,1,0]
			]/*,
			[
				[0,1,1,1,0],
				[0,1,0,1,1],
				[0,1,1,1,0],
			]*/
		]
	},
	'player_asagi':{
		'sure':20,
		'gorsel':[
			[
				[0,1,1,1,0],
				[1,0,1,0,1],
				[1,1,1,1,1],
				[0,1,1,1,0]
			]/*,
			[
				[0,1,1,1,0],
				[1,0,1,0,1],
				[0,1,1,1,0]
			]*/
		]
	},
	'player_yukari':{
		'sure':10,
		'gorsel':[
			[
				[0,1,1,1,0],
				[1,1,1,1,1],
				[1,1,1,1,1],
				[0,1,1,1,0]
			]/*,
			[
				[0,1,1,1,0],
				[1,1,1,1,1],
				[0,1,1,1,0]
			]*/
		]

	},
	'mermi_sag':{
		'sure':20,
		'gorsel':[
			[
				[1,0,0,0,0],
				[0,1,1,0,0],
				[0,0,1,1,0],
				[0,0,1,1,0],
				[0,0,0,1,0],
				[0,0,0,1,1],
				[0,0,0,0,1],
				[0,0,0,0,1],
				[0,0,0,1,1],
				[0,0,1,1,0],
				[0,1,1,0,0],
				[1,0,0,0,0],
			]
		]
	},
	'mermi_sol':{
		'sure':20,
		'gorsel':[
			[
				[0,0,0,0,1],
				[0,0,1,1,0],
				[0,1,1,0,0],
				[0,1,1,0,0],
				[0,1,0,0,0],
				[1,1,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,1,0,0,0],
				[0,0,1,1,0],
				[0,0,1,1,0],
				[0,0,0,0,1],
			]
		]
	},
	'mermi_yukari':{
		'sure':20,
		'gorsel':[
			[
				[0,0,0,0,1,1,1,1,0,0,0,0],
				[0,0,1,1,1,0,0,0,1,1,0,0],
				[0,1,1,0,0,0,0,0,0,1,1,0],
				[0,1,0,0,0,0,0,0,0,0,1,0],
				[1,0,0,0,0,0,0,0,0,0,0,1],
			]
		]
	},
	'mermi_asagi':{
		'sure':20,
		'gorsel':[
			[
				[1,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,1,0],
				[0,1,1,0,0,0,0,0,0,1,1,0],
				[0,0,1,1,1,0,0,0,1,1,0,0],
				[0,0,0,0,1,1,1,1,0,0,0,0],
			]
		]
	},
	'kalp':{
		'sure':5,
		'gorsel':[
			[
				[0,'#E74C3C',0,'#E74C3C',0],
				['#E74C3C','#E74C3C','#E74C3C','#FFA1A4','#E74C3C'],
				[0,'#E74C3C','#E74C3C','#E74C3C',0],
				[0,0,'#E74C3C',0,0]
			]		
		]
	},
	'dusman_1':{
		'sure':20,
		'gorsel':[
			[
				[0,0,'#3E007C',1,1,1,0,0],
				[0,1,'#D9BEF4',1,1,1,1,0],
				[0,1,1,1,1,1,1,0],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[0,1,0,1,0,1,0,1]
			],
			[
				[0,0,1,1,1,1,0,0],
				[0,1,1,1,1,1,1,0],
				[0,1,1,1,1,1,1,0],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,0,1,0,1,0,1,0]
			]
		]
	},
	'ada_1':{
		'sure':0,
		'gorsel':[
			[
				[0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0],
				[0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0],
				[0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,0,ag,ag,ag,ag,ag,0,0,0,ag,ag,ag,ag,ag,0,0,0,0,0,0,0]
			]
		]
	},
	'ada_2':{
		'sure':0,
		'gorsel':[
			[
				[0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0],
				[0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0],
				[0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,0,ag,ag,ag,ag,ag,0,0,0,ag,ag,ag,ag,ag,0,0,0,0,0,0,0]
			]
		]
	},
	'ada_3':{
		'sure':0,
		'gorsel':[
			[
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0],
				[0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0],
				[0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0],
				[0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0],
				[0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0]
			]
		]
	},
	'ada_4':{
		'sure':0,
		'gorsel':[
			[
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,,ag,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,ag,ag,ag,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0],
				[0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0,0],
				[0,0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag],
				[ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0],
				[0,0,0,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,ag,0,0],
				[0,0,0,0,0,ag,ag,ag,0,ag,0,0,0,ag,ag,ag,ag,0,0,0,0,0,0,0]
			]
		]
	},
	'pixar':{
		'sure':5,
		'gorsel':[
			[
				[0,g,0,0,0,g,0],
				[0,0,g,0,g,0,0],
				[0,0,0,g,0,0,0],
				[g,g,g,g,g,g,g],
				[0,0,g,g,g,0,0],
				[0,0,0,g,0,0,0],
				[g,g,g,g,g,g,g],
				[g,g,g,g,g,g,g],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,g,g,0,g,g,0],
				[g,g,g,0,g,g,g]

			
			],
			[
				[g,g,g,g,g,g,g],
				[0,0,g,g,g,0,0],
				[0,0,0,g,0,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,g,g,0,g,g,0],
				[0,g,g,0,g,g,0]
			]		
		]
	},
	'pixar2':{
		'sure':10,
		'gorsel':[
			[
				[0,0,0,0,0,0,0],
				[g,g,g,g,g,g,g],
				[0,0,g,g,g,0,0],
				[0,0,0,g,0,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,g,g,0,g,g,0],
				[0,g,g,0,g,g,0]
			],
			[	
				[g,g,g,g,g,g,g],
				[0,0,g,g,g,0,0],
				[0,0,0,g,0,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,g,g,0,g,g,0],
				[0,g,g,0,g,g,0],
				[0,0,0,0,0,0,0]
			]		
		]
	},
	'pixar3':{
		'sure':10,
		'gorsel':[
			[
				[g,g,g,g,g,g,g],
				[g,g,g,g,g,g,g],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0]
			]		
		]
	},
 	'tSon':{
		'sure':10,
		'gorsel':[
			[
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[0,0,0,1,1,0,0,0],
				[0,0,0,1,1,0,0,0],
				[0,0,0,1,1,0,0,0],
				[0,0,0,1,1,0,0,0],
				[0,0,0,1,1,0,0,0]
			],
			[	
				[g,g,g,g,g,g,g],
				[0,0,g,g,g,0,0],
				[0,0,0,g,0,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,0,g,g,g,0,0],
				[0,g,g,0,g,g,0],
				[0,g,g,0,g,g,0],
				[0,0,0,0,0,0,0]
			]		
		]
	},
	'dalga_1':{
		'sure':10,
		'gorsel':[
			[
				[0,0,0,0,0,0,0,0,n,n,n,m,m,m,m,m],
				[0,0,0,0,0,0,0,0,0,n,n,n,m,m,m,m],
				[0,0,0,0,0,0,0,0,0,0,n,n,n,m,m,m],
				[0,0,0,0,0,0,0,0,0,0,0,n,n,n,m,m],
				[0,0,0,0,0,0,0,0,0,0,0,0,n,n,n,m],
				[0,0,0,0,0,0,0,0,0,0,0,0,n,n,n,m],
				[0,0,0,0,0,0,0,0,0,0,0,0,n,n,n,m],
				[0,0,0,0,0,0,0,0,0,0,0,n,n,n,n,m],
				[0,0,0,0,0,0,0,0,0,0,n,n,n,n,n,m],
				[0,0,0,0,0,0,0,0,0,n,n,n,n,n,m,m],
				[0,0,0,0,0,0,0,0,n,n,n,n,n,m,m,m],
				[0,0,0,0,0,0,0,n,n,n,n,n,m,m,m,m],
				[0,0,0,0,0,0,n,n,n,n,n,m,m,m,m,m],
				[0,0,0,0,0,n,n,n,n,n,m,m,m,m,m,m],
				[0,0,0,0,n,n,n,n,n,m,m,m,m,m,m,m],
				[0,0,0,n,n,n,n,n,m,m,m,m,m,m,m,m],
				[0,0,n,n,n,n,n,m,m,m,m,m,m,m,m,m],
				[0,0,n,n,n,n,n,m,m,m,m,m,m,m,m,m],
				[0,0,n,n,n,n,m,m,m,m,m,m,m,m,m,m],
				[0,0,n,n,n,n,m,m,m,m,m,m,m,m,m,m],
				[0,0,0,n,n,n,n,m,m,m,m,m,m,m,m,m],
				[0,0,0,0,n,n,n,n,m,m,m,m,m,m,m,m],
				[0,0,0,0,0,n,n,n,n,m,m,m,m,m,m,m],
				[0,0,0,0,0,0,n,n,n,n,m,m,m,m,m,m],
				[0,0,0,0,0,0,0,n,n,n,n,m,m,m,m,m],
			]
		]
	}
};

var obje = {
	player:{
		x:0,
		y:0,
		w:5,
		h:4,
		gorsel:'player_dur',
		yon:'sag',
		renk:'#fa6',
		anaRenk:'#fa6'
	},

	mermi:[/*{
		x:20,
		y:20,
		w:11,
		h:6,
		gorsel:'mermi_1',
	}*/],


	dusman:[/*{
		x:20,
		y:20,
		w:11,
		h:6,
		gorsel:'dusman_1',
	}*/],

	ada_1:{
		x:10,
		y:25,
		w:25,
		h:19,
		gorsel:'ada_1',
	},

	ada_2:{
		x:55,
		y:45,
		w:25,
		h:19,
		gorsel:'ada_2',
	},

	ada_3:{
		x:55,
		y:2,
		w:36,
		h:10,
		gorsel:'ada_3',
	},

	ada_4:{
		x:100,
		y:15,
		w:25,
		h:32,
		gorsel:'ada_4',
	},

	dalga:{
		x:200,
		y:1,
		w:16,
		h:25,
		gorsel:'dalga_1',
	},

	pixar:{
		x:20,
		y:25,
		w:1,
		h:2,
		gorsel:'pixar',
	}
}

// Karakter Canından Bir Düş, Can Biterse Oyunu Bitir
function can_dus(){
	if(nostaljiengine.dokunulmazlikSure<1){
		nostaljiengine.playerCan--;
		nostaljiengine.dokunulmazlikSure=150;
		nostaljiengine.ekraniSars = 1;
	    nostaljiengine.ses.isabet.currentTime = 0.2;
		nostaljiengine.ses.isabet.play();

	}
	if( nostaljiengine.playerCan < 1 ){
		nostaljiengine.oyunAnahtar = 3;
	}
}
// Aktif Oyun Boyunca Düşmanların Konumlarını Güncelle
function dusman_ilerle(){
	obje.dusman.forEach(function(d,j){
		var deg=0;
		if( d.x < obje.player.x ){
			d.x++;
		}
		else if( d.x > obje.player.x){
			d.x--;
		}
		else{
			deg++;
		}
		if( d.y < obje.player.y ){
			d.y++;
		}
		else if( d.y > obje.player.y ){
			d.y--;
		}
		else{
			deg++;
		}
		if(deg>1){
			can_dus();
		}
	});
}
// Yeni Düşman Oluştur
function dusman_ekle(){ console.log('Düşman oluşturuldu');
	switch(rand(1,4)){
		case 1: 
			var _x=rand(1,200);
			var _y=-20;
		break;
		case 2: 
			var _x=200;
			var _y=rand(1,100);;
		break;
		case 3: 
			var _x=rand(1,200);
			var _y=100;
		break;
		case 4: 
			var _x=-20;
			var _y=rand(1,100);
		break;
	}
	obje.dusman.push({
		x:_x,
		y:_y,
		w:11,
		h:8,
		gorsel:'dusman_1',
	});
}
// Belirsiz Aralıklarla Düşman Türet
function dusman_turet(){
	if(obje.dusman.length < nostaljiengine.dusmanMaxAdet ){
		if(rand(1,30)==30)dusman_ekle();
		if(nostaljiengine.topPuan > 500){
			if(rand(1,25)==25)dusman_ekle();
		}
		if(nostaljiengine.topPuan > 1000){
			if(rand(1,18)==18)dusman_ekle();
		}
		if(nostaljiengine.topPuan > 5000){
			if(rand(1,10)==10)dusman_ekle();
		}
	}
}
// Ekran Sarsılma Efekti Uygula
function ekrani_sars(){
	if(	nostaljiengine.pxKX == 0){
		nostaljiengine.pxKX=1;
		nostaljiengine.pxKY=1;
	}
	else if( nostaljiengine.pxKX == 1 ){
		nostaljiengine.pxKX=-1;
		nostaljiengine.pxKY=-1;
	}
	else if( nostaljiengine.pxKX == -1 ){
		nostaljiengine.pxKX=0;
		nostaljiengine.pxKY=0;
		nostaljiengine.ekraniSars=0;
	}
}
// Yeni Sonik Dalga Oluştur
function mermi_ekle(){
	obje.mermi.push({
		x:obje.player.x,
		y:obje.player.y,
		basX:obje.player.x,
		basY:obje.player.y,
		w:11,
		h:6,
		gorsel:'mermi_'+obje.player.yon,
		yon:obje.player.yon
	});
}
// Yön Tanımlı Dalgaların Güzergahlarını Belirle
function mermi_ilerle(){
	obje.mermi.forEach(function(e,i){
		if( e.yon == 'sag' ){
			e.x+=nostaljiengine.mermiHiz;
		}
		else if( e.yon == 'sol' ){
			e.x-=nostaljiengine.mermiHiz;
		}
		else if( e.yon == 'asagi' ){
			e.y+=nostaljiengine.mermiHiz;
		}
		else if( e.yon == 'yukari' ){
			e.y-=nostaljiengine.mermiHiz;
		}

		if(e.x > e.basX + nostaljiengine.mermiMenzil || e.x < e.basX - nostaljiengine.mermiMenzil || e.y > e.basY + nostaljiengine.mermiMenzil || e.y < e.basY - nostaljiengine.mermiMenzil){
			delete obje.mermi[i];
		}


		// Düşman Konum Kontrolü Yap
		obje.dusman.forEach(function(d,j){
			e.cx = (e.x + Math.floor(e.w/2));
			e.cy = (e.y + Math.floor(e.h/2));

			if( e.cx > d.x && e.cx < d.x+d.w && e.cy > d.y  && e.cy < d.y+d.h ){
			    nostaljiengine.ses.isabet.currentTime = 0.2;
				nostaljiengine.ses.isabet.play();

				delete obje.mermi[i];
				delete obje.dusman[j];

				nostaljiengine.topPuan += nostaljiengine.avPuan;

				nostaljiengine.ekraniSars = 1;
			}
		});

	});
}
// Saldırı Aksiyonunu Başlat
function ates_et(){
    nostaljiengine.ses.gun.pause();
    nostaljiengine.ses.gun.currentTime = 0.1;
	nostaljiengine.ses.gun.play();

	mermi_ekle();
}
// Belirli Bir Süre Dokunulmazlık Uygula
function dokunulmazlik(){
	if(nostaljiengine.dokunulmazlikSure>0){
		if( nostaljiengine.dokunulmazlikRenk1 == obje.player.renk ){
			obje.player.renk = nostaljiengine.dokunulmazlikRenk2;
		}
		else{
			obje.player.renk = nostaljiengine.dokunulmazlikRenk1;
		}
		nostaljiengine.dokunulmazlikSure--;
	}
	else{
		obje.player.renk=obje.player.anaRenk;
	}
}


// Belirli Aralıklarla Deniz Dalgası Gönder
function dalga_zamanla(){
	if( !nostaljiengine.dalgaSuresi_ ){
		nostaljiengine.dalgaSuresi_ = nostaljiengine.dalgaSuresi;
	}
	if( nostaljiengine.dalgaSuresi < 1 ){
		nostaljiengine.dalgaAnahtar = 1;
		nostaljiengine.dalgaSuresi = nostaljiengine.dalgaSuresi_;

	}
	else {
		nostaljiengine.dalgaSuresi--;
	}

	if( nostaljiengine.dalgaSuresi == nostaljiengine.dalgaUyariSuresi ){
		nostaljiengine.uyariSuresi = nostaljiengine.dalgaUyariSuresi;
		nostaljiengine.ses.wave.currentTime = 2;
		nostaljiengine.ses.wave.play();
	}
}
// Deniz Dalgası Gönder
function dalga_gonder(){
	if( !nostaljiengine.suluBolgeSuresi_ ){
		nostaljiengine.suluBolgeSuresi_ = nostaljiengine.suluBolgeSuresi;
	}
	if( nostaljiengine.dalgaAnahtar ){
		if(obje.dalga.x>-20){
			obje.dalga.x-=nostaljiengine.dalgaHiz;
			//if(obje.dalga.x%5==0)nostaljiengine.dalgaHiz--;

			// Ekrana Dalganın Kuyruğunu Çiz
			kutu(obje.dalga.x+14,1,nostaljiengine.maxW-obje.dalga.x,nostaljiengine.maxH+2,m);
			// Ekrana Dalga Çiz
			for (var i = 0; i < 4; i++) {
				nostaljiengine.gorsel_ciz( obje.dalga.x,i*25, map[obje.dalga.gorsel] );
			}

			if(obje.dalga.x<10){
				nostaljiengine.bgRenkTonu = nostaljiengine.bgRenk.length-1;
			}

		}
		else{
			nostaljiengine.suluBolgeAnahtar = 1;
			nostaljiengine.suCekilmeSuresi = 28;
			nostaljiengine.suluBolgeSuresi = nostaljiengine.suluBolgeSuresi_;

			nostaljiengine.dalgaAnahtar = 0;
			obje.dalga.x=200;
			nostaljiengine.ses.wave.pause();
		}

	}
}
// Dalgaya Yakalanın Objeleri Yönet
function dalga_isabet_kontrol(){
	if( obje.dalga.x < obje.player.x && 
		// Adacıkların Dışında Bir Konumda İse
		( obje.player.x < obje.ada_1.x || obje.player.x > obje.ada_1.x+obje.ada_1.w || obje.player.y < obje.ada_1.y || obje.player.y > obje.ada_1.y+obje.ada_1.h ) &&
		( obje.player.x < obje.ada_2.x || obje.player.x > obje.ada_2.x+obje.ada_2.w || obje.player.y < obje.ada_2.y || obje.player.y > obje.ada_2.y+obje.ada_2.h ) &&
		( obje.player.x < obje.ada_3.x || obje.player.x > obje.ada_3.x+obje.ada_3.w || obje.player.y < obje.ada_3.y || obje.player.y > obje.ada_3.y+obje.ada_3.h ) &&
		( obje.player.x < obje.ada_4.x || obje.player.x > obje.ada_4.x+obje.ada_4.w || obje.player.y < obje.ada_4.y || obje.player.y > obje.ada_4.y+obje.ada_4.h )
	){
		can_dus();
	}

	// Düşman Konum Kontrolü Yap
	obje.dusman.forEach(function(d,j){
		if( obje.dalga.x < d.x ){
		    nostaljiengine.ses.isabet.currentTime = 0.2;
			nostaljiengine.ses.isabet.play();

			delete obje.dusman[j];
			nostaljiengine.ekraniSars = 1;
		}
	});
		
}

// Sulu Bölge Bataklık Kontrolü
function sulu_bolge_kontrol(){
	if( nostaljiengine.suluBolgeAnahtar ){
		nostaljiengine.bgRenkTonu = nostaljiengine.bgRenk.length-1;

		nostaljiengine.suluBolgeSuresi--;
		if ( nostaljiengine.suluBolgeSuresi < 1 ){
			nostaljiengine.suluBolgeAnahtar = 0;
		}
	}
	else if( !nostaljiengine.suluBolgeAnahtar && nostaljiengine.bgRenkTonu > 0 && nostaljiengine.suCekilmeSuresi > 0 ){
		if(nostaljiengine.suCekilmeSuresi % 4 == 0){
			nostaljiengine.bgRenkTonu--;
		}
		nostaljiengine.suCekilmeSuresi--;
	}
}

// Dalga Öncesi Uyarı
function dalga_uyarisi(){
	if( nostaljiengine.uyariSuresi > 0 ){
		harf( Math.floor(nostaljiengine.maxW/2)-5, Math.floor(nostaljiengine.maxH/2)-14, '!', randRgb() );
		nostaljiengine.uyariSuresi--;
	}
}



// Giriş Ekranı Animasyonları ve Ayarları 
var tSon_x = 55;
var tSon_y = 40; 
nostaljiengine.zilanSayac = 0;
function zilan() {
			//if ( !a ) {
				a = nostaljiengine.zilanSayac;

			//}
			var hiz = 100;
			if ( a == 1 ) {
				harf(45,40,'S','#f00');
			}
			else {
				harf(45,40,'S','#700');
			}
			
			if ( a == 2 ) {
				harf(tSon_x,tSon_y,'T','#f00');
			}
			else {
				harf(tSon_x,tSon_y,'T','#700');
			}
			
			if ( a == 3 ) {
				harf(65,40,'A','#f00');
			}
			else {
				harf(65,40,'A','#700');
			}
			
			if ( a == 4 ) {
				harf(75,40,'R','#f00');
			}
			else {
				harf(75,40,'R','#700');
			}
			
			if ( a == 5 ) {
				harf(85,40,'T','#f00');
			}
			else {
				harf(85,40,'T','#700');
			}			
			if ( a > 50) {
				nostaljiengine.zilanSayac = 0;
			}

			nostaljiengine.zilanSayac++;

			if(obje.pixar.x <  55){

				obje.pixar.x++;
	
			}
			else if (obje.pixar.y < 40){

				obje.pixar.y++;
				map.pixar.durdur = 1;
				obje.pixar.gorsel = 'pixar2';


				if(obje.pixar.y > 30){

					obje.pixar.gorsel = 'pixar3';
					tSon_y++;
				}
				
			}

			kutu(55,48,10,15,'#000');
}
function intro(){
	nostaljiengine.px0='black';
	harf(30,5,'N',randRgb());
	harf(40,5,'E',randRgb());
	harf(50,5,'N',randRgb());

	harf(60,5,'W',randRgb());
	harf(70,5,'A',randRgb());
	harf(80,5,'V',randRgb());
	harf(90,5,'E',randRgb());
	harf(100,5,'S',randRgb());

	harf(30,15,'I',randRgb());
	harf(40,15,'N',randRgb());
	harf(50,15,'V',randRgb());
	harf(60,15,'A',randRgb());
	harf(70,15,'D',randRgb());
	harf(80,15,'E',randRgb());
	harf(90,15,'R',randRgb());
	harf(100,15,'S',randRgb());
	zilan();

	nostaljiengine.gorsel_ciz(obje.pixar.x,obje.pixar.y, map[obje.pixar.gorsel]);
}

// Oyun Temel Fonksiyonları
function oyunu_baslat(){
	// Dinamik Değerleri Sıfırla
	obje.dusman=[];
	obje.mermi=[];
	obje.dalga.x=200;
	nostaljiengine.playerCan = nostaljiengine.playerMaxCan;
	nostaljiengine.topPuan = 0;
	nostaljiengine.dalgaAnahtar = 0;
	nostaljiengine.suluBolgeAnahtar = 0;

	// Karakteri sahneye ortala
	obje.player.x=Math.floor(nostaljiengine.maxW/2);
	obje.player.y=Math.floor(nostaljiengine.maxH/2);

	// Düşmanları Oluştur
	for (var i = 0; i < nostaljiengine.dusmanAdet; i++) {
		dusman_ekle();
	}

	// Arka Plan Rengini Sıfırla
	nostaljiengine.bgRenkTonu=0;

	// İntro Sesini Başlat
	nostaljiengine.ses.theme.loop=true;
	nostaljiengine.ses.theme.currentTime = 0;
	nostaljiengine.ses.theme.play();
}
function pause(){
	var x=Math.floor(nostaljiengine.maxW/2)-20,y=Math.floor(nostaljiengine.maxH/2);
	harf(x+1 ,y,'P', '#'+rand(1,9)+'00' );
	harf(x+10,y,'A', '#'+rand(1,9)+'00' );
	harf(x+19,y,'U', '#'+rand(1,9)+'00' );
	harf(x+28,y,'S', '#'+rand(1,9)+'00' );
	harf(x+37,y,'E', '#'+rand(1,9)+'00' );

	nostaljiengine.ses.theme.volume = 1;
}
function oyun_bitti(){

	var x=Math.floor(nostaljiengine.maxW/2)-36,y=Math.floor(nostaljiengine.maxH/2);
	harf(x+1 ,y,'G', '#'+rand(1,9)+'00' );
	harf(x+10,y,'A', '#'+rand(1,9)+'00' );
	harf(x+19,y,'M', '#'+rand(1,9)+'00' );
	harf(x+28,y,'E', '#'+rand(1,9)+'00' );
	harf(x+37,y,'O', '#'+rand(1,9)+'00' );
	harf(x+46,y,'V', '#'+rand(1,9)+'00' );
	harf(x+55,y,'E', '#'+rand(1,9)+'00' );
	harf(x+64,y,'R', '#'+rand(1,9)+'00' );

	// Puanı Ekrana Çiz
	puan(nostaljiengine.maxW-8,1,nostaljiengine.topPuan,'#'+rand(1,9)+'00');

	// Arka Plan Rengi Belirle
	nostaljiengine.px0='black';

	// Ses Çal
	if(!nostaljiengine.ses.destroy.anahtar){
		nostaljiengine.ses.theme.pause();
		nostaljiengine.ses.destroy.play();
		nostaljiengine.ses.destroy.anahtar=1;
	}

	nostaljiengine.ses.theme.volume = 1;
}



nostaljiengine.start = function(){
	// Bu fonksiyon içeriği yükleme tamamlandıktan sonra bir sefer çalışacak

	// Sesleri Yükle
	this.ses_yukle('theme');
	this.ses_yukle('token');
	this.ses_yukle('wave');
	this.ses_yukle('gun');
	this.ses_yukle('isabet');
	this.ses_yukle('destroy');
	this.ses_yukle('firlat');

	// Başlangıç Ayarlarını Yükle
	oyunu_baslat();

}

nostaljiengine.update = function(){
	// Bu fonksiyon içeriği oyun sonlandırılana kadar tekrar edecek
	if(this.ekraniSars){
		ekrani_sars();
	}

	// Arka Plan Rengini Değiştir
	nostaljiengine.px0=nostaljiengine.bgRenk[nostaljiengine.bgRenkTonu];

	// Oyun Başladı Mı?
	if( this.oyunAnahtar == 1 ) {

		// Düşman Eylemlerini Uygula
		dusman_ilerle();
		dusman_turet();

		// Mermi Eylemlerini Uygula
		mermi_ilerle();

		// Dalga Eylemlerini Uygula
		dalga_zamanla();
		dalga_uyarisi();
		dalga_gonder();
		dalga_isabet_kontrol();


		// Sulu Bölge, Bataklık Kontrolü
		sulu_bolge_kontrol();


		// Dokunulmazlık Kalkanını Kullan
		dokunulmazlik();


		// Harita Nesnelerini Ekrana Çiz
		this.gorsel_ciz( obje.ada_1.x, obje.ada_1.y, map[obje.ada_1.gorsel] );
		this.gorsel_ciz( obje.ada_2.x, obje.ada_2.y, map[obje.ada_2.gorsel] );
		this.gorsel_ciz( obje.ada_3.x, obje.ada_3.y, map[obje.ada_3.gorsel] );
		this.gorsel_ciz( obje.ada_4.x, obje.ada_4.y, map[obje.ada_4.gorsel] );


		// Karakteri Ekrana Çiz
		this.gorsel_ciz( obje.player.x, obje.player.y, map['player_'+obje.player.yon], obje.player.renk );

		// Düşmanları Ekrana Çiz
		obje.dusman.forEach(function(e){
			nostaljiengine.gorsel_ciz( e.x, e.y, map[e.gorsel] );
		});

		// Mermileri Ekrana Çiz
		obje.mermi.forEach(function(e){
			nostaljiengine.gorsel_ciz( e.x, e.y, map[e.gorsel], randRgb() );
		});

		// Puanı Ekrana Çiz
		puan(this.maxW-8,1,this.topPuan,'white');

		// Kalan Canı Ekrana Çiz
		if(this.playerCan>1){
			kutu(3,3,this.playerCan*6-4,7);
			for (var i = 1; i < this.playerCan; i++){
				this.gorsel_ciz( (i*6)-2, 4, map.kalp );
			}
		}

		this.ses.theme.volume = 0.3;
		

	}
	else if( this.oyunAnahtar == 2 ) {
		pause();
	}
	else if( this.oyunAnahtar == 3 ) {
		oyun_bitti();
	}
	else{
		intro();
	}

}








// Kontrol tuşlarına basıldığında gerçekleştirilecek eylemler
nostaljiengine.sag_yon_tusuna_basildiginda = function(){
	obje.player.yon = 'sag';
	if( obje.player.x <= this.maxW-obje.player.w ){
		obje.player.x+=this.playerHiz;
	}
}

nostaljiengine.sol_yon_tusuna_basildiginda = function(){
	obje.player.yon = 'sol';
	if( obje.player.x > 1 ){
		obje.player.x-=this.playerHiz;
	}
}

nostaljiengine.yukari_yon_tusuna_basildiginda = function(){
	obje.player.yon = 'yukari';
	if( obje.player.y > 1 ){
		obje.player.y-=this.playerHiz;
	}
}

nostaljiengine.asagi_yon_tusuna_basildiginda = function(){
	obje.player.yon = 'asagi';
	if( obje.player.y <= this.maxH-obje.player.h ){
		obje.player.y+=this.playerHiz;
	}
}

nostaljiengine.A_tusuna_basildiginda = function(){
	if( !this.ses.theme.sesKapat ){
		this.ses.theme.pause();
		this.ses.theme.sesKapat = 1;
	}
	else{
		this.ses.theme.play();
		this.ses.theme.sesKapat = 0;
	}
}

nostaljiengine.B_tusuna_basildiginda = function(){
}

nostaljiengine.start_tusuna_basildiginda = function(){
	if(!this.oyunAnahtar || this.oyunAnahtar == 2){
		this.oyunAnahtar = 1;
		nostaljiengine.px0='white';
	}
	else if( this.oyunAnahtar == 3 ){
		this.oyunAnahtar = 1;
		nostaljiengine.px0='white';
		oyunu_baslat();
	}
	else{
		this.oyunAnahtar = 2;
	}

    this.ses.token.pause();
    this.ses.token.currentTime = 0;
	this.ses.token.play();
}

nostaljiengine.select_tusuna_basildiginda = function(){
	ates_et();
}

nostaljiengine.diger_tusuna_basildiginda = function(e){
	console.log(e);
}