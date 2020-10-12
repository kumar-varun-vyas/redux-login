const Reducer =(state =[] , action)=>{
  switch (action.type){
    case 'ADD_DETAILS':
      return state.concat([action.data]);
    case 'DELETE':
      return state.filter((detail)=> detail.id !==action.id);

    case 'MATCH_DETAILS':
      return state.filter((detail)=>(
        (detail.email === action.email)&&
      (detail.password ===action.password)
      )
      ); 
     

    default :
    return state;  
    
  
  
    }


}
export default Reducer;