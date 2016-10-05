(function(){

var app = {
	
	playerOne : 1,
	playerTwo : 0,
	tr : ['.tr_1','.tr_2','.tr_3','.tr_4','.tr_5','.tr_6'],
	changeColor : function(data,color,len){

			if($('.tr_6' + " .case" + data).css('backgroundColor') === "rgb(128, 128, 128)" ){

				$('.tr_6' + " .case" + data).css('backgroundColor',color);

			}
			else{
				for(var i = len; i >= 0 ;i-- ){
					var haveFont = $(app.tr[i] + " .case" + data).css('backgroundColor');
										
					if(haveFont === "rgb(128, 128, 128)" ){
						$(app.tr[i] + " .case" + data).css('backgroundColor',color);
						break;
					}
				}
			}
		},
		
	callPlayer : function(player){
			
		var call = $('.call').html("joueur " + player + " à toi de jouer");
		return call;

	},

	rollPlayer : function(){
		if(app.playerOne === 1){
			app.playerOne-- ;
			app.playerTwo++ ;
			app.callPlayer(2);
		}else{
			app.playerOne++ ;
			app.playerTwo-- ;
			app.callPlayer(1);
		}
	},

	unit : function(){
	
		var len = app['tr'].length;
		app.callPlayer(1);
		$('button').click(function(){
			if(app.playerOne === 1 ){
				app.rollPlayer();
				app.changeColor($(this).data('y'),"red",len);
			}else{
				app.rollPlayer();
				app.changeColor($(this).data('y'),"yellow",len);
			}	
		});

	}
		

}


app.unit();
	


})();

