const moment = require('moment');
module.exports = {
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
			content: 'css,js,es5,es6,uniapp,nvue,微信小程序'
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
				title: 'ECMAScript',
				path: '/',
				children: ['/javascript/ecmascript6/let', '/javascript/ecmascript6/const']
			}]
		}]
	},
	plugins: [
		[
			'@vuepress/last-updated',
			{
				transformer: (timestamp, lang) => {
					// 不要忘了安装 moment
					const moment = require('moment')
					moment.locale(lang)
					return moment(timestamp).fromNow()
				}
			}
		]
	]
}
