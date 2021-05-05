import { useState, useEffect } from 'react';

const useInitialState = (API) => {

    const [ posts, setPosts ] = useState();
    
    useEffect(() => {
          fetch(API)
            .then(res => res.json())
            .then(data => { setPosts(data);
            });
        },
        []
    );

    return posts;
};

export default useInitialState;