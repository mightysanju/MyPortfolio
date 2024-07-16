import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import avator from '../assets/img/avator.png';
import axios from 'axios';


export const Chat = () => {

// Create a functional component to fetch the answer from the Flask API
const FetchAnswer = ({ steps, previousStep, triggerNextStep, ...props }) => {
    const query = previousStep.value;
    const [responseMessage, setResponseMessage] = useState('Processing...');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:5000/api/query', { query });
          setResponseMessage(response.data.answer);
        } catch (error) {
          setResponseMessage('Sorry, something went wrong.');
        }
      };
  
      fetchData();
    }, [query]);
  
    // Return the response message
    return <div>{responseMessage}</div>;
  };
  

    const steps = [
        {
            id: '0',
            message: 'Hey there! What is your name?',
            trigger: '1'
        },
        {
            id: '1',
            user: true,
            trigger: '2'
        },
        {
            id: '2',
            message: 'Hi {previousValue}, nice to meet you! How can I assist you today?',
            trigger: 'query'
        },
        {
          id: 'query',
          user: true,
          trigger: 'fetchAnswer',
        },
        {
            id: 'fetchAnswer',
            component: <FetchAnswer />,
            asMessage: true,
            waitAction: true,  // Ensure it waits for the FetchAnswer component to finish
        },
        {
            id: 'answer',
            message: '{ previousValue }',
            trigger: 'query',
        },
    ];



    // Creating our own theme
    const theme = {
        background: '#C9FF8F',
        headerBgColor: '#197B22',
        headerFontSize: '20px',
        botBubbleColor: '#0F3789',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FF5733',
        userFontColor: 'white',
    };

    // Set some properties of the bot
    const config = {
        botAvatar: avator,
        floating: true,
    };

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Ask about Sanju"
                steps={steps}
                {...config}
            />
        </ThemeProvider>
    );
};
