import dayjs from 'dayjs';
import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingImage from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

    async function sendMessage() {
      if(isLoading || inputText === "") {
        return;
      }

      setInputText('');

      const newChatMessages = (
        [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
          }, {
            message: <img className='loading-img' src={LoadingImage} />,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

      setChatMessages(newChatMessages);

      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessages.slice(0, newChatMessages.length - 1),
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID(),
          time: dayjs().valueOf()
        }
      ]);

      setIsLoading(false);
    }

    function keyDown(event) {
      if(event.key === 'Enter') {
        sendMessage();

        setInputText('');
      }

      if(event.key === 'Escape') {
        setInputText('');
      }
    }

    function clearMessages() {
      setChatMessages([]);
    }

  return (
    <div className="chat-input-container">
      <input 
        onChange={saveInputText} 
        placeholder='Send message to  chatbot' 
        value={inputText}
        onKeyDown={keyDown}
        className="chat-input"
      />
      <button 
        onClick={sendMessage} 
        className="send-button"
      >Send</button>

      <button 
        onClick={clearMessages}
        className="clear-button"
      >Clear</button>
    </div>
  );
}