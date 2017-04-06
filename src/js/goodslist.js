require(['config'],function(){
	require(['jquery','common'],function(){
		$(()=>{	
			$.post('../php/goodslist.php',{page:1},callback);

			// 懒加载效果
			var idx = 1;	
			var page = idx;	
			$(window).scroll(e=>{
				// 临界高度
				var high = $('main').outerHeight()-$('footer').outerHeight();
				//console.log($(this).scrollTop(),$('main').outerHeight())

				if($(this).scrollTop() > high){
					page++;
					console.log(page)
					$.post('../php/goodslist.php',{page:page},callback);
					// 重置
					idx = page;
				}
			});

			// 返回函数
			function callback(res){
				//console.log(JSON.parse(res))
				var goods = JSON.parse(res).map(goods=>{
					// 计算价格
					var price = parseInt(goods.original*goods.discount/10);
					return `<li>
					    <div class="goodsImg">
					        <a href="http://localhost/project/html/goods?guid=${goods.guid}"><img src="${goods.imgS}"></a>
					        <div class="effect">
					        	<a href="">补水</a>
					            <a href="">补湿</a>
					            <a href="">控油</a>
					        </div>
					        <div class="mask"></div>
					        <div class="over"><p>已抢光</p></div>
					    </div>
					    <div class="goodsInfo">
					        <div class="name">
					        	<a href="">
					        		<span>${goods.discount}折</span>${goods.name}
					        	</a>
					        </div>
					        <div class="price clearfix">
					        	<p class="num"><i>￥</i><span>${price}</span><del>￥${goods.original}</del></p>
					        	<p class="buy"><a href="">加入购物车</a></p>
					        </div>
					        <div class="sale clearfix">
					       		<p class="time"><i>距团购结束</i><span><span>1</span>天<span>03</span>小时<span>50</span>分<span>34</span>秒</span></p>
					        	<p class="count"><span>${goods.buyer}</span>人已购买</p>
					        </div>
					    </div>
					</li>`
				}).join('');
				$('#goodslist ul').html(goods);
			}
		})
	});
});
