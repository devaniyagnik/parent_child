import React from 'react'

const Child3 = (props) => {
    
  return (<>
    <h1>Child3</h1>
        <p style={{color:"red"}}>Data get from Child2</p>
        <label htmlFor="name">Name : {props.data.name}</label><br />
        <label htmlFor="email">Data : {props.data.email}</label><br />
        <label htmlFor="number">Number : {props.data.number}</label>
    </>
  )
}

export default Child3