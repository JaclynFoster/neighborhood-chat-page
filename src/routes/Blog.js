import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import '../components/Blog/Blog.css'

const Blog = () => {

    useEffect(() => {
        // axios.get
        //then set your state
    }, [])
    return (
        <Layout>
            <div className="blog-parent">
                <div className="profile-card">
                    <img className="profile-img"/>
                    <h2>First Name Last Name</h2>
                    <h3>Username</h3>
                    <h4>Email</h4>
                    <h4>Posts Created:</h4>
                    <h4>Posts Liked:</h4>
                </div>
            <body className="blog-container">
                <div className="posting">
                <textarea className="blog-text" placeholder="  Type new post here..."></textarea>
                <button className="post-btn">Submit Post</button>
                </div>
                <div className="posts-container">

                </div>  
            </body>
            </div>
        </Layout>
    )
}

export default Blog