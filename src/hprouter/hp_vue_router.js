// 1  挂在$router
// 2 实现hpVueRouter类，管理url
import Link from '@/hprouter/hp_link.js';
import View from '@/hprouter/hp_view.js';
let Vue;
class HpVueRouter {
    // 设置current为响应式的
    
    constructor(options){
        this.$options = options
        Vue.util.defineReactive(this,'current','/')
        window.addEventListener('hashchange',this.onHashChange.bind(this))
        window.addEventListener('load',this.onHashChange.bind(this))
        this.routerMap={}
        this.$options.routes.forEach(route => {
            // if(route.path == this.$router.current){
            //     component = route.component
            // }
            this.routerMap[route.path] =route
        });
    
    }
    onHashChange(){
        this.current = window.location.hash.slice(1)
    }
}

HpVueRouter.install = function(_Vue){
    //Vue.use调用的时候，怎么获取根实例中的router选项
    Vue = _Vue
    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router
            }
        }
    })
    Vue.component('router-link',Link)
    Vue.component('router-view',View)
}

export default HpVueRouter