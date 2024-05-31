module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
		"eslint-config-prettier"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parser: "@typescript-eslint/parser",
		project: ["./tsconfig.json"],
		extraFileExtensions: [".vue"]
	},
	plugins: ["@typescript-eslint", "prettier"],
	ignorePatterns: [
		"src/vendor/**",
		"src/solid/**",
		"src/opus-recorder/**",
		"public/**",
		"dist",
		".eslintrc.cjs"
	], // 忽略检查
	overrides: [
		{
			files: ["*.ts"],
			parserOptions: {
				project: ["./tsconfig.json"]
			}
		}
	],
	// 0：关闭，1：警告，2：禁止   或者：off/warn/error
	rules: {
		"max-len": ["error", { code: 150 }], // 将一行代码的最大长度设置为 150 个字符
		"keyword-spacing": [
			"error",
			{
				after: true,
				overrides: {
					if: { before: true, after: true },
					else: { before: true },
					catch: { before: true, after: true },
					for: { after: true },
					while: { after: true },
					switch: { after: true }
				}
			}
		],
		"object-curly-spacing": ["error", "always"],
		"linebreak-style": ["error", "windows"], // 设置换行符的风格为 Unix 格式，如果检测到 Windows 格式的换行符则会报错。
		"eol-last": "off", // 要求文件末尾必须有换行符，如果文件末尾没有换行符则会报错。
		indent: [
			"error",
			"tab",
			{
				CallExpression: {
					arguments: 1
				},
				FunctionDeclaration: {
					body: 1,
					parameters: 1
				},
				FunctionExpression: {
					body: 1,
					parameters: 1
				},
				MemberExpression: 1,
				ObjectExpression: 1,
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"]
			}
		],
		"vue/multi-word-component-names": "off", // vue组件模板名称
		"no-explicit-any": "off",
		camelcase: ["error", { ignoreDestructuring: true }], // 将变量和函数名的命名规范设置为错误级别
		"space-before-function-paren": ["error", "always"], // 要求函数括号前面不能有空格。
		"guard-for-in": "off", //检查属性是否为对象自身的属性
		"prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
		"prefer-promise-reject-errors": "off",
		curly: "off", // 禁用了控制语句使用花括号的规则
		"comma-dangle": ["error", "never"], //要求对象字面量或数组字面量中最后一个元素后面不能有逗号。
		"comma-spacing": "error", //要求逗号后面有空格，逗号前面不能有空格。
		"comma-style": "error", //要求逗号放在行末，而不是行首。
		"quote-props": ["error", "consistent"], //要求对象字面量属性名称的引号类型一致。
		quotes: ["error", "double", { allowTemplateLiterals: true }], // 要求字符串使用双引号，允许字符串中使用模板字面量
		"space-before-blocks": ["error", "always"], //要求在代码块开始的地方使用空格。
		"spaced-comment": ["error", "always"], //要求注释前面有空格。
		"prefer-spread": "off",
		"prefer-const": ["error", { destructuring: "all" }], //要求使用 const 声明变量，允许对解构赋值进行重新赋值。
		"object-curly-spacing": ["error", "always"], //要求对象字面量的大括号内没有空格。
		"array-bracket-spacing": ["error", "never"], //要求数组字面量的方括号内没有空格。
		"switch-colon-spacing": "error", //要求 switch 语句中的冒号前后有空格。
		"operator-linebreak": ["error", "after"], //要求操作符放在换行符后面。
		"padded-blocks": ["error", "never"], //要求代码块内没有不必要的填充空行。
		"new-cap": "error", //用于检查在使用构造函数时是否按照大写字母开头的命名约定
		"no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }], // 禁止未使用的变量
		"no-useless-call": "error", //禁止不必要的函数调用。
		"no-trailing-spaces": "error", //禁止行尾有多余的空格。
		"no-mixed-spaces-and-tabs": "error", //禁止使用空格和制表符混合缩进。
		"no-multiple-empty-lines": ["error", { max: 2 }], //禁止出现多余的空行，最多只允许连续两行空行。
		"no-tabs": "off", //禁止使用制表符。
		"no-multi-str": "error", //禁止使用多行字符串。
		"no-new-wrappers": "error", //禁止对原始数据类型进行包装实例化。
		"no-irregular-whitespace": [
			"error",
			{ skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true }
		], //禁止在代码中使用不规则的空白符，但允许在字符串、注释、正则表达式和模板字符串中使用。
		"no-unexpected-multiline": "error", //禁止出现意外的多行代码。
		"no-return-await": "error", //禁止在 return 语句中使用不必要的 `await
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{ checksConditionals: true, checksVoidReturn: true, checksSpreads: true }
		],
		complexity: ["error", { max: 15 }], //将圈复杂度的最大值设为15
		"prettier/prettier": "error", // 开启规则
		"@typescript-eslint/ban-ts-comment": "off",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always", // 匿名函数前必须有空格
				named: "never", // 命名函数前不能有空格
				asyncArrow: "always" // 异步箭头函数前必须有空格
			}
		],
		"arrow-spacing": ["error", { before: true, after: true }], // 箭头函数前后必须有空格
		"operator-linebreak": ["off"],
		"@typescript-eslint/no-empty-function": "off",
		"vue/prop-name-casing": ["error", "camelCase"], // 强制 prop 名称使用驼峰式命名
		"vue/attribute-hyphenation": "off", // 禁用 vue/attribute-hyphenation 规则
		// 'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }], // 这里的 2 是可以根据需要调整的深度
	}
};
