import React from 'react'
import "../App.css";
const Blog = () => {
  return (
    <div className='main-div'>
      <div className='cards'>
        <h2>Nature</h2>
        <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="nature" />
      </div>
      <div className='cards'>
        <h2>Wildlife</h2>
        <img src="https://images.pexels.com/photos/3280908/pexels-photo-3280908.jpeg?auto=compress&cs=tinysrgb&w=600" alt="wildlife" />
      </div>
    </div>
  )
}

export default Blog