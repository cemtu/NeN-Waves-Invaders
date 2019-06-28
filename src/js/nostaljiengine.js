// Çekirdek tanımlamaları
var nostaljiengine={


	// Sabit Değerler
	pxW : 10,		// Nostalji pixel büyüklüğü
	pxM : 1,		// Pixel aralıkları (margin)
	px0 : 'white',	// Aktif pixel rengi
	px1 : 'black',	// Pasif pixel rengi
	pxKX : 0,		// Pixel Yatay Kalibre Saptırması (Sarsılma efekti için)
	pxKY : 0,		// Pixel Dikey Kalibre Saptırması 
	maxW : 0,		// Sahnennin Genişlik Değeri 
	maxH : 0,		// Sahnenin Yükseklik Değeri
	hiz : 30,		// FPS yenileme geciktirme süresi (milisecond)

	// Oyun İçi Ayarlar
	oyun_ismi : "Oyunun Adı Yok",
	sag_yon_tusu : 39,
	sol_yon_tusu : 37,
	yukari_yon_tusu : 38,
	asagi_yon_tusu : 40,
	start_tusu : 13,
	select_tusu : 16 ,
	A_tusu : 65,
	B_tusu : 83,

	ses : {},

	// Sahneyi yakala ve tanımla
	sahneyi_tanimla : function(){ console.log('sahneyi_tanimla');
		this.sahne = document.getElementById('nostaljiEngineCanvas');
		this.kalem = this.sahne.getContext("2d"); //this.sahne.getContext("webgl") || this.sahne.getContext("experimental-webgl");
	},


	kontrolleri_tanimla : function(){ console.log('kontrolleri_tanimla');
		//document.body.onkeypress = function(e){
		document.body.onkeydown = function(e){
			//e.preventDefault();
			e = e || window.event;

			switch(e.keyCode){
				case nostaljiengine.start_tusu : // start tuşu
					nostaljiengine.start_tusuna_basildiginda();
					break;
				case nostaljiengine.select_tusu : // select tuşu
					nostaljiengine.select_tusuna_basildiginda();
					break;
				case nostaljiengine.sol_yon_tusu : // sol ok tuşu
					nostaljiengine.sol_yon_tusuna_basildiginda();
					break;
				case nostaljiengine.yukari_yon_tusu : // yukarı ok tuşu
					nostaljiengine.yukari_yon_tusuna_basildiginda();
					break;
				case nostaljiengine.sag_yon_tusu : // sağ ok tuşu
					nostaljiengine.sag_yon_tusuna_basildiginda();
					break;
				case nostaljiengine.asagi_yon_tusu : // aşağı ok tuşu
					nostaljiengine.asagi_yon_tusuna_basildiginda();
					break;
				case nostaljiengine.A_tusu : // A tuşu
					nostaljiengine.A_tusuna_basildiginda();
					break;
				case nostaljiengine.B_tusu : // B tuşu
					nostaljiengine.B_tusuna_basildiginda();
					break;
				default: // diğer herhangi bir tuşa basıldığında
					nostaljiengine.diger_tusuna_basildiginda(e.keyCode);

			}
		};
	},
 	

 	// Sahneyi tüm ekrana kapla
	ekrani_kapla : function(){ console.log('ekrani_kapla');
		this.sahne.width = window.innerWidth;
		this.sahne.height = window.innerHeight;
		this.maxW=Math.ceil(this.sahne.width/this.pxW);
		this.maxH=Math.ceil(this.sahne.height/this.pxW);
	},



	// Pixel fonksiyonunu tanımla
	px : function(x,y,z){
		if(z==1) this.kalem.fillStyle = this.px1;
		else if(!z) this.kalem.fillStyle = this.px0;
		else this.kalem.fillStyle = z;
		x+=this.pxKX;
		y+=this.pxKY;
		this.kalem.fillRect(((x-1)*10)+this.pxM,((y-1)*10)+this.pxM,this.pxW-(this.pxM*2),this.pxW-(this.pxM*2));
	},


	// Matris dizisi ile oluşturulmuş bir görseli sahneye çiz
	gorsel_ciz : function(x,y,g,z){
		if(!z)z=1;
		if(!this.t)this.t=1;else this.t++;
		var a=Math.floor(this.t/g.sure);
		if(a>=g.gorsel.length){
			a=0;
			this.t=0;
		}
		for(i=0; i<g.gorsel[a].length; i++)
			for(j=0; j<g.gorsel[a][i].length; j++)
				if(g.gorsel[a][i][j])
					this.px(j+x,i+y,(g.gorsel[a][i][j]==1&&z!=1?z:g.gorsel[a][i][j]));
	},


	ses_yukle : function(a){
		this.ses[a]=new Audio('audio/'+a+'.mp3');
	},


	// Sahneyi temizle
	temizle : function(x,y,w,h,z){
		if(this.pxM){
			if(!x)x=1;
			if(!y)y=1;
			if(!w)w=Math.ceil(this.sahne.width/this.pxW);
			if(!h)h=Math.ceil(this.sahne.height/this.pxW);
			if(!z)z=0;
			for(i=x;i<x+w;i++)
				for(j=y;j<y+h;j++)
					this.px(i,j,z);
		}
		else {
			this.kalem.fillStyle = this.px0;
			this.kalem.fillRect(0,0,this.sahne.width,this.sahne.height);
		}
	},


	// Sahneyi sürekli yenile
	yenile : function(){
		nostaljiengine.temizle();

		nostaljiengine.update();

		//window.requestAnimationFrame(nostaljiengine.yenile);
		setTimeout(nostaljiengine.yenile,nostaljiengine.hiz);
	},


	// Sahne yenilemesini başlat
	baslat : function(){ console.log('baslat');
		document.title = this.oyun_ismi;

		this.start();
		this.yenile();
	},



	// Kontrol süresi başlat
	sureyi_baslat : function(){
		this.date = new Date();
		this.miliseconds = this.date.getMilliseconds();
	},
	// Kontrol süresini bitir
	sureyi_bitir : function(){
		this.date = new Date();
		console.log('Yükleme bitti; ' + (parseFloat(this.date.getMilliseconds()) - parseFloat(this.miliseconds)) + ' milisaniye sürdü.');
	},



	// Hazırlıklar tamam ise oyunu yükle
	yukle : function(){ console.log('yukle');
		nostaljiengine.sureyi_baslat();

		nostaljiengine.sahneyi_tanimla();
		nostaljiengine.ekrani_kapla();
		nostaljiengine.kontrolleri_tanimla();
		nostaljiengine.baslat();

		nostaljiengine.sureyi_bitir();

		// Event tanımlamaları
		window.onresize = function(){
			nostaljiengine.ekrani_kapla();
		}
	}





};




// Yardımcı fonksiyonlar
function rand(a,b,c){if(!c){c=1000;}var r="000";do r=Math.floor((Math.random()*c)+1);while(r<a||r>b);return r;}
function randRgb(){return 'rgb('+rand(1,255)+','+rand(1,255)+','+rand(1,255)+')';}
function kutu(x,y,w,h,r){
	if(nostaljiengine.pxM){
		if(!r)r=1;
		for(i=x;i<x+w;i++)
			for(j=y;j<y+h;j++)
				nostaljiengine.px(i,j,r);
	}
	else {
		nostaljiengine.kalem.fillStyle = r?r:nostaljiengine.px1;
		nostaljiengine.kalem.fillRect( ((x-1)*nostaljiengine.pxW), ((y-1)*nostaljiengine.pxW), (w-1)*nostaljiengine.pxW, (h-1)*nostaljiengine.pxW );
	}
}
function harf(x,y,z,n) {
	if ( !n ) {
		n = 1;
	}
	var w = 8, h = 8;
	switch ( z ) {
		
		case 0:
		case '0':
			w = 6;
			h = 6;
			var harf = Array(
				0,0,1,1,0,0,
				0,1,1,1,1,0,
				1,1,0,0,1,1,
				1,1,0,0,1,1,
				0,1,1,1,1,0,
				0,0,1,1,0,0
			);
		break;
		
		case 1:
		case '1':
			w = 6;
			h = 6;
			var harf = Array(
				0,0,0,1,1,0,
				0,0,1,1,1,0,
				0,0,0,1,1,0,
				0,0,0,1,1,0,
				0,0,0,1,1,0,
				0,0,0,1,1,0
			);
		break;
		
		case 2:
		case '2':
			w = 6;
			h = 6;
			var harf = Array(
				0,1,1,1,1,0,
				1,1,1,1,1,1,
				0,0,0,1,1,1,
				0,0,1,1,1,0,
				0,1,1,1,1,1,
				1,1,1,1,1,1
			);
		break;
		
		case 3:
		case '3':
			w = 6;
			h = 6;
			var harf = Array(
				0,1,1,1,1,0,
				0,0,0,0,1,1,
				0,0,1,1,1,1,
				0,0,0,0,1,1,
				0,0,0,0,1,1,
				0,1,1,1,1,0
			);
		break;
		
		case 4:
		case '4':
			w = 6;
			h = 6;
			var harf = Array(
				0,0,0,1,1,0,
				0,0,1,1,0,0,
				0,1,1,0,0,0,
				1,1,0,0,1,0,
				1,1,1,1,1,1,
				0,0,0,0,1,0
			);
		break;
		
		case 5:
		case '5':
			w = 6;
			h = 6;
			var harf = Array(
				1,1,1,1,1,1,
				1,1,0,0,0,0,
				0,1,1,1,1,0,
				0,0,0,0,1,1,
				1,0,0,0,1,1,
				0,1,1,1,1,0
			);
		break;
		
		case 6:
		case '6':
			w = 6;
			h = 6;
			var harf = Array(
				0,0,0,1,1,0,
				0,0,1,1,0,0,
				0,1,1,1,1,0,
				1,1,0,0,1,1,
				1,1,0,0,1,1,
				0,1,1,1,1,0
			);
		break;
		
		case 7:
		case '7':
			w = 6;
			h = 6;
			var harf = Array(
				1,1,1,1,1,1,
				1,1,1,1,1,1,
				0,0,0,1,1,0,
				0,0,1,1,0,0,
				0,1,1,0,0,0,
				1,1,0,0,0,0
			);
		break;
		
		case 8:
		case '8':
			w = 6;
			h = 6;
			var harf = Array(
				0,1,1,1,1,0,
				1,1,0,0,1,1,
				0,1,1,1,1,0,
				1,1,0,0,1,1,
				1,1,0,0,1,1,
				0,1,1,1,1,0
			);
		break;
		
		case 9:
		case '9':
			w = 6;
			h = 6;
			var harf = Array(
				0,1,1,1,1,0,
				1,1,0,0,1,1,
				1,1,0,0,1,1,
				0,1,1,1,1,0,
				0,0,1,1,0,0,
				0,1,1,0,0,0
			);
		break;
		
		case 'A':
			var harf = Array(
				0,0,0,1,1,0,0,0,
				0,0,1,1,1,1,0,0,
				0,1,1,1,1,1,1,0,
				1,1,1,0,0,1,1,1,
				1,1,0,0,0,0,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,0,0,0,1,1
			);
		break;

		case 'a':
			w = 4;
			h = 4;
			var harf = Array(
				1,1,1,1,
				1,0,0,1,
				1,1,1,1,
				1,0,0,1
			);
		break;
		
		case 'B':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'C':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1
			);
		break;
		
		case 'Ç':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				0,0,0,1,1,0,0,0
			);
		break;
		
		case 'D':
			var harf = Array(
				1,1,1,1,1,1,0,0,
				1,1,1,1,1,1,1,0,
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,1,1,1,1,1,0,
				1,1,1,1,1,1,0,0
			);
		break;
		
		case 'E':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,0,0,0,0,0,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,0,0,0,0,0,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1
			);
		break;
		
		case 'F':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'G':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,0,0,0,0,0,
				1,1,0,1,1,1,1,1,
				1,1,0,1,1,1,1,1,
				1,1,0,0,0,0,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1
			);
		break;
		
		case 'Ğ':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'H':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'I':
			var harf = Array(
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0
			);
		break;
		
		case 'İ':
			var harf = Array(
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0
			);
		break;
		
		case 'J':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'K':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'L':
			var harf = Array(
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,0,0,0,0,0,0,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1
			);
		break;
		
		case 'M':
			var harf = Array(
				1,1,0,0,0,0,1,1,
				1,1,1,0,0,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,1,1,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1
			);
		break;
		
		case 'N':
			var harf = Array(
				1,1,0,0,0,0,1,1,
				1,1,1,0,0,0,1,1,
				1,1,1,1,0,0,1,1,
				1,1,1,1,1,0,1,1,
				1,1,0,1,1,1,1,1,
				1,1,0,0,1,1,1,1,
				1,1,0,0,0,1,1,1,
				1,1,0,0,0,0,1,1
			);
		break;

		case 'n':
			w = 4;
			h = 4;
			var harf = Array(
				1,0,0,1,
				1,1,0,1,
				1,0,1,1,
				1,0,0,1
			);
		break;	
		
		case 'O':
			var harf = Array(
				0,0,1,1,1,1,0,0,
				0,1,1,1,1,1,1,0,
				1,1,1,0,0,1,1,1,
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,1,0,0,1,1,1,
				0,1,1,1,1,1,1,0,
				0,0,1,1,1,1,0,0
			);
		break;
		
		case 'Ö':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'P':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,0,0,0,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,0,0,0,0,0,
				1,1,1,0,0,0,0,0,
				1,1,1,0,0,0,0,0
			);
		break;

		case 'p':
			w = 4;
			h = 4;
			var harf = Array(
				1,1,1,1,
				1,0,0,1,
				1,1,1,1,
				1,0,0,0
			);
		break;

		case 'R':
			var harf = Array(
				1,1,1,1,1,1,0,0,
				1,1,1,1,1,1,1,0,
				1,1,0,0,0,1,1,1,
				1,1,0,0,0,1,1,1,
				1,1,1,1,1,1,1,0,
				1,1,0,1,1,1,0,0,
				1,1,0,0,1,1,1,0,
				1,1,0,0,0,1,1,1
			);
		break;
		
		case 'S':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,0,0,0,0,0,0,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				0,0,0,0,0,0,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1
			);
		break;
		
		case 'Ş':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'T':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0
			);
		break;
		
		case 'U':
			var harf = Array(
				1,1,1,0,0,1,1,1,
				1,1,1,0,0,1,1,1,
				1,1,1,0,0,1,1,1,
				1,1,1,0,0,1,1,1,
				1,1,1,0,0,1,1,1,
				1,1,1,0,0,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1
			);
		break;

		case 'u':
			w = 4;
			h = 4;
			var harf = Array(
				1,0,0,1,
				1,0,0,1,
				1,0,0,1,
				1,1,1,1
			);
		break;
		
		case 'Ü':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'V':
			var harf = Array(
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,1,0,0,1,1,1,
				0,1,1,0,0,1,1,0,
				0,1,1,1,1,1,1,0,
				0,0,1,1,1,1,0,0,
				0,0,1,1,1,1,0,0,
				0,0,0,1,1,0,0,0
			);
		break;
		
		case 'Y':
			var harf = Array(
				1,0,0,0,0,0,0,1,
				1,1,0,0,0,0,1,1,
				1,1,1,0,0,1,1,1,
				0,1,1,1,1,1,1,0,
				0,0,1,1,1,1,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0,
				0,0,0,1,1,0,0,0
			);
		break;
		
		case 'Z':
			var harf = Array(
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				0,0,0,0,1,1,1,0,
				0,0,0,1,1,1,0,0,
				0,0,1,1,1,0,0,0,
				0,1,1,1,0,0,0,0,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1
			);
		break;
		
		case 'W':
			var harf = Array(
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,0,0,0,0,1,1,
				1,1,0,1,1,0,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,1,1,1,1,1,
				1,1,1,0,0,1,1,1,
				1,1,0,0,0,0,1,1
			);
		break;
		
		case 'X':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case 'Q':
			var harf = Array(
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0
			);
		break;
		
		case '!':
			w = 12;
			h = 12;
			var harf = Array(
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0,
				0,0,0,1,1,1,1,1,1,0,0,0
			);
		break;
		
	}
	var xi = 0;
	for ( i = 1; i <= w; i++ ) {
		for ( j = 1; j <= h; j++ ) {
			if ( harf[xi] ) {
				nostaljiengine.px(x+j-1,y+i-1,n);
			}
			xi++;
		}
	}	
}
function puan(x,y,p,r){
	if(p){
	if(!r)r=1;
		var strSkor = String(p);
		_Skor = strSkor.split('');			
		harf(x,y+2,_Skor[0],r);
		harf(x,y+9,_Skor[1],r);
		if ( _Skor[2] ) {
			harf(x,y+16,_Skor[2],r);
		}
		if ( _Skor[3] ) {
			harf(x,y+23,_Skor[3],r);
		}
		if ( _Skor[4] ) {
			harf(x,y+30,_Skor[4],r);
		}
		if ( _Skor[5] ) {
			harf(x,y+37,_Skor[5],r);
		}
		if ( _Skor[6] ) {
			harf(x,y+44,_Skor[6],r);
		}
	}
}
