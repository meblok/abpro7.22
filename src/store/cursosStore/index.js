// const characterStore = {
//     namespaced: true,
  
//     state: () => ({
//       cursos:[],
//     }),
  
//     getters: {},
  
//     mutations: {
        
  
  
  
//       loadCharacters(state, params) {
//         state.cursos = params;
//       },
//     },
   
  
//     actions: {
//       async getCharacters({ commit }) {
//               try {
//                 const response = await fetch('cursos.json')
//                 const datoscursos = await response.json()
//                 const cursos = datoscursos.cursos
//                 commit('loadCharacters', cursos)
//               } catch (error) {
//                 console.log(error)
//               }
//             },
//       },
//   };
  
//   export default characterStore;