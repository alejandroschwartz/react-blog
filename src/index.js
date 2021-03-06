import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';

const posts = [
    {id: 1, title: 'React', content: 'Welcome to learning React!'},
    {id: 2, title: 'Babel', content: 'You can install Babel from npm.'},
    {id: 3, title: 'Eslint', content: 'You can install Eslint from npm.'},
    {id: 4, title: 'Webpack', content: 'You can install Webpack from npm.'}
];

ReactDOM.render(
    <App posts={posts} />, 
    document.getElementById('app')
);