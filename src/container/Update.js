import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ApiData } from "../constants/ApiData";
import {TextArea, Form, Button } from 'semantic-ui-react'


const Update = () => {
    const[data,setData]=useState('')
    const[id,setId]=useState('')
    const navigator = useNavigate();

    const updateData=async()=>{
        await axios.put(ApiData+id,{
            data
        })
        console.log("update data",id,data)
        navigator('/read')
    }
    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setData(localStorage.getItem('data'))
    },[])
    return (
        <>
        <h2 className="center">Update your post here</h2>
        <Form className="form">
            <Form.Field>
          <TextArea value={data} onChange={event=>setData(event.target.value)} rows={2} placeholder='Tell us more' />
         </Form.Field>
         <div className="center">
         <Button className="ui teal button " onClick={updateData} >Update</Button>
         </div>
        </Form>
        </>
    )
}

export default Update;