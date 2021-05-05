import React from 'react';

import useInitialState from '../hooks/useInitialState';

const Post = (props) => {
    console.log(props.match.params)
    // console.log(props)
    const post = props.post;
    console.log(post)

    return(
        <h1>Soy un Post</h1>
    )
}

export default Post;