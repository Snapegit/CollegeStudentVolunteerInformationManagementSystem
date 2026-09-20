import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import newsList from '@/views/pages/news/list'
import zhiyuanzheList from '@/views/pages/zhiyuanzhe/list'
import zhiyuanzheDetail from '@/views/pages/zhiyuanzhe/formModel'
import zhiyuanzheAdd from '@/views/pages/zhiyuanzhe/formAdd'
import zhiyuanzheRegister from '@/views/pages/zhiyuanzhe/register'
import zhiyuanzheCenter from '@/views/pages/zhiyuanzhe/center'
import huodongleixingList from '@/views/pages/huodongleixing/list'
import huodongleixingDetail from '@/views/pages/huodongleixing/formModel'
import huodongleixingAdd from '@/views/pages/huodongleixing/formAdd'
import huodongxinxiList from '@/views/pages/huodongxinxi/list'
import huodongxinxiDetail from '@/views/pages/huodongxinxi/formModel'
import huodongxinxiAdd from '@/views/pages/huodongxinxi/formAdd'
import storeupList from '@/views/pages/storeup/list'
import yonghuhuodongList from '@/views/pages/yonghuhuodong/list'
import yonghuhuodongDetail from '@/views/pages/yonghuhuodong/formModel'
import yonghuhuodongAdd from '@/views/pages/yonghuhuodong/formAdd'
import huodongjiluList from '@/views/pages/huodongjilu/list'
import huodongjiluDetail from '@/views/pages/huodongjilu/formModel'
import huodongjiluAdd from '@/views/pages/huodongjilu/formAdd'
import tousuxinxiList from '@/views/pages/tousuxinxi/list'
import tousuxinxiDetail from '@/views/pages/tousuxinxi/formModel'
import tousuxinxiAdd from '@/views/pages/tousuxinxi/formAdd'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'newsList',
			component: newsList
		}
		, {
			path: 'zhiyuanzheList',
			component: zhiyuanzheList
		}, {
			path: 'zhiyuanzheDetail',
			component: zhiyuanzheDetail
		}, {
			path: 'zhiyuanzheAdd',
			component: zhiyuanzheAdd
		}
		, {
			path: 'zhiyuanzheCenter',
			component: zhiyuanzheCenter
		}
		, {
			path: 'huodongleixingList',
			component: huodongleixingList
		}, {
			path: 'huodongleixingDetail',
			component: huodongleixingDetail
		}, {
			path: 'huodongleixingAdd',
			component: huodongleixingAdd
		}
		, {
			path: 'huodongxinxiList',
			component: huodongxinxiList
		}, {
			path: 'huodongxinxiDetail',
			component: huodongxinxiDetail
		}, {
			path: 'huodongxinxiAdd',
			component: huodongxinxiAdd
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		, {
			path: 'yonghuhuodongList',
			component: yonghuhuodongList
		}, {
			path: 'yonghuhuodongDetail',
			component: yonghuhuodongDetail
		}, {
			path: 'yonghuhuodongAdd',
			component: yonghuhuodongAdd
		}
		, {
			path: 'huodongjiluList',
			component: huodongjiluList
		}, {
			path: 'huodongjiluDetail',
			component: huodongjiluDetail
		}, {
			path: 'huodongjiluAdd',
			component: huodongjiluAdd
		}
		, {
			path: 'tousuxinxiList',
			component: tousuxinxiList
		}, {
			path: 'tousuxinxiDetail',
			component: tousuxinxiDetail
		}, {
			path: 'tousuxinxiAdd',
			component: tousuxinxiAdd
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/zhiyuanzheRegister',
		component: zhiyuanzheRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
