import React, { useEffect, useState } from 'react';
//import React from 'react';

const FetchData = () => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => alert("error"));
    }, []);

    console.log(data);
    return (
        
        <div>
            <p>FetchData</p>
            {!data || data.length === 0 ? (
                <div>Loading</div>
            ) : (
                <div>{data[0].title}</div>
            )}

        </div>
    )
}

export default FetchData
