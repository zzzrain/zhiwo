// 	下拉效果、滑动效果
$(()=>{
	var wechat = $('#wechat');
	var personal = $('#personal');
	var server = $('#server');

	var market = $('#market');
	var slider = $('#slider li');

	$('header').on('mouseenter','#wechat',function(){
		wechat.children('div').animate({height: 100});	
	}).on('mouseenter','#personal',function(){
		personal.children('div').animate({height: 150});
	}).on('mouseenter','#server',function(){
		server.children('div').animate({height: 120});
	}).on('mouseenter','#market',function(){
		market.next('.list').animate({height: 304});
	}).on('mouseleave','#wechat',function(){
		wechat.children('div').animate({height: 0});	
	}).on('mouseleave','#personal',function(){
		personal.children('div').animate({height: 0});
	}).on('mouseleave','#server',function(){
		server.children('div').animate({height: 0});
	}).on('mouseleave','#market',function(){
		market.next('.list').animate({height: 0});
	}).on('mouseenter','#slider li',function(){
		$(this).animate({width: 74}).siblings().animate({width: 0})
	}).on('mouseleave','#slider li',function(){
		$(this).animate({width: 0})
	})	

	/*$('header').mouseover(function(e){
		switch (e.target.id.toLowerCase()){
			case 'wechat' : 
			wechat.children('div').animate({height: 100});
			break;
			case 'personal' : 
			personal.children('div').animate({height: 150});
			break;
			case 'server' : 
			server.children('div').animate({height: 120});
			break;
			case 'market' : 
			market.children('.list').animate({height: 304});
			break;
		}
	});	*/
	
	/*$('header').mouseout(function(e){
		switch (e.target.id.toLowerCase()){
			case 'wechat' : 
			wechat.children('div').animate({height: 0});
			break;
			case 'personal' : 
			personal.children('div').animate({height: 0});
			break;
			case 'server' : 
			server.children('div').animate({height: 0});
			break;
			case 'market' : 
			market.children('.list').animate({height: 0});
			break;
		}
	});*/
});

// 验证码函数
function verify(res){
	// 随机生成一个4位验证码（包含字母）
	var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var num = '';
	for(var i=0;i<4;i++){
		var index = parseInt(Math.random()*str.length); //不可能大于36
		num += str[index]
	}
	res.html(num);
}

// 保存cookie
function setCookie(src){
	$.post(src, {phone:$('#phone').val(),password:$('#password').val()},
		function(res){
			if(res === 'defeat'){
				alert('用户已被注册')
			}else{
				$('#h-login').html('欢迎您，知我用户'+res);
				$('#h-register').html('[退出]');
				// 保存cookie
				var now = new Date();
				now.setDate(now.getDate()+3);
				document.cookie = 'phone=' + res + ';expires=' + now + ';path=' + '/';
				history.back();
			}
		})
}

// 获取cookie
function getCookie(){
	var cookie = document.cookie;
	if(cookie){
		cookie = cookie.split('=');
		$('#h-login').html('欢迎您，知我用户'+cookie[1]);
		$('#h-register').html('[退出]');
	}
}

// 删除cookie&&清空内容
function rmCookie(){
	$('#h-login').html(`<a href="login.html">请登录</a></li>`);
	$('#h-register').html(`<a href="register.html">快速注册</a>`);
	// 更改日期清空cookie
	var now = new Date();
	now.setDate(now.getDate()-1);
	document.cookie = 'phone=xxx;expires=' + now + ';path=' + '/';
}
