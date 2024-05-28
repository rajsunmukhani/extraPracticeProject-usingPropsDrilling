import React from 'react'

const Show = (props) => {

    const {data,setdata} = props;

    const deleteHandler = (index) =>{
        const copydata = [...data];
        copydata.splice(index,1);
        setdata(copydata);
        localStorage.setItem("data",JSON.stringify(copydata));
      }

  return (
    <div>
        {data.map((individual,index)=>{
        return (
          <div key={individual.id} className='card'>
            <h1>{individual.name}</h1>
            <h2>{individual.email}</h2>
            <h4>{individual.contact}</h4>
            <i onClick={() => deleteHandler(index)} className="ri-delete-bin-6-line"></i>
          </div>
        )
      })}
    </div>
  )
}

export default Show