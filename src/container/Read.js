import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {  Card } from 'semantic-ui-react'
import { ApiData,commentApiData } from "../constants/ApiData";
import Comment from "./Comment";

const Read = () => {
    const [apiData, setApiData] = useState([]);
    const navigator = useNavigate();

    const updateData=(id,data)=>{
        localStorage.setItem('id',id)
        localStorage.setItem('data',data)
        console.log("update data",id)
        navigator('/update');
    }

    const deleteData=async(id)=>{
        
        
        await axios.delete(ApiData+id); 
        console.log("delete data",id)
        callGetApi();
        await axios.delete(commentApiData+3+'/comment/');
        console.log("commentApiData+id+'/comment'",commentApiData+id+'/comment')
    }

    const callGetApi = async () => {
        await axios.get(ApiData).then((response) => {
            setApiData(response.data)
            console.log("response.data",response.data)
        })
        
        
    }
    useEffect(() => {
        callGetApi()
    }, []);
 
    return (
        <>
            <Card.Group  className="AlignCenter">
                {apiData.map(index => (
                    <Comment  id={index.id} data={index.data} 
                    updateData={updateData} deleteData={deleteData} />))}
            </Card.Group>
        </>
    )
}

export default Read;