(function (window, undefined) {
	var config = {
		media: {
			def: true //微博类找图默认开启
		},
		taobao: {
			def: true,
			model: {
				list: true, //list页交互
				detail: true, //detail页交互
				lds: true,
				remind: true,
				qutu:true
			}
		},
		tmt: {
			def: true, //广告默认打开
			model: {
				shopSite: false, //购物站
				paopao: true, //泡泡
				insert:true, //插入广告
				href:true, //地址拦截
				qzone:true,
				jiaohu:true,
				top: true,
				cps: true //cps
			}
		}
	};

	window.TK_config = config;
})(window);