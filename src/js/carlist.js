require(['config'],function(){
	require(['jquery','common'],function(){
		$(()=>{
			// cookie操作
			getCookie();
			$(document).on('click','#h-register',function(){// 退出设置
				rmCookie();
			});

			// 商品cookie
			var arr = [];
			var cookie = document.cookie.split('; ');
			cookie.forEach(function(item){
				item = item.split('=');
				if(item[0] === 'carlist'){
					arr = JSON.parse(item[1]);
					arr.forEach(function(goods){
						$('table').append($('<tr/>').html(`
							<td class="name clearfix">
								<p class="goodsImg"><img src="${goods.src}" data-guid="${goods.guid}"></p>
								<div class="goodsInfo">${goods.name}</div>
							</td>
							<td class="price"><p>￥<span>${goods.price}</span></p></td>
							<td class="amount">
								<p>
									<span class="cut"></span>
									<input type="text" value="${goods.amount}">
									<span class="add"></span>
								</p>
							</td>
							<td class="integral"><p>${goods.price}</p></td>
							<td class="operate">
								<a id="del">删除</a>
							</td>
						`))
					});
				}
			});
			count();



			// 购买数量			
			$('table').on('click','.add',function(){
				var num = $(this).siblings('input');
				var idx = num.val()*1;
				idx++;
				num.val(idx);
				count();
			}).on('click','.cut',function(){
				var num = $(this).siblings('input');
				var idx = num.val()*1;
				idx--;
				num.val(idx);
				if(idx === 0) {idx = 1}
				$(this).siblings('input').val(idx);
				count();
			});
			

			// 删除商品
			$('main').on('click','#del',function(){
				$(this).parents('tr').remove();
				var del = $(this).parents('.operate').siblings('.name').find('img').attr('data-guid');			
				for(var i=0;i<arr.length;i++){
					if(del === arr[i].guid) {
						arr.splice(i,1);
						// 重写cookie、结构
						var now = new Date();
						now.setDate(now.getDate()+3);
						document.cookie = 'carlist=' + JSON.stringify(arr) + ';expires=' + now +';path='+'/';
						count();
						break;
					}
				}
			}).on('click','.all',function(){ // 清空操作
				console.log(1)
				$('tbody').remove();
				// 重写cookie、结构
				var now = new Date();
				now.setDate(now.getDate()-1);
				document.cookie = 'carlist=xxx;expires=' + now +';path='+'/';
				count();
			});

			
			// 数量、价格计算函数
			function count(){
				var num = 0;
				var rmb = 0;	
				var pro = $('tbody tr');
				for(var i=0;i<pro.length;i++){
					var val = pro.eq(i).find('input').val();
					num += val*1;
					rmb += val*1*pro.eq(i).find('.price span').html()*1;
				}
				$('.clear .right').html(`
					<p class="num">共<i>${num}</i>件商品</p>
						<p class="rmb">
							<span>应付金额（不含运费）：</span>
							<i>￥</i><em>${rmb}</em>
						</p>
					<p class="btn"><a href="">去结算</a></p>`)
			}
		});
	});
});
