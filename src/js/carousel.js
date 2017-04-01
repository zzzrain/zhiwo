// 轮播图
$(()=>{
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
	$('<div/>').addClass('page').appendTo('.play');
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
});

// 下拉效果、滑动效果
$(()=>{
	var wechat = $('#wechat');
	var personal = $('#personal');
	var server = $('#server');
	var market = $('#market');

	var slider = $('#slider li');

	$(document).on('mouseenter','#wechat',function(){
		wechat.children('div').animate({height: 100});	
	}).on('mouseenter','#personal',function(){
		personal.children('div').animate({height: 150});
	}).on('mouseenter','#server',function(){
		server.children('div').animate({height: 120});
	}).on('mouseenter','#market',function(){
		market.children('.list').animate({height: 304});
	}).on('mouseleave','#wechat',function(){
		wechat.children('div').animate({height: 0});	
	}).on('mouseleave','#personal',function(){
		personal.children('div').animate({height: 0});
	}).on('mouseleave','#server',function(){
		server.children('div').animate({height: 0});
	}).on('mouseleave','#market',function(){
		market.children('.list').animate({height: 0});
	}).on('mouseenter','#slider li',function(){
		$(this).animate({width: 74}).siblings().animate({width: 0})
	}).on('mouseleave','#slider li',function(){
		$(this).animate({width: 0})
	})
});

// 标签切换
$(()=>{
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
	$('#brand .cont').append($('<div/>').addClass('page clearfix').append(imgS).append(imgL));

	// 事件委托
	$(document).on('mouseenter','#brand .nav li',function(){
		// 高亮
		$(this).addClass('active').siblings().removeClass('active');

		// 切换(重新生成结构)
		var idx = $(this).index();
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

		$('#brand .cont .page').append($(imgS)).append($(imgL));
	});
});

// 生成结构
$(()=>{
	
});

<li>
	<div class="img">
		<a href="/group/1117178.html" target="_blank">
			<img src="img/hot1.jpg">
		</a>
	</div>
	<div class="info">
		<div class="time">
			<i class="_downClock" diff="52476">距团购结束</i>
			<span><span>0</span>天<span>04</span>小时<span>53</span>分<span>43</span>秒</span>
		</div>
		<div class="cont">
			<a href="/group/1117178.html" target="_blank">
				<span>3.3折/</span>
				韩国超Q的鸡蛋补水睡眠面膜，抓住每晚黄金护肤时间~看得见的“蛋黄”+“蛋清”，给你满满补水力！自己动手DIY鸡蛋面膜，一盒蕴含满满8颗鸡蛋的营养，养出鸡蛋般Q弹美肌！
			</a>
		</div>
		<div class="text clearfix">
			<p class="price">
				<i>￥</i><span>78</span><del>￥238.00</del>
			</p>
			<p class="btn">
				<a class="put-cart embox" data="1117178_It girl鸡蛋面膜8个_78_1__" pic="http://images.zhiwo.com/product/2017/0328/817899464765877050.jpg" href="/cart/ajax/add?from=group&amp;goods_id=1117178">加入购物车
				</a>
			</p>
		</div>	
		<div class="tips">
			<p class="count">已有<span>36</span>人购买</p>
		</div>
	</div>
</li>

// 滚动事件
/*$(()=>{
	// 需要头部、楼梯的高度
	var top = $('header').outerHeight() + $('#play').outerHeight();
	var side = $('main .side');

	$(window).scroll( e=> {	
		// 获取滚动距离 判断显示隐藏
		var high =  $(this).scrollTop() - top;			
		high>=0 ? side.show() : side.hide();

		// 切换高亮(sibling)
		// var idx = parseInt(high/louti);
		// var now = $('ul li').eq(idx);
		// now.addClass('hover').siblings().removeClass('hover');
	});

	// 事件委托
	$('#nav').on('click','li',function(){
		if($(this).hasClass('last')) {$('body').animate({scrollTop:0},'fast');}
		else {$('body').animate({scrollTop:header+louti*$(this).index()},'fast');}
	});
});*/
