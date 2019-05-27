import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts'); 
  console.log('response', response);   

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };

export const deletePost = (id) => async dispatch => {
  const response = await jsonPlaceholder.delete(`/posts/${id}`)
  dispatch( {
    type: 'DELETE_POST',
    id
  })
}