require(['config'],function(){
	require(['jquery','common'],function(){
		$(()=>{
			// 验证码
			verify($('#verify'));
			
			getCookie();

			$(document).on('click','#change',function(){
				verify($('#verify'));
			}).on('click','#load',function(){// 表单登录
				/*if($('.verify input').val() != $('#verify').html()){
					alert('验证码有误，请重新输入');
					return false;
				}*/			
				setCookie('../php/login.php');
			}).on('click','#h-register',function(){// 退出设置
				rmCookie();
			})
		});
	});
});