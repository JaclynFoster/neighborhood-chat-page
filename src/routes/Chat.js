import React from 'react'
import Layout from '../components/Layout/Layout'
import '../components/Chat/Chat.css'

const Chat = () => {
  return (
    <Layout>
      <div className="chat-container">
        <div className="friend-list">
          <h1 className="friend-title">My Friend's List:</h1>
        </div>
        <div className="chat">
          <div>Messages</div>
          <div className="text-creation">
            <textarea
              className="chat-textarea"
              placeholder="Type message here..."
            />
            <button className="chat-btn">Send</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Chat
