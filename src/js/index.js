require(['config'],function(){
	require(['jquery','common'],function(){
		$(()=>{
			// 请求结构
			$('header').load('html/header.html');
			$('footer').load('html/footer.html');

			// 轮播图
			play();
			
			// 标签切换
			sign();
			
			// 生成结构
			create();

			// 滚动事件
			scroll();
			
			// 延时动画效果
			setTimeout(slider,2000);

			// cookie操作
			getCookie();
			$(document).on('click','#h-register',function(){// 退出设置
				rmCookie();
			});

			function play(){
				var play = $('#play');
				var imgs = $('#play .imgs');

				var len = imgs.find('li').length;
				var img = imgs.find('li').eq(0);

				play.css({width:img.outerWidth()});
				imgs.css({height:img.outerHeight()});

				// 设置当前、上一个索引值
				var idx = 0;
				var idx_= 0;
				var timer;

				// 添加页码
				$('<div/>').addClass('page').appendTo('#play');
				for(var i=1;i<=len;i++){
					$('<span/>').appendTo('.page');
				}
				$('.page').css({
					bottom:img.outerHeight()*0.05,
					left:img.outerWidth()/2-$('.page').outerWidth()/2
				});
				var span = $('.page span');
				span.eq(0).addClass('active');
						
					
				// 绑定事件
				play.mouseenter(()=>{
					clearInterval(timer);
				}).mouseleave(()=>{
					timer = setInterval(()=>{
						idx++;
						show();
					},3000);
				}).on('click','.page span',function(){
					idx = $(this).index();
					show();
				}).trigger('mouseleave'); // 自动触发事件


				function show(){
					// 首尾判断
					if(idx === len) {idx=0}
					if(idx < 0) {idx = lens-1}

					imgs.children().eq(idx).animate({opacity:1},1000);
					imgs.children().eq(idx_).animate({opacity:0},1000);
					span.eq(idx).addClass('active').siblings().removeClass('active');

					// 重置idx值
					idx_ = idx;
				}
			}
			
			function sign(){
				// 小图数据
				var brandS = [
					{img:[
						{href:'#',src:'img/brand01.jpg'},
						{href:'#',src:'img/brand02.jpg'},
						{href:'#',src:'img/brand03.jpg'},
						{href:'#',src:'img/brand04.jpg'},
						{href:'#',src:'img/brand05.jpg'},
						{href:'#',src:'img/brand06.jpg'},
						{href:'#',src:'img/brand07.jpg'},
						{href:'#',src:'img/brand08.jpg'},
						{href:'#',src:'img/brand09.jpg'},
						{href:'#',src:'img/brand10.jpg'}
					]},
					{img:[
						{href:'#',src:'img/brand11.jpg'},
						{href:'#',src:'img/brand12.jpg'},
						{href:'#',src:'img/brand13.jpg'},
						{href:'#',src:'img/brand14.jpg'},
						{href:'#',src:'img/brand15.jpg'},
						{href:'#',src:'img/brand16.jpg'},
						{href:'#',src:'img/brand17.jpg'},
						{href:'#',src:'img/brand18.jpg'},
						{href:'#',src:'img/brand19.jpg'},
						{href:'#',src:'img/brand20.jpg'}
					]},
					{img:[
						{href:'#',src:'img/brand21.jpg'},
						{href:'#',src:'img/brand22.jpg'},
						{href:'#',src:'img/brand23.jpg'},
						{href:'#',src:'img/brand24.jpg'},
						{href:'#',src:'img/brand25.jpg'},
						{href:'#',src:'img/brand26.jpg'},
						{href:'#',src:'img/brand27.jpg'},
						{href:'#',src:'img/brand28.jpg'},
						{href:'#',src:'img/brand29.jpg'},
						{href:'#',src:'img/brand30.jpg'}
					]},
					{img:[
						{href:'#',src:'img/brand31.jpg'},
						{href:'#',src:'img/brand32.jpg'},
						{href:'#',src:'img/brand33.jpg'},
						{href:'#',src:'img/brand34.jpg'},
						{href:'#',src:'img/brand35.jpg'},
						{href:'#',src:'img/brand36.jpg'},
						{href:'#',src:'img/brand37.jpg'},
						{href:'#',src:'img/brand38.jpg'},
						{href:'#',src:'img/brand39.jpg'},
						{href:'#',src:'img/brand40.jpg'}
					]}
				];

				// 大图数据
				var brandL = ['img/brandL1.jpg','img/brandL2.jpg','img/brandL3.jpg','img/brandL4.jpg'];

				// 小图结构
				var imgS = 
				$('<div/>').addClass('small').html(
				$('<ul/>').addClass('clearfix').html(
					brandS[0].img.map(function(item) {
						return `<li><a href="${item.href}"><img src="${item.src}"></a></li>`
					}).join('')
				));
				
				// 大图结构
				var imgL = 
				$('<div/>').addClass('big').html(
				$('<a/>').attr('href','#').html(
				$('<img/>').attr({src:'img/brandL1.jpg',alt:'${item.alt}'})));

				// 插入结构
				$('#brand .cont').append($('<div/>').addClass('page clearfix').append([imgS,imgL]));

				// 事件委托
				$(document).on('mouseenter','#brand .nav li',function(){
					tab($(this));
				}).on('click','#brand .prev',function(){
					var ele = $('#brand .nav').find('.active').prev();
					if(ele.length===0){
						ele = $('#brand .nav').find('li').eq(brandL.length-1);
					}
					tab(ele);
				}).on('click','#brand .next',function(){
					var ele = $('#brand .nav').find('.active').next();
					if(ele.length===0){
						ele = $('#brand .nav').find('li').eq(0);
					}
					tab(ele);
				})

				function tab(ele){
					// 高亮
					ele.addClass('active').siblings().removeClass('active');

					// 切换(重新生成结构)
					var idx = ele.index();
					$('#brand .cont .small').remove();
					$('#brand .cont .big').remove();

					var imgS = 
					$('<div/>').addClass('small').html(
					$('<ul/>').addClass('clearfix').html(
						brandS[idx].img.map(function(item) {
							return `<li><a href="${item.href}"><img src="${item.src}"></a></li>`
						}).join('')
					));

					var imgL = 
					$('<div/>').addClass('big').html(
					$('<a/>').attr('href','#').html(
					$('<img/>').attr({src:brandL[idx],alt:'${item.alt}'})));

					$('#brand .cont .page').append([$(imgS),$(imgL)]);
				}
			}
			
			function create(){
				// 数据
				var hotData = ['img/hot5.jpg','img/hot6.jpg','img/hot7.jpg','img/hot8.jpg'];
				var hotText = '让脸蛋爆水不停的面膜！在睡眠时间给予肌肤层层水分，含有帮助锁水的维他命B5成分、NMF天然保湿因子、帮助补充水分、供给营养，具有肌肤舒缓修护的效果！轻轻揉一揉，瞬间爆出水珠，给肌肤满满的补水力量！';
				
				// 插入
				$('#hot ul').html(hotData.map(item=>{
					return `
					<li>
						<div class="img"><a><img src="${item}"></a></div>
						<div class="info">
							<div class="time"><i>距团购结束</i></div>
							<div class="cont"><a><span>7.2折/</span>${hotText}</a></div>
							<div class="text clearfix">
								<p class="price"><i>￥</i><span>78</span><del>￥238.00</del></p><p class="btn"><a>加入购物车</a></p>
							</div>
							<div class="tips"><p class="count">已有<span>36</span>人购买</p></div>
						</div>
					</li>`
				}))
			}

			function scroll(){
				var top = $('header').outerHeight() + $('#play').outerHeight();
				var hot = $('#hot').outerHeight();
				var side = $('main .side');
				var idx = 0;
				$(window).scroll( e=> {	
					// 获取滚动距离 判断显示隐藏
					var high =  $(this).scrollTop() - top;			
					high>=0 ? side.show() : side.hide();

					// 切换高亮(sibling)
					idx = 1;
					if(high>hot) {idx = 2}
					var now = side.find('li').eq(idx);
					now.addClass('active').siblings().removeClass('active');
				});

				// 事件委托
				side.on('click','li',function(){
					if($(this).hasClass('index')) {
						$('body').animate({scrollTop:0},'fast');
					}
					if($(this).hasClass('main')) {
						$('body').animate({scrollTop:top},'fast');

					}
					if($(this).hasClass('group')) {
						$('body').animate({scrollTop:top+hot},'fast');
					}
					console.log(this)
					$(this).addClass('active').siblings().removeClass('active');
				});
			}
		})
	});
});
