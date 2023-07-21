import React, { useState } from "react";

const Child1 = ({data,updatedata}) => {
    const [formdata,setFormData] = useState(data);
    
    const inputhandler = (e) =>{
        setFormData({...formdata,[e.target.name]: e.target.value});
    }
    const SubmitForm = (e) =>{
        e.preventDefault();
        updatedata(formdata);
    }
  return (
    <>
      <h1>Child1 </h1>
      <p style={{color:"red"}}>Data get from parent And Send Data at parent for update</p>
      <form onSubmit={SubmitForm}>
        <div>
          <label htmlFor="Name">Name : </label>
          <input type="text" name="name" value={formdata.name} onChange={inputhandler}/>
        </div>
        <div>
          <label htmlFor="Email">Email : </label>
          <input type="text" name="email" value={formdata.email}  onChange={inputhandler}/>
        </div>
        <div>
          <label htmlFor="Number" >Number : </label>
          <input type="text" name="number" value={formdata.number}  onChange={inputhandler}/>
        </div>
        <div>
          <button type="submit ">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Child1;
