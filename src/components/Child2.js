import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
  return (
    <>
        <h1>Child 2</h1>
        <p style={{color:"red"}}>Data get from parent</p>
        <label htmlFor="name">Name : {props.data.name}</label><br />
        <label htmlFor="email">Data : {props.data.email}</label><br />
        <label htmlFor="number">Number : {props.data.number}</label>
        <Child3 data={props.data}/>
    </>
  )
}

export default Child2