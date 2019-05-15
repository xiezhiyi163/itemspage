function Fn(){
	//simple pic wheel轮播
	this.slideimgarr=[];//模拟数据
	this.slidenum=0;
	this.slidetimer=null;
	this.simplewheelflag = true;
}
//simple pic wheel轮播 --index
Fn.prototype.getsimplewheelimg = function(){
	this.slideimgarr = [1,2,3,2,1]
	this.simpleWheel()
}
Fn.prototype.simpleWheel = function(){
	var _this = this;
	if(this.slideimgarr.length!=0){
		setTimeout(function(){
			$('#Slidefaded').css({'height':'0','overflow':'hidden'})
		},1000)
	}
	$('#nalimgturn .nalimgdiv-in').show();
	$('#nalimgturn li').click(function(){
		if(_this.simplewheelflag==false) return;
		$(this).addClass("naltabturn-in").siblings().removeClass("naltabturn-in");
		$('#nalimgturn p span').eq($(this).index()).fadeIn(1000).delay(500).parent().siblings().children('span').fadeOut(1000).delay(500)
		$('#nalimgturn p').eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
	})		
	$('#nalimgturn .nalleftbtn').click(function(){
		if(_this.simplewheelflag==false) return;
		_this.slidenum--;
		_this.simplewheelimg();
	})
	$('#nalimgturn .nalrightbtn').click(function(){
		if(_this.simplewheelflag==false) return;
		_this.slidenum++;
		_this.simplewheelimg();
	})
	$('#nalimgturn li').eq($(this).index).click(function(){
		if(_this.simplewheelflag==false) return;
		_this.slidenum = $(this).index;
		_this.simplewheelimg();
	})
}
Fn.prototype.simplewheelimg = function(){
	var _this = this;
	if(this.simplewheelflag==true){
		_this.simplewheelflag=false
		setTimeout(function(){
			_this.simplewheelflag=true
		},1000)
	}
	if(_this.slidenum<0){
		_this.slidenum = $('#nalimgturn p').length-1;
	}
	if(_this.slidenum>$('#nalimgturn p').length-1){
		_this.slidenum = 0;
	}
	$('#nalimgturn li').eq(_this.slidenum).addClass("naltabturn-in").siblings().removeClass("naltabturn-in");
	$('#nalimgturn p span').eq(_this.slidenum).fadeIn(1000).delay(500).parent().siblings().children('span').fadeOut(1000).delay(500)
	$('#nalimgturn p').eq(_this.slidenum).fadeIn(500).siblings().fadeOut(500);
}
Fn.prototype.intervalsimplewheel = function(){
	var _this = this;
	if(_this.simplewheelflag==false) return;
	_this.slidenum++;
	_this.simplewheelimg();
}
Fn.prototype.tointervalsimplewheel = function(){
	var _this = this;
	setTimeout(function(){
		_this.intervalsimplewheel()
		_this.tointervalsimplewheel()
	},3000)
}
/*
 *
 *
 * 
 */
setTimeout(function(){
	var fn = new pubFn()
	var thisFn = new Fn()
	//
	$('.pub-totop').eq(0).click(function(){
		fn.gotop()
	})
	//
	thisFn.getsimplewheelimg()
	thisFn.tointervalsimplewheel()
},0)
