import React, {useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    //setTimeoutで１秒毎にカウントアップが下記
    //setTimeout(() => setCount(prevState => prevState + 1), 1000)
    setCount(prevState => prevState + 1)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  useEffect(()=>{
    console.log("Current count is...",count)
  },[])
  return (
    <div>
      <p>
        良いカウンター<br/>
        現在のカウント数: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default Counter;