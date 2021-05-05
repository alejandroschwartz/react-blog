import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Blog from '../containers/Blog';
import Post from '../containers/Post';

const App = (props) => {
    // console.log('app', props.posts)
    // const posts = props.posts;

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Home posts={props.posts} />
                </Route>
                <Route exact path="/blog">
                    <Blog posts={props.posts} />
                </Route> 
                <Route exact path="/blog/:id" component={Post} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;