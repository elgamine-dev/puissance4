(function(){

var app = {
	
	playerOne : 1,
	playerTwo : 0,
	tr : ['.tr_1','.tr_2','.tr_3','.tr_4','.tr_5','.tr_6'],
	tdCase : " .case",
	changeColor : function(data,color,len){

			if($('.tr_6' + app.tdCase + data).css('backgroundColor') === "rgb(128, 128, 128)" ){

				$('.tr_6' + app.tdCase + data).css('backgroundColor',color);

			}
			else{
				for(var i = len; i >= 0 ;i-- ){
					var haveFont = $(app.tr[i] + app.tdCase + data).css('backgroundColor');
										
					if(haveFont === "rgb(128, 128, 128)" ){
						$(app.tr[i] + app.tdCase + data).css('backgroundColor',color);
						break;
					}
				}
			}
		},
		

	unit : function(){
		var len = app['tr'].length;

		$('button').click(function(){
			if(app.playerOne === 1 ){
				app.playerOne = 0 ;
				app.playerTwo = 1 ;
				app.changeColor($(this).data('y'),"red",len);
			}else{
				app.playerOne = 1 ;
				app.playerTwo = 0 ;
				app.changeColor($(this).data('y'),"yellow",len);
			}	
		});

	}
		

}


app.unit();
	


})();

