import vueTrace from './src/components/index'

vueTrace.install=(vue)=>{
    vue.component(vueTrace.name, vueTrace);
}

export default vueTrace;
