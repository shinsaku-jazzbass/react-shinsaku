import React, { useEffect, useState } from 'react';

const Fetch = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    // const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook']
    // const getRandomId = () => {
    //     const _id = ids[Math.floor(Mash.random() * ids.length)]
    //     setId(_id)
    // }
    useEffect(() => {
        fetch('https://api.github.com/users/google')
            .then(res => res.json())
            .then(data => {
                console.log(data)

                //
                setName(data.name)
                setId(data.id)
                setEmail(data.email)
            })
            .catch(error => {
                console.error(error)
            })
        //console.log("Current count is...",count)
    })
    return (
        <div>
            <p>
                {id}:{name}のメールアドレスは{email}
            </p>

        </div>
    );
};

export default Fetch