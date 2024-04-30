import React from 'react';

function Chat() {
  return (
    <div>
      <h1>Chat Page</h1>
      c:"\Users\cerem\OneDrive\Рабочий стол\IT\WEB developer\API ключ проєкту\sk-proj-6NBHZOGGoUIFUTQfrdzMT3BlbkFJvI2ap4Cmhk7FUm4InXvD.txt" 
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            model: 'text-davinci-003',
            prompt: 'Once upon a time',
            max_tokens: 50,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer c:\Users\cerem\OneDrive\Рабочий стол\IT\WEB developer\API ключ проєкту\sk-proj-6NBHZOGGoUIFUTQfrdzMT3BlbkFJvI2ap4Cmhk7FUm4InXvD.txt',
            },
          }
        );
        setResponse(result.data.choices[0].text);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Chat Page</h1>
      <p>Response from OpenAI API: {response}</p>
    </div>
  );
}

export default Chat;
