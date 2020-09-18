// to

export default {
    props:{
        to:{
            type:String,
            required:true
        }
    },
    render(h){
        //<a href="">xxx</a>
        return h('a',{attrs:{href:'#'+this.to}},[this.$slots.default])

        //jsx
      //  return <a href={'#'+this.to}>{this.$slots.default}</a>

    }

}