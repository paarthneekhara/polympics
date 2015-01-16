var 

s_bird,
s_kejri,
s_modi,
s_rahul,
s_bg,
s_fg,
s_pipeNorth,
s_pipeSouth,
s_text,
s_score,
s_splash,
s_buttons,
s_numberS,
s_numberB;


function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;
};

Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

Sprite.prototype.drawResize = function(ctx, x, y, resize_factor) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width/resize_factor, this.height/resize_factor);
};

function initPlayers(img){

	s_modi = [
		new Sprite(img, 0, 0, 25, 25),
		new Sprite(img, 0, 25, 25, 25),
		new Sprite(img, 0, 50, 25, 25),
	];
	s_rahul = [
		new Sprite(img, 100, 0, 25, 25),
		new Sprite(img, 100, 25, 25, 25),
		new Sprite(img, 100, 50, 25, 25),
	];
	s_kejri = [
		new Sprite(img, 50, 0, 30, 25),
		new Sprite(img, 50, 25, 30, 25),
		new Sprite(img, 50, 50, 30, 25),
	];
	s_all_players = [
		new Sprite(img, 0, 0, 125, 25),
		new Sprite(img, 0, 25, 125, 25),
		new Sprite(img, 0, 50, 125, 25),
	];
}

function initLogos(img){

	s_bjp_logo = new Sprite(img, 0, 0, 25, 25);
	s_aap_logo = new Sprite(img, 25, 0, 25, 25);
	s_con_logo = new Sprite(img, 50, 0, 25, 25);
}


function initOpponents(img){
	s_kejri_opp = [];
	s_rahul_opp = [];
	s_modi_opp = [];

	for(var i = 0; i < 10; i++){
		var bjp_leaders = [
			new Sprite(img, (i*25), 0, 25, 25),
			new Sprite(img, (i*25), 25, 25, 25),
			s_bjp_logo,
		];
		s_kejri_opp.push(bjp_leaders);
		s_rahul_opp.push(bjp_leaders);
		if(i < 5){
			var aap_leaders = [
			new Sprite(img, (i*25), 50, 25, 25),
			new Sprite(img, (i*25), 75, 25, 25),
			s_aap_logo,
		];
		s_rahul_opp.push(aap_leaders);
		s_modi_opp.push(aap_leaders);
		}
		else{
			var cong_leaders = [
			new Sprite(img, (i*25), 50, 25, 25),
			new Sprite(img, (i*25), 75, 25, 25),
			s_con_logo,
		];
		s_kejri_opp.push(cong_leaders);
		s_modi_opp.push(cong_leaders);
		}
	}
}

function initMudde(img){
	s_mudde = [];
	for(var i = 0; i < 11; i++){
		s_mudde.push(new Sprite(img, (i*50), 0, 35, 25));
	}
}

function initForeground(img){
	s_fg = new Sprite(img, 0, 0, 111,  55);
}

function initBackground(img){
	s_bg = new Sprite(img, 0, 0, 200,  200);
	s_bg.color = "#70C5CF";

}

function initPipes(img){
	s_pipeNorth = new Sprite(img, 0, 0, 24, 200);
	s_pipeSouth = new Sprite(img, 26, 0, 26, 200);
}
function initText(img){
	s_text = {
		GameOver:   new Sprite(img, 1, 1, 94, 19),
		GetReady:   new Sprite(img, 1, 1, 87, 22)
	};
}
function initButtons(img){
	s_buttons = {
		Ok:    new Sprite(img, 0, 0, 40, 14),
		modi: s_bjp_logo,
		rahul: s_con_logo,
		kejri: s_aap_logo
	};
	
}
function initScore(img){
	s_score  = new Sprite(img, 0,  0, 113, 58);
}
function initNumbers(img){
	s_numberS = new Sprite(img, 0, 0, 6,  7);
	s_numberB = new Sprite(img, 0, 11, 7, 10);

	s_numberS.draw = s_numberB.draw = function(ctx, x, y, num, center, offset) {

		num = num.toString();

		var step = this.width + 2;

		if(center){
			x = center - num.length * (step-2)/2;
		}
		if(offset){
			x += step*(offset - num.length);
		}
		for (var i = 0, len = num.length; i < len; i++) {
			var n = parseInt(num[i]);
			ctx.drawImage(img, step*n, this.y, this.width, this.height,
				x, y, this.width, this.height)
			x += step;
		}
	}
}

