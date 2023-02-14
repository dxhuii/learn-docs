const commonPath = '/other' // 根路径

export default [
	{
		text: 'other',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '工具',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'npm', link: `${commonPath}/npm.md` },
			{ text: 'iterm', link: `${commonPath}/iterm.md` },
			{ text: 'eclipse', link: `${commonPath}/eclipse.md` },
			{ text: 'vitepress 离线搜索', link: `${commonPath}/vitepress-search.md` },
		],
	},
]
