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

// 滚动事件
$(()=>{
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
});
