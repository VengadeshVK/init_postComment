import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ApiData, commentApiData } from "../constants/ApiData";
import {TextArea, Form, Button } from 'semantic-ui-react'


const PostComment = () => {
    const [newComment,setNewComment]=useState('');
    const [postId,setPostId]=useState()
    const [commentsList,setCommentList] = useState([])
    const navigator = useNavigate();
    const param = useParams();
    const[dbComment,setDbComment] = useState([])

    const createComment=async()=>{
    
       if(!newComment) return ''
        // setPostId(localStorage.getItem('id'))
        setCommentList([...dbComment,newComment])
        console.log("new comment",commentsList,dbComment)
        axios.put(ApiData+postId,{
            // await axios.post(ApiData,{
                commentsList
            })
        console.log("postId",postId)
        navigator('/read')
    }
    // useEffect(()=>{
    //      axios.put(ApiData+postId,{
    //         // await axios.post(ApiData,{
    //             commentsList
    //         })
    //         console.log("Effect :",commentsList,dbComment)
    // },[commentsList])
    useEffect(()=>{
        setPostId(localStorage.getItem('id'))
    },[])

    const showComments = async () => {
        await axios.get(ApiData+1).then((response) => {
          console.log("Comment id in display comment:",ApiData+1)
          setDbComment([...dbComment, response.data])
        // localStorage.setItem('id',id)
          console.log("In postComment-dbComment",dbComment)
        })
        setPostId(localStorage.getItem('id'))
        console.log("postId",postId)
      }
      useEffect(() => {
        showComments()
        setPostId(localStorage.getItem('id'))
      }, []);

    return(
        <>
        <h2 className="center ">Comment your thought!</h2>
        <Form className="form">
            <Form.Field>
          <input type="text" required maxLength="20" onChange={(e)=>setNewComment(e.target.value)} rows={2} placeholder='Comment here...' />
         </Form.Field>
         <div className="center">
            <Button onClick={showComments}>show</Button>
         <Button className="ui teal button"  onClick={createComment} >Comment</Button>
         </div>
        </Form>
        </>
    )
}

export default PostComment;

  
    //  function setNewComment1 (value){
        
    //     setNewComment([...newComment,value]);
 
    //    console.log(newComment);
    //  }