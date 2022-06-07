import Axios from "axios";
 
 const characterStore = {
     namespaced: true,
  
     state: () => ({
       cursos:[],
     }),
  
     getters: {},
  
     mutations: {
        
  
  
  
       loadCharacters(state, params) {
         state.cursos = params.cursos;
       },
     },
   
  
     actions: {
       async getCharacters({ commit }) {
                 const response = await Axios.get('cursos.json')
                 commit('loadCharacters', response.data)
              
             },
       },
   };
  
   export default characterStore;