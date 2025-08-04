import {Box, Typography, styled} from '@mui/material';
import Footer from './Footer';
import Message from './Message';
import { useContext ,useState,useEffect} from 'react';
import {AccountContext} from '../../../context/AccountProvider'
import { newMessage ,getMessages} from '../../../service/api';




const Wrapper=styled(Box)`
    background-image : url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
    `;

const Componenet =styled(Box)`
    height:80vh;
    overflow-y:scroll;
`
const Container =styled(Box)`
    padding: 1px 80px;
`


const Messages =({person, conversation}) =>{
     const [value, setValue]= useState('');

     const [messages, setMessages]= useState([]);
     const [newMessageFlag, setNewMessageFlag] =useState(false);
     const {account} =useContext(AccountContext);
     const [file, setFile]= useState();
     const [image,setImage]=useState('');

     useEffect(()=>{
        const getMessageDetails =async ()=>{
            let data =await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
     },[person._id,conversation._id, newMessageFlag])

      const sendText = async (e) => {
   const code= e.keyCode || e.which;
   if(code===13){
    let message= {};
    if(!file){
    message = {
    senderId: account.sub,
    recieverId: person.sub,
    conversationId: conversation._id,
    type: 'text',
    text: value
  };
    }else{
    message = {
    senderId: account.sub,
    recieverId: person.sub,
    conversationId: conversation._id,
    type: 'file',
    text: image
    }
   }
  
  console.log(message)
 
  await newMessage(message);
  setValue('');
  setFile('');
  setImage('');
  setNewMessageFlag(prev=> !prev)
}};



    return(
        <Wrapper>
            <Componenet>
                {
                    messages && messages.map(message =>(
                          <Container>
                            <Message  message={message}/>
                          </Container>
                    ))
                }
            </Componenet>
            <Footer 
              sendText={sendText}
              setValue={setValue}
              value={value}
              file={file}
              setFile={setFile}
              setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;