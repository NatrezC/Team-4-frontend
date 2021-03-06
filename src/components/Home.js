import React,{ useState, useEffect } from 'react'

import Posts from './Posts/Posts'
import UploadPost from './Forms/UploadPost'

import { getCurrentUser } from "../services/auth.service"

import { findAll } from '../services/post.service';

// renders posts and comments

import '../css/App.css'

const Home = () => {
  const currentUser = getCurrentUser()
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState(null);
  const [click, setClick] = useState(false)

  const updatePost = () => {
    setClick(!click)
  }

  useEffect(() => {
    findAll().then((res) => {
      setPosts(res.data)
      console.log(res.data)
    })
  }, [])

  const setPost = (id) => {
    setPostId()
  }
  
  return (
      <div>
          <h1 className="title">Welcome to Petflix</h1>
          <div className="gallery">
        <Posts setPostId={setPostId} posts={posts} updatePost={updatePost}/>
            <UploadPost postId={postId} setPost={setPost} />
          </div>
      </div>
  );
};

export default Home;
