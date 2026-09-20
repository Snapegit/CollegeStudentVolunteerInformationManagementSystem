	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import huodongxinxi from '@/views/huodongxinxi/list'
	import discusshuodongxinxi from '@/views/discusshuodongxinxi/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import yonghuhuodong from '@/views/yonghuhuodong/list'
	import tousuxinxi from '@/views/tousuxinxi/list'
	import huodongjilu from '@/views/huodongjilu/list'
	import zhiyuanzhe from '@/views/zhiyuanzhe/list'
	import huodongleixing from '@/views/huodongleixing/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '新闻公告',
			component: news
		}
		,{
			path: '/huodongxinxi',
			name: '活动信息',
			component: huodongxinxi
		}
		,{
			path: '/discusshuodongxinxi',
			name: '活动信息评论',
			component: discusshuodongxinxi
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/yonghuhuodong',
			name: '用户活动',
			component: yonghuhuodong
		}
		,{
			path: '/tousuxinxi',
			name: '投诉信息',
			component: tousuxinxi
		}
		,{
			path: '/huodongjilu',
			name: '活动记录',
			component: huodongjilu
		}
		,{
			path: '/zhiyuanzhe',
			name: '志愿者',
			component: zhiyuanzhe
		}
		,{
			path: '/huodongleixing',
			name: '活动类型',
			component: huodongleixing
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
