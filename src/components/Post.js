import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/PostActions'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  
  render(){   
      const post = this.props.post ? (
      <div className="item">                       
          <div className="content">
            <div className="description">                
              <h2>{this.props.post.title}</h2>                
              <p>{this.props.post.body}</p>
              <div className="content">
                <button className="ui red basic button" onClick={this.handleClick}>Delete Post</button>
              </div>
            </div>
          </div>
        </div> 
    ) : (
      <div className="row">
        <div className="column">Loading Post</div>
      </div>
    )
    return (
      <div className="ui container">
        <h4>{ post }</h4>
      </div>
    )
  } 
}

const mapStateToProps = (state, ownProps) => {   
  let id = ownProps.match.params.post_id; 
  let post = state.posts.find(elem => elem.id === +id);
  console.log('post', post) 
  return {
    post: post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);