(function(){

	var app = {	
		turn:0,
		tr : ['.tr_1','.tr_2','.tr_3','.tr_4','.tr_5','.tr_6'],
		init : function(){

			var len = this['tr'].length;
			this.callPlayer(1);
			var color;
			$('button').click(function(){
				var color = (!app.turn) ? "red" : "yellow";
				app.changeColor($(this).data('y'), color, len);
			});

		},
		changeColor : function(data,color,len){
			this.rollPlayer();
			//mettre en cache les selecteurs
			var line = $(".tr_6 .case" + data);
			if(line.css('backgroundColor') === "rgb(128, 128, 128)" ){
				line.css('backgroundColor',color);
				return;
			} 

			for(var i = len; i >= 0 ;i-- ){
				var haveFont = $(this.tr[i] + " .case" + data).css('backgroundColor');				
				if(haveFont === "rgb(128, 128, 128)" ){
					$(this.tr[i] + " .case" + data).css('backgroundColor',color);
					return;
				}
			}

		},

		callPlayer : function(player){
			player = (player) ? 1 : 2;
			var call = $('.call').html("joueur " + player + " à toi de jouer");
			return call;
		},

		rollPlayer : function(){
			this.turn = !this.turn;
			this.callPlayer(this.turn);
		},
	};

	app.init();	
})();

