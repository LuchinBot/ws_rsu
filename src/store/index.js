import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:true,
    empresa:{
      abreviatura:"133",
      correo:"",
      direccion:"",
      fan_page:"",
      horario_atencion:"",
      logo:"",
      razon_social:"",
      ruc:"",
      telefonos:"",
      ubigeo:"",
    },
  },
  mutations: {
    setLoading:(state,value)=>{
      Vue.set(state,'loading',value);
    },
    setEmpresa:(state,obj)=>{
      console.log("ObjStore", obj);
      Vue.set(state,'empresa',obj);
      localStorage.setItem('StationRSU'+process.env.VUE_APP_COMPANY, JSON.stringify(obj));
    },
  },
  actions: {
    loadObjEmpresa({commit}){
      let ObjEmpresa= localStorage.getItem('StationRSU'+process.env.VUE_APP_COMPANY);
      if(ObjEmpresa){
        ObjEmpresa = JSON.parse(ObjEmpresa);
        commit('setEmpresa',ObjEmpresa);
      }
    },
  },
  modules: {
  }
})
