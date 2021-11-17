# vue3.0前端底层架构，包括数据请求封装、路由管理、vuex管理等，集成element-plus,开箱即用
#### 1、项目启动
```
npm install  
```
```
npm run serve 
```
```
npm run build 
```
```
npm run lint
```
#### 2、配置相关
- src/api/index.js为项目api管理文件  
- src/config/index.js为项目公用信息管理文件，例如请求主接口，element-ui国际化等  
- src/request/index.js为项目数据请求封装文件，可根据需求修改配置，集成了loding加载框  
- 根目录vue.config.js是vue项目主配置文件，可配置代理、打包相关等  
- src/inspect.js为路由访问拦截文件，可以检测是否登录等操作  
- src/router/index.js是项目路由主入口配置文件  
- src/router/RouterPage/下的文件是路由配置文件，路由配置文件的requireAuth可配合inspect.js控制页面访问是否需要一些权限等  
- src/store/index.js是vuex的配置文件
 
#### 更多关于vue3.0项目配置注意事项请访问：https://blog.mzili.com.cn/info/20
 
