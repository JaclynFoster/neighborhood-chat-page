import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import '../components/Blog/Blog.css'
import Posts from '../components/Blog/Posts'
import axios from 'axios'

const { REACT_APP_BACKEND_URL } = process.env

const Blog = () => {
  // const [variableName, setVariablefunction] = useState(initial value)
  const [postList, setPostList] = useState([]) // pass in list


  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/getPosts`)
      .then(response => {
        setPostList([...response.data])
        console.log(response.data)
      })
      .catch(error => {
        console.log('error on get posts', error)
      })
  }, [])

  return (
    <Layout>
      <div className="blog-parent">
        <div className="profile-card">
          <img className="profile-img" />
          <h2>First Name Last Name</h2>
          <h3>Username</h3>
          <h4>Email</h4>
          <h4>Posts Created:</h4>
          <h4>Posts Liked:</h4>
        </div>
        <section className="blog-container">
          <div className="posting">
            <textarea
              className="blog-text"
              placeholder="  Type new post here..."
            />
            <button className="post-btn">Submit Post</button>
          </div>
          <div className="posts-container">
            <Posts postList={postList} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Blog
