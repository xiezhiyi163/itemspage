function pubFn(){
	//totop
	this.totop = null;
	this.temptotop = null;
}
//totop
pubFn.prototype.gotop = function(){
	var _this = this;
	this.totop = $(document).scrollTop()
	this.temptotop = this.totop-40
	if(this.temptotop<0){$(document).scrollTop(0);return;}
	setTimeout(function(){
		$(document).scrollTop(_this.temptotop)
		_this.gotop()
	},1)
}
