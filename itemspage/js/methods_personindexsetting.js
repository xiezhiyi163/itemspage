setTimeout(function(){
	var fn = new pubFn()
	//
	$('.pub-totop').eq(0).click(function(){
		fn.gotop()
	})	
},0)
