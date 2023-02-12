import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ApiData, commentApiData } from "../constants/ApiData";
import {TextArea, Form, Button } from 'semantic-ui-react'


const PostComment2 = () => {
    const navigator = useNavigate();
     const[newComment,setNewComment]=useState([]);
     const[localId,setLocalId] = useState();
     const commentApi='/comment'

    const createComment=async()=>{
        await axios.post(commentApiData+localId+commentApi,{
            newComment
        })
        navigator('/read')
    }
    useEffect(()=>{
        setLocalId(localStorage.getItem('id'))
    },[])

    return(
        <>
        <h2 className="center ">Comment your thought!!!</h2>
        <Form className="form">
            <Form.Field>
          <input type="text" required maxLength="20" onChange={(e)=>setNewComment(e.target.value)} rows={2} placeholder='Comment here...' />
         </Form.Field>
         <div className="center">
         <Button className="ui teal button"  onClick={createComment} >Comment</Button>
         </div>
        </Form>
        </>
    )
}

export default PostComment2;

