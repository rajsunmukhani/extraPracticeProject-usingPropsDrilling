import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const Create = (props) => {

    const [name,setname] = useState("")
    const [email,setemail] = useState("");
    const [contact,setcontact] = useState("");

    const {data,setdata} = props;

    const submitHandler = (e)=>{
        e.preventDefault();
        const person = {name,email,contact,id:nanoid()}
        const copydata = [...data,person];
        setdata(copydata);
        localStorage.setItem("data",JSON.stringify(copydata));
        setname("")
        setemail("")
        setcontact("")
    };

  return (
    <form onSubmit={submitHandler}>

        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='Enter Name' />
        <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Enter Email' />
        <input value={contact} onChange={(e)=>setcontact(e.target.value)} type="tel" placeholder='Enter Contact Number' />
        <input type="submit" value="Submit" />

    </form>
  )
}

export default Create