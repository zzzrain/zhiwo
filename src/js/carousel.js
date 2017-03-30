$(()=>{
	var play = $('.play');
	var imgs = $('.play .imgs');

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