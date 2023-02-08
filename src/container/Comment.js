import React, { useEffect, useState } from 'react'
import { Form,  Button, Card } from 'semantic-ui-react'
import "../App.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { commentApiData,ApiData } from '../constants/ApiData';
import PostComment from './PostComment';


const Comment = ({ id, data, updateData, deleteData }) => {
  const [showComment, setShowComment] = useState(false)
  const [commentId,setCommentId] = useState()
  const[listOfCommments,setListOfComments]=useState([])
  const navigator = useNavigate();

  const displayComment = async () => {
    await axios.get(ApiData+id).then((response) => {
      // console.log("Comment id in display comment:",ApiData,id)
      // setListOfComments([...listOfCommments, response.data])
      setListOfComments([response.data])
      localStorage.setItem('id',id)
      console.log("In displayComment-listOfComments",listOfCommments)
    })
  }
  useEffect(() => {
    displayComment()
    setCommentId(localStorage.getItem('id'))
  }, []);

  const toggleComment=()=>{
    setShowComment(!showComment)
  }

  const deleteComment=async(id)=>{
    await axios.delete(ApiData+id);
    console.log("delete commentApiData",id)
    displayComment();
}
const addComment = (id) => {
  navigator(`/comments/${id}`);
  // navigator('/comments');
  localStorage.setItem('id',id)
  console.log("comment Id :",id)
}

  return (
    <div>
      <Card fluid key={id} >
        <Card.Content  className='card' >
          <Card.Header className='commentText' >{data}</Card.Header><br/>
          
          <Button className="ui green button tiny" onClick={() => updateData(id, data)} >Edit</Button>
          <Button className="ui olive button tiny"  onClick={() => deleteData(id)} >Delete</Button>
          <Button className="ui blue button tiny" onClick={() => {addComment(id);displayComment(id) }} >Add Comment</Button>
          <Button className="ui teal button tiny" onClick={() => {displayComment(id);toggleComment()}}>Comments</Button> 
         <br /><br />
          {showComment ?
            <Card.Group className="AlignCenter">
              {listOfCommments.map(index => (
                <Card fluid key={id}  >
                  <Card.Content >
                    <Card.Header className='commentText' >{index.newComment}</Card.Header><br/>
                    <Button className='ui grey button tiny' onClick={() => deleteComment(index.id)} >Delete</Button>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
            : ''}
        </Card.Content>
      </Card>

    </div>
  )
}

export default Comment;