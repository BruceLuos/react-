# react-jianshu

#### 介绍
使用react进行简书网页的开发

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 码云特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5.  码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

<!-- 
react-router-dom提供路由方法
react-redux中的Provider能使包含其中的组件接收store里的值
使用了react-redux的组件需要使用connect进行与store的连接
使用immutable中的fromJs能使store中的数据不轻易修改
因为当store中的数据一旦发生更新，所有的组件都会重新render，所以要在每个组件中添加上shouldComponentupdata进行当前组件是否需要更新，而使用pureCompon可以解决这个问题
react-router-dom中的link可以进行路由的跳转
使用style-component出来的标签无法准确获取里面的dom,所以需要通过innerRef来获取dom
react的登陆鉴权，当login为true时才能显示某个页面否则的话就跳转到登陆页面
为了页面的请求优化，组件需要进行异步加载，所以就需要react-loadable插件来进行组件的创建
当使用了react-loadable来异步加载组件，组件就有可能获取不到需要从路由this.props.params里的数据，所以需要用到react-router-dom中的withRouter来使组件能够获取this.props.params的数据
项目上线 
项目放在xampp中的htdoc中，需要运行xampp的apache,数据api也要放在htdoc中
 -->