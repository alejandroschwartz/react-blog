import React from 'react';

import '../styles/components/App.css';

const App = (props) => {
    const postList = props.posts.map((post) => 
        <li>{post.title}</li>
    );
    const post = props.posts.map((post) => 
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            <h1>Hola mundo</h1>
            <hr />
            {postList}
            <hr />
            {post}
        </div>
    )
}

export default App;