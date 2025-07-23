import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useContext, useEffect,useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  const [conversation, setConversation]= useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      try {
        const response = await getConversation({
          senderId: account?.sub,
          recieverId: person?.sub
        });
        setConversation(response);
        if (!response) {
          console.warn("No conversation found");
        } else {
          console.log("Conversation:", response);
        }
      } catch (error) {
        console.error("Error fetching conversation:", error);
      }
    };

    if (person?.sub) {
      getConversationDetails();
    }
  }, [person?.sub]);

  return (
    <Box sx={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation}/>
    </Box>
  );
};

export default ChatBox;
