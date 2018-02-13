const initialState = {
  fetching : false,
  fetched: false,
  images : [],
  errorMessage:""

}


export function carousel (state = initialState, action){
  switch(action.type){
    case "GET_IMAGE_PENDING":
    return {
      ...state,
      fetching: true
    }
    case "GET_IMAGE_FULFILLED":
    return{
      ...state,
      fetching: false,
      fetched: true,
      images: action.payload.response.data
    }
    case "GET_IMAGE_REJECTED":
    return {
      ...state,
      fetching: false,
      // errorMessage : action.payload.reponse.data.message
    }
    default:
    return state
  }


}
