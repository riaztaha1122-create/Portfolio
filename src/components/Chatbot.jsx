import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hi there! 👋 I'm Taha Riaz's AI assistant. I can tell you all about his skills, projects, and experience as a Professional Developer. How can I help you today?" }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputVal.trim()) return;
    
    const userMsg = inputVal.trim();
    setInputVal('');
    
    // Convert 'bot' to 'assistant' for OpenAI schema
    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      // Map local state representation to OpenAI's expected history
      const historyToApi = newMessages.map(m => ({ 
        role: m.role === 'bot' ? 'assistant' : m.role, 
        content: m.content 
      })).filter(m => m.content !== "Hi there! 👋 I'm Taha Riaz's AI assistant. I can tell you all about his skills, projects, and experience as a Professional Developer. How can I help you today?");
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyToApi })
      });
      
      const data = await response.json();
      setIsTyping(false);
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'bot', content: data.reply.content }]);
      } else {
        setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I'm having trouble connecting right now." }]);
      }
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', content: "Error: Cannot connect to the server." }]);
      console.error(error);
    }
  };

  return (
    <div className="taha-chatbot-container">
      {/* Chat Window */}
      <div className={`taha-chatbot-window ${isOpen ? 'open' : 'hidden'}`}>
        <div className="chat-header">
          <div className="header-profile">
            <div className="avatar"><Bot size={20} /></div>
            <div className="header-info">
              <h3>Taha's Assistant</h3>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span className="status-indicator"></span>
                <span className="status-text">Online</span>
              </div>
            </div>
          </div>
          <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <div className="msg-content">{msg.content}</div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="msg-content">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder="Ask about Taha's skills..." 
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            autoComplete="off"
          />
          <button className="chat-send-btn" onClick={handleSend}>
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        className="chatbot-fab" 
        onClick={() => setIsOpen(true)}
        style={{ transform: !isOpen ? 'scale(1)' : 'scale(0)' }}
      >
        <MessageCircle size={28} color="white" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Chatbot;
