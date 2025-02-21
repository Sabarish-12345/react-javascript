import {useState} from 'react'

const Content = () => {
    const [color,setcolor]=useState('');
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        setCount((c)=>c+1);
        setCount((c)=>{
            return c+1
        })
    }
  return (
    <div style={{
        backgroundColor:color,
    }}>
        <h3> You {count} times Clicked  </h3>
        <button onClick={handleClick}>Click Here</button>
        <br></br>
        <input type="text"
        placeholder='Enter Color Name'
        onChange={(e)=> {
            setcolor(e.target.value);
            console.log(e.target.value);
        }} />      
    </div>
  )
}

export default Content
