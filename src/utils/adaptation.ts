// 适配兼容
(function (doc, win) {
	console.log("win.devicePixelRatio", win.devicePixelRatio);
	const designWidth = 1920; // 设计稿宽度
	const dpr = Math.min(win.devicePixelRatio, 3),
		_scale = 1 / dpr,
		resizeEvent = "orientationchange" in window ? "orientationchange" : "resize"; // orientationchange 屏幕方向变化

	const recalCulate = function () {
		const docEle = document.documentElement;
		const w = docEle.clientWidth;
		const num = (w > designWidth ? designWidth : w) / designWidth;
		let fontSize = num * 100;
		fontSize = fontSize > 70 ? 70 : fontSize < 30 ? 30 : fontSize;
		docEle.style.fontSize = fontSize.toFixed(2) + "px";
	};
	recalCulate();
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);
