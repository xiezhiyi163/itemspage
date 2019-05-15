function Fn(){
	//allcheck
	this.allcheckflag = false;
	//onecheck
	this.checkarr = [0,0,0]
}
Fn.prototype.allchecked = function(){
	var _this = this;
	if(this.allcheckflag == false){
		this.allcheckflag = true
		$('#p-index-topay-checkimg').addClass('pub-checkborder');
		$('#p-index-topay-checkimgbase').attr('checked','checked')
		for(var i=0;i<$('.p-index-topay-itemwrap').length;i++){
			$('.p-index-topay-itemwrap').eq(i).addClass('pub-checkborderitem')
			_this.checkarr[i]=1
		}
	}else{
		this.allcheckflag = false
		$('#p-index-topay-checkimg').removeClass('pub-checkborder');
		$('#p-index-topay-checkimgbase').attr('checked','checked')
		for(var i=0;i<$('.p-index-topay-itemwrap').length;i++){
			$('.p-index-topay-itemwrap').eq(i).removeClass('pub-checkborderitem')
			_this.checkarr[i]=0
		}
	}
}
Fn.prototype.onecheck = function(){
	var _this = this;
	$('.p-index-topay-itemwrap').on('click',function(){
		var index = Number($('.p-index-topay-itemwrap').eq($(this).index()).attr('id'))
		if(_this.checkarr[index]==0){
			_this.checkarr[index]=1
			$('.p-index-topay-itemwrap').eq($(this).index()).addClass('pub-checkborderitem')
		}else{
			_this.checkarr[index]=0
			$('.p-index-topay-itemwrap').eq($(this).index()).removeClass('pub-checkborderitem')
		}
		_this.allcheckflag = true
		$('#p-index-topay-checkimg').addClass('pub-checkborder');
		$('#p-index-topay-checkimgbase').attr('checked','checked')
		for(var i=0;i<_this.checkarr.length;i++){
			if(_this.checkarr[i]==0){
				_this.allcheckflag = false
				$('#p-index-topay-checkimg').removeClass('pub-checkborder');
				$('#p-index-topay-checkimgbase').attr('checked',false);
				continue;
			}
		}
	})
}
/*
 * 
 * 
 * 
 */
setTimeout(function(){
	var fn = new pubFn()
	var thisfn = new Fn()
	//
	$('.pub-totop').eq(0).click(function(){
		fn.gotop()
	})
	//
	$('#p-index-topay-allcheckwrap').click(function(){
		thisfn.allchecked()
	})
	thisfn.onecheck()
},0)
