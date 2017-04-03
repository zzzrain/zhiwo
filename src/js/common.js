require(['config'],function(){
	require(['jquery'],function(){
		// 下拉效果、滑动效果
		$(()=>{
			var wechat = $('#wechat');
			var personal = $('#personal');
			var server = $('#server');

			var market = $('#market');
			var slider = $('#slider li');

			$(document).on('mouseenter','#wechat',function(){
				wechat.children('div').animate({height: 100});	
			}).on('mouseenter','#personal',function(){
				personal.children('div').animate({height: 150});
			}).on('mouseenter','#server',function(){
				server.children('div').animate({height: 120});
			}).on('mouseenter','#market',function(){
				market.children('.list').animate({height: 304});
			}).on('mouseleave','#wechat',function(){
				wechat.children('div').animate({height: 0});	
			}).on('mouseleave','#personal',function(){
				personal.children('div').animate({height: 0});
			}).on('mouseleave','#server',function(){
				server.children('div').animate({height: 0});
			}).on('mouseleave','#market',function(){
				market.children('.list').animate({height: 0});
			}).on('mouseenter','#slider li',function(){
				$(this).animate({width: 74}).siblings().animate({width: 0})
			}).on('mouseleave','#slider li',function(){
				$(this).animate({width: 0})
			})
		});
	});
});
