import React from 'react';

import '../styles/components/App.css';

const PostList = (props) => {
    const postList = props.posts.map((post) => 
        <li key={post.id} >{post.title}</li>
    );
    const post = props.posts.map((post) => 
        <div key={post.id} >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    console.log(props)

    return (
        <div>
            <hr />

            {postList}
            
            <hr />
            
            {post}
        </div>
    )
}

export default PostList;