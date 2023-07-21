import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [data,setdata] = useState({name:"yagnik",number:"12345",email:"yagnik@gmail.com"});

    const updatedata = (childdata)=>{
        setdata(childdata)
    }
  return (
    <>
        <h1>Parent Component Data</h1>
        <p style={{color:"red"}}>Updata data and send data at child1 & child2</p>
        <p> name : {data.name}<br />number:{data.number}<br />email:{data.email}</p>
        <Child1 data={data} updatedata={updatedata}/>
        <Child2 data={data}/>
    </>
  )
}

export default Parent