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


function initSprites(img) {

	s_modi = [
		new Sprite(img, 325, 0, 25, 25),
		new Sprite(img, 325, 25, 25, 25),
		new Sprite(img, 325, 50, 25, 25),
	];
	s_rahul = [
		new Sprite(img, 425, 0, 25, 25),
		new Sprite(img, 425, 25, 25, 25),
		new Sprite(img, 425, 50, 25, 25),
	];
	s_kejri = [
		new Sprite(img, 375, 0, 30, 25),
		new Sprite(img, 375, 25, 30, 25),
		new Sprite(img, 375, 50, 30, 25),
	];
	s_all_players = [
		new Sprite(img, 325, 0, 125, 25),
		new Sprite(img, 325, 25, 125, 25),
		new Sprite(img, 325, 50, 125, 25),
	];

	

	s_kejri_opp = [];
	s_rahul_opp = [];
	s_modi_opp = [];

	for(var i = 0; i < 10; i++){
		var bjp_leaders = [
			new Sprite(img, (i*25), 225, 25, 25),
			new Sprite(img, (i*25), 250, 25, 25),
			new Sprite(img, 0, 200, 25, 25),
		];
		s_kejri_opp.push(bjp_leaders);
		s_rahul_opp.push(bjp_leaders);
		if(i < 5){
			var aap_leaders = [
			new Sprite(img, (i*25), 275, 25, 25),
			new Sprite(img, (i*25), 300, 25, 25),
			new Sprite(img, 25, 200, 25, 25),
		];
		s_rahul_opp.push(aap_leaders);
		s_modi_opp.push(aap_leaders);
		}
		else{
			var cong_leaders = [
			new Sprite(img, (i*25), 275, 25, 25),
			new Sprite(img, (i*25), 300, 25, 25),
			new Sprite(img, 50, 200, 25, 25),
		];
		s_kejri_opp.push(cong_leaders);
		s_modi_opp.push(cong_leaders);
		}
	}
	s_mudde = [];
	for(var i = 0; i < 11; i++){
		s_mudde.push(new Sprite(img, (i*50), 325, 35, 25));
	}
	
	s_bjp_logo = new Sprite(img, 0, 200, 25, 25);
	s_aap_logo = new Sprite(img, 25, 200, 25, 25);
	s_con_logo = new Sprite(img, 50, 200, 25, 25);

	s_car = new Sprite(img, 300, 300, 50, 25);
	s_bg = new Sprite(img, 325, 75, 200,  200);
	s_bg_car = new Sprite(img, 575, 75, 225,  225);
	s_bg.color = "#70C5CF";
	s_fg = new Sprite(img, 0, 0, 250,  55);
	
	s_pipeNorth = new Sprite(img, 251, 0, 24, 200);
	s_pipeSouth = new Sprite(img, 277, 0, 26, 200);
	
	s_text = {
		GameOver:   new Sprite(img, 59, 136, 94, 19),
		GetReady:   new Sprite(img, 59, 155, 87, 22)
	}
	s_buttons = {
		
		Ok:    new Sprite(img, 119, 191, 40, 14),
		
		modi: new Sprite(img, 0, 200, 25, 25),
		rahul: new Sprite(img, 50, 200, 25, 25),
		kejri: new Sprite(img, 25, 200, 25, 25),
	}

	s_score  = new Sprite(img, 138,  56, 113, 58);
	

	s_numberS = new Sprite(img, 0, 177, 6,  7);
	s_numberB = new Sprite(img, 0, 188, 7, 10);

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

