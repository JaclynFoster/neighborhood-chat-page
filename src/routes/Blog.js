import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import '../components/Blog/Blog.css'
import Posts from '../components/Blog/Posts'
import axios from 'axios'
import AuthContext from '../context/auth-context'
// import { useNavigate } from 'react-router-dom'

const { REACT_APP_BACKEND_URL } = process.env;

const url = REACT_APP_BACKEND_URL || '';

const Blog = () => {
  // const navigate = useNavigate()
  // const [variableName, setVariablefunction] = useState(initial value)
  const [postList, setPostList] = useState([]) // pass in list
  const props = useContext(AuthContext)
  const [createPost, setCreatePost] = useState('')
  const [postCount, setPostCount] = useState('')
  const [postLikes, setPostLikes] = useState(0)

  const getPostsHandler = () => {
    axios
      .get(`${url}/getPosts`)
      .then(response => {
        setPostList(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log('error on get posts', error)
      })
  }

  const setPostHandler = () => {
    axios
      .post(`${url}/createPost`, {
        post: createPost,
        user_id: props.userObj.user_id
      })
      .then(response => {
        getPostsHandler()
        getPostCount()
        setCreatePost('')

        console.log(response.data)
      })
  }

  const getPostCount = () => {
    axios
      .get(`${url}/getPostCount`, {
        params: {
          user_id: props.userObj.user_id
        }
      })
      .then(response => {
        if (response.data && response.data.length > 0) {
          setPostCount(response.data[0].count)
          console.log('postCount:', postCount)
        }
        console.log(response.data)
      })
      .catch(error => {
        console.log('error on post count', error)
      })
  }

  useEffect(() => {
    getPostsHandler()
    getPostCount()
  }, [])

  return (
    <Layout>
      <div className="blog-parent">
        <div className="profile-card">
          <img className="profile-img" src={props.userObj.image_url} />
          <h2>
            {props.userObj.first_name} {props.userObj.last_name}
          </h2>
          <h3>{props.userObj.username}</h3>
          <h4>{props.userObj.email}</h4>
          <h4>Posts Created: {postCount}</h4>
          {/* <h4>Posts Liked: {postLikes}</h4> */}
        </div>
        <section className="blog-container">
          <div className="posting">
            <textarea
              value={createPost}
              onChange={e => {
                setCreatePost(e.target.value)
              }}
              className="blog-text"
              placeholder="  Type new post here..."
            />
            <button onClick={() => setPostHandler()} className="post-btn">
              Submit Post
            </button>
          </div>
          <div className="posts-container">
            <Posts postList={postList} getPostsHandler={getPostsHandler} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Blog




