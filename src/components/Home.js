import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/PostActions'; 

class Home extends Component {

  componentDidMount() {    
    this.props.fetchPosts();
  }

  render() {    
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (          
            <div className="item" key={post.id}>
              <i className="large middle aligned icon user" />             
                <div className="content">
                  <div className="description">
                    <Link to={'/' + post.id}>
                    <h2>{post.title}</h2>
                    </Link>
                    <p>{post.body}</p>
                  </div>
                </div>
            </div>              
          )
        })
      ) : (
        <div className="row">
          <div className="column">No posts yet</div>
        </div>
      )
    return (
      <div className="ui container">
        <h2 className="ui center aligned header">Home</h2>
        <div className=" ui relaxed divided list">
          {postList}
        </div>
      </div>      
    )
  }  
}

const mapStateToProps = (state) => {
   
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts } )(Home);