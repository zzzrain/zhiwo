require(['config'],function(){
	require(['jquery','common','zoom'],function(){
		$(()=>{
			// 获取地址栏数据
			var str = window.location.href;
			var guid = str.substr(str.indexOf('?')+6)
			//console.log(guid)

			// 请求数据生成结构
			$.post('../php/goods.php',{guid:guid},function(res){
				//console.log(JSON.parse(res))
				var goods = JSON.parse(res).map(goods=>{
					// 计算价格
					var price = parseInt(goods.original*goods.discount/10);
					return `
					<div class="cont w960">
						<div class="title">
							<p><a href="http://www.zhiwo.com/Mall">商城首页</a></p>
			                <i>&gt;</i>
			                <p><a href="">雅诗兰黛</a></p>
			                <i>&gt;</i>
			                <p><a href="">精华</a></p>
			                <i>&gt;</i>
			                <p class="self">${goods.name}</p>
						</div>
						<div class="today">
							<div class="text">
								<p><span>今日特卖</span>${goods.intro}</p>
							</div>
							<div class="single"><a href=""><img src="../img/single.jpg"></a></div>
						</div>
						<div class="goods clearfix">
							<div class="goodsImg"><img src="${goods.imgS}" data-large="${goods.imgL}"></div>
							<div class="goodsInfo">
								<div class="title">
									<h1>${goods.name}</h1>
									<div class="clearfix">
										<p class="dis"><i>￥</i><em>${price}</em></p>
										<p class="face"><span>市场价：</span><del>${goods.original}</del></p>
									</div>
								</div>
								<div class="assess">
									<div>
										<p>评&nbsp;价:</p>
										<p class="xing"><span style="width: 96%;"></span></p>
										<p class="people"><a href="">${goods.comment}</a></p>
									</div>
								</div>
								<div class="count clearfix">
									<span>数&nbsp;量:</span>
									<p class="amount">
										<span id="jian"></span>
										<input type="text" id="count" value="1">
										<span id="jia"></span>
									</p>
			                    </div>
								<div class="buyer">
									<div class="buy clearfix">
										<p class="add"><span>加入购物车</span></p>
										<p class="cang"><span>收藏</span><i></i></p>
									</div>
									<div class="effect clearfix">
										<span>功效</span>
										<ul class="clearfix">
										    <li>补水</li>
							            	<li>补湿</li>
							           		<li>控油</li>
			                            </ul>
									</div>
								</div>
							</div>
						</div>
						<div class="intro">
							<h3>
								<ul class="clearfix">
									<li><a href="">商品参数</a></li>
									<li><a href="">本单详情</a></li>
									<li><a href="">使用方法</a></li>
									<li><a href="">用户口碑</a></li>
								</ul>
							</h3>
							<div class="detail">
								<h2>
									<p><span></span><em>商品参数</em><i>Product parameters</i></p>
								</h2>
								<table>
								    <tbody>
									    <tr>
			                                <td class="title">原 产 地:</td>
			                                <td class="cont">法国</td>
			                            </tr>
			                             <tr>
			                                <td class="title">规  格:</td>
			                                <td class="cont">4ml*2</td>
			                            </tr>
			                             <tr>
			                                <td class="title">质  地:</td>
			                                <td class="cont">精华露</td>
			                            </tr>
			                             <tr>
			                                <td class="title">生产日期:</td>
			                                <td class="cont">具体日期以收到实物为准</td>
			                            </tr>
			                             <tr>
			                                <td class="title">保 质 期:</td>
			                                <td class="cont">3年</td>
			                            </tr>
			                             <tr>
			                                <td class="title">包  装:</td>
			                                <td class="cont">有外盒无塑封</td>
			                            </tr>
			                             <tr>
			                                <td class="title">功  效:</td>
			                                <td class="cont">透白  舒缓 去角质 抗刺激 排毒</td>
			                            </tr>
			                             <tr>
			                                <td class="title">适合肤质:</td>
			                                <td class="cont">任何肤质</td>
			                            </tr>
			                             <tr>
			                                <td class="title">适合人群:</td>
			                                <td class="cont">所有人群</td>
			                            </tr>
			                             <tr>
			                                <td class="title">温馨提示:</td>
			                                <td class="cont">由于部分商品包装更换较为频繁，因此您收到的货品有可能与图片不完全一致，请您以收到的商品实物为准，同时我们会尽量做到及时更新，由此给您带来不便多多谅解，谢谢！</td>
			                            </tr>
			                    	</tbody>
			                    </table>
							</div>
						</div>
					</div>`
				}).join('');
				$('main').html(goods);
			});
			
			
			setTimeout(function(){
				// 放大镜效果
				$('.goodsImg').zoom();

				// 飞入效果
				$('.add span').click(function(){
					var target = $(this).parents('.goodsInfo').siblings('.goodsImg').find('img').
					clone().css({left:0,top:0}).addClass('cloneImg').appendTo('.goodsImg').
				})
			},2000)
			
		});
		
	});
});