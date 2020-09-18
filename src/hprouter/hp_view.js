export default{
    render(h){
       
      const route =   this.$router.routerMap[this.$router.current]
        if(route){
            return h(route.component)
        }
        
    }
}