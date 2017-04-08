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
						$('tbody').append($('<tr/>').html(`
							<td class="name clearfix">
								<p class="goodsImg"><img src="${goods.src}"></p>
								<div class="goodsInfo">${goods.name}</div>
							</td>
							<td class="price"><p>￥<span>${goods.price}</span></p></td>
							<td class="amount">
								<p>
									<span class="jian"></span>
									<input type="text" id="count" value="${goods.amount}">
									<span class="jia"></span>
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
			var idx = 1;
			$('tbody').on('click','.jia',function(){
				idx++;
				alone($(this),idx);
			}).on('click','.jian',function(){
				idx--;
				if(idx === 0) {idx = 1}
				alone($(this),idx);
			});
			count();

			// 单件计算函数
			function alone(val,idx){
				val.siblings('#count').val(idx);
				var rmb = val.parents('.amount').siblings('.price').find('span');
				rmb.html(idx*rmb.html());
			}
			
			// 数量、价格计算函数
			function count(){
				var num = 0;
				var rmb = 0;	
				var pro = $('tbody tr');
				for(var i=0;i<pro.length;i++){
					var val = pro.eq(i).find('#count').val();
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