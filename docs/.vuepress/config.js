const moment = require('moment');
moment.locale('zh-cn');
module.exports = {
	base: '/Front-End-Notes/',
	title: 'StarSky的前端笔记',
	/* 网页标题*/
	description: 'StarSky的前端笔记',
	/* seo引擎抓取简介 */
	head: [
		['link', {
			rel: 'icon',
			href: '/assets/img/favicon.ico'
		}],
		['meta', {
			name: 'keywords',
			content: 'StarSky前端笔记,css,js,es5,es6,uniapp,nvue,微信小程序'
		}],
		['meta', {
			name: 'author',
			content: 'StarSky的前端笔记'
		}]
	],
	themeConfig: {
		lastUpdated: '更新时间',
		logo: '/assets/img/logo.jpeg',
		nav: [{
			text: 'GitHub',
			link: 'https://github.com/StarSky1993/Front-End-Notes'
		}],
		sidebar: [{
			title: 'JavaScript',
			children: [{
				title: 'ECMAScript5',
				path: '/javascript/ecmascript5/var',
				children: [
					'/javascript/ecmascript5/var',
					'/javascript/ecmascript5/var-lift',
					'/javascript/ecmascript5/global-pollution',
					'/javascript/ecmascript5/block-level-scope',
					'/javascript/ecmascript5/operator',
					'/javascript/ecmascript5/one-dollar-operator',
					'/javascript/ecmascript5/switch', '/javascript/ecmascript5/while',
					'/javascript/ecmascript5/continue-break', '/javascript/ecmascript5/for-in',
					'/javascript/ecmascript5/toLowerCase()',
					'/javascript/ecmascript5/toUpperCase()', '/javascript/ecmascript5/trim',
					'/javascript/ecmascript5/from-childhood-to-big',
					'/javascript/ecmascript5/slice-substr-substring',
					'/javascript/ecmascript5/indexOf', '/javascript/ecmascript5/replace',
					'/javascript/ecmascript5/repeat',
					'/javascript/ecmascript5/String-turns-numbers',
					'/javascript/ecmascript5/Digital-transcriptional-string',
					'/javascript/ecmascript5/String-turn-array',
					'/javascript/ecmascript5/An-array-of-transcriptional-strings',
					'/javascript/ecmascript5/The-true-and-false-type',
					'/javascript/ecmascript5/isNaN',
					'/javascript/ecmascript5/Math-max-and-Math-min',
					'/javascript/ecmascript5/Math-ceil',
					'/javascript/ecmascript5/Math-floor',
					'/javascript/ecmascript5/Math-round',
					'/javascript/ecmascript5/Random-number',
					'/javascript/ecmascript5/getDate',
					'/javascript/ecmascript5/Date-transfer-timestamp',
					'/javascript/ecmascript5/Date-time-formatting',
					'/javascript/ecmascript5/isArray',
					'/javascript/ecmascript5/pop',
					'/javascript/ecmascript5/unshift',
					'/javascript/ecmascript5/slice',
					'/javascript/ecmascript5/arr-move',
					'/javascript/ecmascript5/arr-clear',
					'/javascript/ecmascript5/split',
					'/javascript/ecmascript5/concat',
					'/javascript/ecmascript5/sort',
					'/javascript/ecmascript5/forEach'
				]
			}, {
				title: 'ECMAScript6',
				path: '/javascript/ecmascript6/let',
				children: ['/javascript/ecmascript6/let', '/javascript/ecmascript6/const',
					'/javascript/ecmascript6/var-let-const',
					'/javascript/ecmascript6/var-let-const2',
					'/javascript/ecmascript6/Object.freeze',
					'/javascript/ecmascript6/value-transfer-address',
					'/javascript/ecmascript6/null-undefined', '/javascript/ecmascript6/for-of',
					'/javascript/ecmascript6/template-string',
					'/javascript/ecmascript6/includes', '/javascript/ecmascript6/startsWith',
					'/javascript/ecmascript6/endsWith',
					'/javascript/ecmascript6/Array.of',
					'/javascript/ecmascript6/Extended-operator',
					'/javascript/ecmascript6/for-dom',
					'/javascript/ecmascript6/Deconfiguration',
					'/javascript/ecmascript6/arr-add',
					'/javascript/ecmascript6/array-fill',
					'/javascript/ecmascript6/find',
					'/javascript/ecmascript6/findIndex',
                    '/javascript/ecmascript6/operationDom',
                    '/javascript/ecmascript6/iterator',
                    '/javascript/ecmascript6/every',
                    '/javascript/ecmascript6/some'
				]
			}]
		}]
	},
	plugins: [
		[
			'@vuepress/last-updated',
			{
				transformer: (timestamp, lang) => {
					const moment = require('moment') // https://momentjs.com/
					return moment(timestamp).format('YYYY年MM月DD日 H:MM:SS');
				}
			}
		]
	]
}
