import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import avator from '../assets/img/avator.png';

const steps = [
    {
        id: '0',
        message: 'Hey Recruiter! What is your name?',
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
        trigger: '3'
    },
    {
        id: '3',
        user: true,
        trigger: '4'
    },
    {
        id: '4',
        message: 'You said: {previousValue}. Let me think...',
        end: true
    }
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

export const Chat = () => (
    //<ThemeProvider theme={theme}>
        <ChatBot
            headerTitle="Ask about SANJU"
            steps={steps}
            {...config}
        />
    //</ThemeProvider>
);

