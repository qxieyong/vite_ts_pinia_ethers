function formatDecimal(input: number | string, threshold?: number, precision?: number): string {
	threshold = threshold || 3;
	precision = precision || 4;
	// 将输入转换为字符串
	let decimalStr = input.toString();

	// 使用正则表达式匹配小数点后的连续零
	const regex = new RegExp(`(\\.0{${threshold},})([1-9]\\d*)`);
	const match = decimalStr.match(regex);

	if (match) {
		// 获取连续零的部分和后面的非零数字
		const zeros = match[1];
		const nonZero = match[2];

		// 计算连续零的个数
		const zeroCount = zeros.length - 1;

		// 构建新的字符串
		decimalStr = decimalStr.replace(zeros + nonZero, `.0{${zeroCount}}${nonZero.slice(0, precision - 1)}`);
	} else {
		decimalStr = decimalStr.slice(0, decimalStr.indexOf(".") + precision + 1);
	}

	return decimalStr;
}

export default formatDecimal;
