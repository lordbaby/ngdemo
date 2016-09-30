/**
* NavData Module
*
* Description
*/
angular.module('case')
.constant('NavData', [
	{
		label:'基本显示控件',
		items:[
			{
				state:'show.progress',
				label:'进度条'
			},
			{
				state:'show.alert',
				label:'警告框'
			},
			{
				state:'show.panel',
				label:'面板'
			},
			{
				state:'show.tab',
				label:'标签页'
			},
			
		]
	},
	{
		label:'基本编辑控件',
		items:[
			{
				label:'HTML5',
				state:'input.html5'
			},
			{
				label:'复选框',
				state:'input.checkbox'
			},
			{
				label:'单选框',
				state:'input.radio'
			},
			{
				label:'日历',
				state:'input.calendar'
			},
			{
				label:'文件上传',
				state:'input.file'
			}
		]
	},
	{
		label:'下拉框控件',
		items:[
			{
				label:'基本',
				state:'select.basic'
			},
			{
				label:'级联',
				state:'select.cascade'
			},
			{
				label:'自定义',
				state:'select.custom'
			},
			{
				label:'自动完成',
				state:'select.typeahead'
			}
		]
	},
	{
		label:'表格',
		items:[
			{
				label:'基本',
				state:'table.basic'
			},
			{
				label:'前端综合',
				state:'table.local'
			}
		]
	},
	{
		label:'树',
		items:[
			{
				label:'基本',
				state:'tree.basic'
			},
			{
				label:'级联选择',
				state:'tree.cascade'
			}
		]
	},
	{
		label:'表单',
		items:[
			{
				label:'基本',
				state:'form.basic'
			},
			{
				label:'自定义验证',
				state:'form.customValid'
			},
			{
				label:'级联/依赖',
				state:'form.repeatPwd'
			}
		]
	},
	{
		label:'第三方组件',
		items:[
			{
				label:'百度UEditor',
				state:'thirdparty.ueditor'
			}
		]
	}
]);