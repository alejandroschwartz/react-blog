import React, { useState, useEffect } from 'react';

// let req = new XMLHttpRequest();
// req.onreadystatechange = () => {
//     if (req.readyState == XMLHttpRequest.DONE) {
//         const res = req.responseText;
//         const resj = JSON.parse(res);
//         console.log(resj.record.initialState);
//     }
// };
// req.open("GET", "https://api.jsonbin.io/v3/b/609206bb8a409667ca06b983", true);
// req.setRequestHeader("X-Master-Key", "$2b$10$aK8fNfLWeQGPrTGGKM1eMu45Zxt3Qt8S4Ox1jZsZDxmhxipwdcYlq");
// req.send();

const Home = () => {

    const [ characters, setCharacters ] = useState([]);
    useEffect(() => {
        fetch('https://api.jsonbin.io/v3/b/609206bb8a409667ca06b983', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2b$10$aK8fNfLWeQGPrTGGKM1eMu45Zxt3Qt8S4Ox1jZsZDxmhxipwdcYlq'
            }
        })
        .then(response => response.json())
        .then(data => setCharacters(data.record.initialState))
    }, []);
    console.log(characters);

    return(
        <div>
            <h1>Home</h1>
            {characters.map((item) =>
                <h2 key={item.id} >
                    {item.title} 
                </h2>
            )}
        </div>

    )
}

export default Home;