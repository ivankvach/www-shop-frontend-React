import {AboutUs} from "./AboutUs";
import { HeadingComponents } from "./HeadingComponents";
import {useState, useEffect} from 'react';
import {Button} from "react-bootstrap";
 
export const BlogPage = () => {
     const Heading = "Chat";

     const [countClick, setCountClick] = useState(0)
     const [chat, setChat] = useState([])
     useEffect (() => {
        fetch("http://localhost:3000/chat")
        .then(res => res.json())
        .then(data => setChat(data)) 
     }, [countClick])
     
     const [chatValue, setChatValue] = useState("")
     const changeValueChat = (event) => {
        const eventChat = event.target.value
        setChatValue(eventChat);
        console.log(chatValue)
     }
     
     const sendMessageChat = () => {
        alert(chatValue)
        fetch("http://localhost:3000/chat", {
           method: "POST",
           headers: {
              "Content-Type": "application/json"
           },
           body: JSON.stringify({"message": chatValue, "author": localStorage.getItem("username"), "date": new Date}),
           credentials: "same-origin"
        })
        .then(res => res.json())
        .then(data => setCountClick(countClick + 1))
     }
     
     // const deleteMessage = (chatt) => {
     //    console.log(chatt)
     //    fetch("http://localhost:3000/chat/" + chatt._id, {
     //       method: "DELETE"
     //    })
     //    .then(res => res.json())
     //    .then(data => console.log(data))
     // }     

    return(
         <>
         <HeadingComponents heading={Heading}/>

         <div className="container">
               {chat.map((chatt) => 
               <div className="row">
                  <div className="col-12">
                     <h4>{chatt.author}</h4>
                     <a>{chatt.message}</a>
                     <h6>{chatt.date}</h6>
                     {/* <Button variant="primary" onClick={deleteMessage(chatt)}>X</Button> */}
                  </div>
               </div>
               )}
            </div>
            
            <div className="container">
            <div class="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text"><Button variant="primary" onClick={sendMessageChat}>Send message</Button></span>
  </div>
  <textarea 
         className="form-control" 
         aria-label="With textarea" 
         name="chat"
         placeholder="write..."
         value={chatValue} 
         onChange={changeValueChat}>
   </textarea>
</div>
</div>
         </>
     )
 }