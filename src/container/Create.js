import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import {ApiData} from '../constants/ApiData'

const Create = () => {
    const[data,setData]=useState('')
    const navigator = useNavigate();

    const postData=async()=>{
        // console.log(data)
        if(!data) return ''
        await axios.post(ApiData,{
            data
        })
        navigator('/read')
    }
    
    return (
        <div >
        <h1 className="center">Publish your passions, your way</h1>
        <h3 className="center">Create a unique and beautiful blog easily.</h3>
        <Form  >
            <Form.Field  >
          <input type="text" required maxLength="30" onChange={event=>setData(event.target.value)}  placeholder="What's on your mind?" />
         </Form.Field>
         <div className="center">
         <Button className="ui teal button center" onClick={postData} >Post your idea!</Button>
         </div>
        </Form>
      </div>
    )
}

export default Create;