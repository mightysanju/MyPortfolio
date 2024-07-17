import React, { useState, useEffect, useRef } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import avator from '../assets/img/avator.svg';
import axios from 'axios';
import { Transparency } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;

  @media (max-width: 768px) {
    height: calc(100vh - 50px); /* Adjust for mobile keyboard */
    padding: 5px;
  }
`;

const ChatWrapper = styled.div`
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Create a functional component to fetch the answer from the Flask API
const FetchAnswer = ({ steps, previousStep, triggerNextStep, ...props }) => {
    const query = previousStep.value;
    const [responseMessage, setResponseMessage] = useState('Processing...');
    const timerId = useRef(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('https://flaskragbot-1e1040a057f8.herokuapp.com/api/query', { query });
          setResponseMessage(response.data.answer);
        } catch (error) {
          setResponseMessage('Sorry, something went wrong.');
        }
      };

      if (query && query.trim() !== '') {
        if (timerId.current) {
          clearTimeout(timerId.current);
        }

        timerId.current = setTimeout(fetchData, 1000); // delay of 1 second
      }

    }, [query]);

    useEffect(() => {
      if (responseMessage !== 'Processing...') {
        triggerNextStep({ value: responseMessage, trigger: '3' });
      }
    }, [responseMessage]);

    // Return the response message
    return <div>{responseMessage}</div>;
};


// ... rest of your code


export const Chat = () => {




    const step = [
        {
            id: '0',
            message: 'Hello, it’s a pleasure to connect with you. How can I assist you today? Feel free to ask anything about me.',
            trigger: '3'
        },
        {
            id: '1',
            user: true,
            trigger: '2',
        },
        {
            id: '2',
            message: 'Hi {previousValue}, What do you want to ask about me?',
            trigger: '3'
        },
        {
          id: '3',
          user: true,
          trigger: '4'
        },
        {
            id: '4',
            component: <FetchAnswer />,
            asMessage: true,
            waitAction: true,  // Ensure it waits for the FetchAnswer component to finish
            //trigger: '3'
        },
    ];

    
    // Creating our own theme
    const theme = {
        background: 'rgba(0,0,0, 0.8)',
        headerBgColor:'linear-gradient(45.21deg, rgba(170, 54, 124, 0.8) -5.91%, rgba(74, 47, 189, 0.8) 111.58%)',
        headerFontSize: '25px',
        botBubbleColor:'rgba(74, 47, 189,2)',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: 'rgba(170, 54, 124, 2)',
        userFontColor: 'white',
    };
    

    // Set some properties of the bot
    const config = {
        botAvatar: avator,
        floating: true,
    };

    return (
      <ChatContainer>
        <ChatWrapper>
          <ThemeProvider theme={theme} >
              <ChatBot
                  headerTitle="Ask Sanju  💬 "
                  placeholder= 'Type to ask sanju . . .'
                  steps={step}
                  {...config}
              />
          </ThemeProvider>
        </ChatWrapper>
      </ChatContainer>
    );
};
