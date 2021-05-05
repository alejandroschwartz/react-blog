import React from 'react';
import PostList from '../components/PostList';

const Blog = (props) => {
    // console.log('blog', props);
    // const { blogPost } = props.posts;
    // console.log('blogPost', blogPost)

    return(
        <div>
            <h1>Soy un Blog</h1>
            <PostList posts={props.posts} />
        </div>
    )
}

export default Blog;