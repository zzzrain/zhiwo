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
				res.html(num.toUpperCase());
			}

			verify($('#verify'));

			$('form').on('click','#change',function(){
				verify();
			}).on('click','#agree',function(){
				if(!/^1[34578]\d{9}$/.test($('#phone').val())){
					alert('手机格式有误，请重新输入');
					return false;
				}
				if(!/^.{6,16}$/.test($('#password').val())){
					alert('密码长度需6-16位字符');
					return false;
				}
				if($('#password').val() != $('#confirm').val()){
					alert('两次输入的密码不匹配');
					return false;
				}
				if($('.verify input').val() != $('#verify').html()){
					alert('验证码有误，请重新输入');
					return false;
				}
				$.post('../php/register.php', {phone:$('#phone').val(),password:$('#password').val()})
			});

			/*$('form').on('blur','#phone',function(){
				if(!/^1[34578]\d{9}$/.test($(this).val())){
					$(this).parent().siblings('.error').html('手机格式有误，请重新输入')
				}
			}).on('blur','#password',function(){
				if(!/^.{6,16}$/.test($(this).val())){
					$(this).parent().siblings('.error').html('密码长度需6-16位字符')
				}
			}).on('blur','#confirm',function(){
				if($(this).val() != $('#password').val()){
					$(this).parent().siblings('.error').html('两次输入的密码不匹配')
				}
			}).on('focus','#phone',function(){
				$(this).parent().siblings('.error').empty()
			}).on('focus','#password',function(){
				$(this).parent().siblings('.error').empty()
			}).on('focus','#confirm',function(){
				$(this).parent().siblings('.error').empty()
			}).on('click','#agree',function(){
				
			})*/
		});
	});
});