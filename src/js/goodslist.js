require(['config'],function(){
	require(['jquery','common'],function(){
		$(()=>{	
			$.post('../php/goodlist.php',{page:1},function(res){
				//console.log(JSON.parse(res))
				var goods = JSON.parse(res).map(goods=>{
					// 计算价格
					var price = parseInt(goods.original*goods.discount/10);
					return `<li>
					    <div class="goodsImg">
					        <a href="http://localhost/project/html/goods"><img src="${goods.imgsrc}"></a>
					        <div class="effect">
					        	<a href="">舒缓</a>
					            <a href="">去角质</a>
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
			});

			// 懒加载效果
			var idx = 1;			
			$(window).scroll(e=>{
				// 临界高度
				var high = $('main').outerHeight()-$('footer').outerHeight();
				console.log($(this).scrollTop(),$('main').outerHeight())

				if($(this).scrollTop() >= high){
					idx++;
					var page = idx;
					$.post('../php/goodlist.php',{page:page},function(res){
						//console.log(JSON.parse(res))
						var goods = JSON.parse(res).map(goods=>{
							// 计算价格
							var price = parseInt(goods.original*goods.discount/10);
							return `<li>
							    <div class="goodsImg">
							        <a href="http://localhost/project/html/goods"><img src="${goods.imgsrc}"></a>
							        <div class="effect">
							        	<a href="">舒缓</a>
							            <a href="">去角质</a>
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
						// 重置idx
						idx = page;
					});
				}
			});
		})
	});
});


// <li>
//     <div class="goodsImg">
//         <a class="show" href="" target="_blank">
//         	<img src="../img/goods01.jpg">
//         </a>
//         <div class="effect">
//         	<a href="" target="_blank">舒缓</a>
//             <a href="" target="_blank">去角质</a>
//         </div>
//         <div class="mask"></div>
//         <div class="over">
//             <p>已抢光</p>
//         </div>
//     </div>
//     <div class="goodsInfo">
//         <div class="name">
//         	<a href="">
//         		<span>2.8折</span>雅诗兰黛红石榴鲜养焕亮精华露4ml*2，时刻保持鲜活红润好气色。
//         	</a>
//         </div>
//         <div class="price clearfix">
//         	<p class="num"><i>￥</i><span>49</span><del>￥174.00</del></p>
//         	<p class="buy"><a href="">加入购物车</a></p>
//         </div>
//         <div class="sale clearfix">
//        		<p class="time"><i>距团购结束</i><span><span>1</span>天<span>03</span>小时<span>50</span>分<span>34</span>秒</span></p>
//         	<p class="count"><span>603</span>人已购买</p>
//         </div>
//     </div>
// </li>