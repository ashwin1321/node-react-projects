import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'



const Feed = () => {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post
        profilePic= "https://media-exp1.licdn.com/dms/image/C4E35AQEuJBn2CyRILw/profile-framedphoto-shrink_800_800/0/1604847215861?e=1664589600&v=beta&t=6K5klMDIEZT5fQ6YqodR-jPday2mqsE2VUn9o15aVZI"
        message= "yoo this is a message"
        timestamp= "1654541414968"
        imgName = 'dsg'
        username = "Rabindra "
        />
      
      {/* {
        postsData.map(entry => (
          <Post
            profilePic={entry.avatar}
            message={entry.text}
            timestamp={entry.timestamp}
            username={entry.usern}
            imgName={entry.imgName}
          />
        ))
      } */}
    </div>
  )
}

export default Feed
