const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '新闻公告管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'新闻公告',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '活动信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'活动信息',
							url:'/index/huodongxinxiList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "大学生志愿者信息管理系统"
        } 
    }
}
export default config
