require(['config'],function(){
	require(['jquery','common'],function(){
		$(()=>{

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
			
			// 登录函数
			function login(){
				$.post('../php/login.php', {phone:$('#phone').val(),password:$('#password').val()},
					function(res){
						$('#h-login').html('欢迎您，知我用户'+res);
						$('#h-register').html('[退出]');
						// 保存cookie
						var now = new Date();
						now.setDate(now.getDate()+3);
						document.cookie = 'phone=' + res + ';expires=' + now + ';path=' + '';
					})
			}

			verify($('#verify'));

			// 获取cookie
			var cookie = document.cookie;
			if(cookie){
				cookie = cookie.split('=');
				$('#h-login').html('欢迎您，知我用户'+cookie[1]);
				$('#h-register').html('[退出]');
			}

			$(document).on('click','#change',function(){
				verify($('#verify'));
			}).on('click','#load',function(){// 表单登录
				if($('.verify input').val() != $('#verify').html()){
					alert('验证码有误，请重新输入');
					return false;
				}			
				login();
				//history.back();
			}).on('click','#h-register',function(){// 退出设置
				$('#h-login').html(`<a href="login.html">请登录</a></li>`);
				$('#h-register').html(`<a href="register.html">快速注册</a>`);
				// 更改日期清空cookie
				var now = new Date();
				now.setDate(now.getDate()-1);
				document.cookie = 'phone=xxx;expires=' + now;
			})
		});
	});
});