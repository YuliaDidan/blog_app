const initState = {
  posts: [],
}

const rootReducer = (state = initState, action) => {
  // console.log('action.payload', action.payload) 
  switch (action.type) {
    case 'FETCH_POSTS': 
    // console.log('action.payload', action.payload)
     return  {...state, posts: action.payload};
     case 'DELETE_POST':
      let newPosts = state.posts.filter(post => {      
        return action.id !== post.id
      });    
        return {...state, posts: newPosts}
    default:
     return state; 
  }  
  // if(action.type === 'DELETE_POST') {
  //   let newPosts = state.posts.filter(post => {      
  //     return action.id !== post.id
  //   });    
  //   return {...state, posts: newPosts}
  // }
  // return state;
}

export default rootReducer;