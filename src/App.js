import "./App.css"
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./container/Create";
import Update from "./container/Update";
import Read from "./container/Read";
import { Button } from "semantic-ui-react";
import PostComment from "./container/PostComment";

const App = () => {

    return (
        <div className="App ">
            <div className="ui inverted segment">
                <div className="ui inverted secondary menu">
                    <div className="item">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/284/047/small/vk-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg" alt="/" />
                    </div>
                    <a href="/" className="item">NewPost</a>
                    <a href="/read" className="item">Feed</a>
                </div>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Create />} />
                    <Route path='/read' element={<Read />} />
                    <Route path='/update' element={<Update />} />
                    <Route path='/comments/:id' element={<PostComment />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;