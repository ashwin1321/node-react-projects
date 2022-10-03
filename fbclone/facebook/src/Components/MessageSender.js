import React, { useState } from 'react'
import { Avatar, Input } from '@material-ui/core'
import "./MessageSender.css"
import  PhotoLibraryIcon  from '@material-ui/icons/PhotoLibrary';
import  VideocamIcon  from '@material-ui/icons/Videocam';
import  InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')

    const handleChange = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (e)=>{
        console.log("hehe bwoi");
    }
  return (
    <div className = "messageSender">
        <div className="messsageSender__top">
            <Avatar src = "https://images.unsplash.com/photo-1663711905018-527724559da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />

        <form>
            <input type="text"
             className="messageSender__input"
              placeholder= "What's on your mind?"
               value = {input}
                onChange={(e)=> setInput(e.target.value)} />
            <Input type= "file"
             className='messageSender__fileSelector' 
             onChange={handleChange} />
            <button type="submit"
             onClick={handleSubmit}>Hidden Submit</button>
        </form>
        </div>

        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamIcon style={{color: "red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color: "green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color: "orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>

    </div>
  )
}

export default MessageSender
