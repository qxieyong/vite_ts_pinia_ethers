// 适配移动端兼容
(function (doc, win) {
	console.log("win.devicePixelRatio", win.devicePixelRatio);
	const designWidth = 1920; // 设计稿宽度
	const dpr = Math.min(win.devicePixelRatio, 3),
		_scale = 1 / dpr,
		resizeEvent = "orientationchange" in window ? "orientationchange" : "resize"; // orientationchange 屏幕方向变化

	const recalCulate = function () {
		const docEle = document.documentElement,
			w = docEle.clientWidth,
			num = w / designWidth;
		const fontSize = num * 100 > 70 ? 70 : num * 100 < 30 ? 30 : num * 100;
		docEle.style.fontSize = fontSize.toFixed(1) + "px";
	};
	recalCulate();
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);
