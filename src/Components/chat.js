// import React, { useEffect, useRef } from 'react';
// import '../chat.css'; 

// const Chat = ({ messages }) => {
//   const chatContainerRef = useRef(null);
//   console.log(messages)
//   useEffect(() => {

//     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div className="chat card-body p-0" ref={chatContainerRef}>
//       <div className="direct-chat-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}
//           >
//             <div className="direct-chat-infos clearfix">
//               <span className="direct-chat-name float-left">
//                 {msg.role === 'user' ? 'You' : 'Bot'}
//               </span>
//               <span className="direct-chat-timestamp float-right">
//                 {new Date().toLocaleString()}
//               </span>
//             </div>
//             <div className="direct-chat-text">{msg.content}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chat;


// import React, { useRef, useEffect } from 'react';
// import Table from './Table';

// const Chat = ({ messages }) => {
//   const chatContainerRef = useRef(null);
//   console.log(messages)
//   useEffect(() => {
//     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div className="chat card-body p-0" ref={chatContainerRef}>
//       <div className="direct-chat-messages">
//         {messages.map((msg, index) => (
//           <div key={index} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//             <div className="direct-chat-infos clearfix">
//               <span className="direct-chat-name float-left">
//                 {msg.role === 'user' ? 'You' : 'Bot'}
//               </span>
//               <span className="direct-chat-timestamp float-right">
//                 {new Date().toLocaleString()}
//               </span>
//             </div>
//             {Array.isArray(msg.content.Normal) ? (
//               <Table data={msg.content} /> 
//             ) : (
//               <div className="direct-chat-text">{msg.content}</div> 
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chat;


// import React, { useRef, useEffect } from 'react';

// const Chat = ({ messages }) => {
//   const chatContainerRef = useRef(null);
  
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   // Normalize messages to always be an array
//   const normalizedMessages = Array.isArray(messages) ? messages : [messages];

//   return (
//     <div className="chat card-body p-0" ref={chatContainerRef}>
//       <div className="direct-chat-messages">
//         {normalizedMessages.map((msg, index) => (
//           <div key={index} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//             <div className="direct-chat-infos clearfix">
//               <span className="direct-chat-name float-left">
//                 {msg.role === 'user' ? 'You' : 'Bot'}
//               </span>
//               <span className="direct-chat-timestamp float-right">
//                 {new Date().toLocaleString()}
//               </span>
//             </div>
//             {msg.role === 'assistant' && msg.content && Array.isArray(msg.content) ? (
//               <div className="direct-chat-text">
//                 {msg.content.map((item, idx) => (
//                   <div key={idx}>{JSON.stringify(item)}</div>
//                 ))}
//               </div>
//             ) : (
//               <div className="direct-chat-text">{msg.content}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chat;



// import React, { useRef, useEffect, useState } from 'react';

// const Chat = ({ messages }) => {
//   // Initialize chatHistory with an empty array
//   const [chatHistory, setChatHistory] = useState([]);

//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     // Check if messages is an array or an object
//     if (Array.isArray(messages)) {
//       // Update chat history when new messages are received
//       setChatHistory(prevHistory => [...prevHistory, ...messages]);
//     } else if (typeof messages === 'object' && messages !== null) {
//       // If messages is not an array, treat it as a single message
//       setChatHistory(prevHistory => [...prevHistory, messages]);
//     }
//   }, [messages]);
  
  
  

//   return (
//     <div className="chat card-body p-0" ref={chatContainerRef}>
//       <div className="direct-chat-messages">
//         {chatHistory.map((msg, index) => (
//           <div key={index} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//             <div className="direct-chat-infos clearfix">
//               <span className="direct-chat-name float-left">
//                 {msg.role === 'user' ? 'You' : 'Bot'}
//               </span>
//               <span className="direct-chat-timestamp float-right">
//                 {new Date().toLocaleString()}
//               </span>
//             </div>
//             {msg.role === 'assistant' && msg.content && Array.isArray(msg.content) ? (
//               <div className="direct-chat-text">
//                 {msg.content.map((item, idx) => (
//                   <div key={idx}>{JSON.stringify(item)}</div>
//                 ))}
//               </div>
//             ) : (
//               <div className="direct-chat-text">{msg.content}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chat;


// import React, { useRef, useEffect, useState } from 'react';

// const Chat = ({ messages }) => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (Array.isArray(messages)) {
//       setChatHistory(prevHistory => [...prevHistory, ...messages]);
//     } else if (messages && typeof messages === 'object') {
//       setChatHistory(prevHistory => [...prevHistory, messages]);
//     }
//   }, [messages]);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="chat card-body p-0" ref={chatContainerRef} style={{ height: '85vh' }}>
//       <div className="direct-chat-messages">
//         {chatHistory.map((msg, index) => (
//           <div key={index} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//             <div className="direct-chat-infos clearfix">
//               <span className="direct-chat-name float-left">
//                 {msg.role === 'user' ? 'You' : 'Bot'}
//               </span>
//               <span className="direct-chat-timestamp float-right">
//                 {new Date().toLocaleString()}
//               </span>
//             </div>
//             {msg.role === 'assistant' && msg.content && Array.isArray(msg.content) ? (
//               <div className="direct-chat-text">
//                 {msg.content.map((item, idx) => (
//                   <div key={idx}>{JSON.stringify(item)}</div>
//                 ))}
//               </div>
//             ) : (
//               <div className="direct-chat-text">{msg.content}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chat;


// import React, { useRef, useEffect, useState } from 'react';
// import '../chat.css'; // Import the CSS file

// const Chat = ({ messages }) => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const chatContainerRef = useRef(null);
//   const lastMessageRef = useRef(null); // Reference to the last message

//   useEffect(() => {
//     if (Array.isArray(messages)) {
//       setChatHistory(prevHistory => [...prevHistory, ...messages]);
//     } else if (messages && typeof messages === 'object') {
//       setChatHistory(prevHistory => [...prevHistory, messages]);
//     }
//   }, [messages]);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if (lastMessageRef.current) {
//       lastMessageRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the last message
//     }
//   }, [chatHistory]);

//   return (
//     <div className="chat-container card-body p-0" ref={chatContainerRef}>
//       <div className="direct-chat-messages chat-messages">
//         {chatHistory.map((msg, index) => (
//           <div key={index} ref={index === chatHistory.length - 1 ? lastMessageRef : null} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//             <div className="direct-chat-infos clearfix">
//               <span className="direct-chat-name float-left">
//                 {msg.role === 'user' ? 'You' : 'Bot'}
//               </span>
//               <span className="direct-chat-timestamp float-right">
//                 {new Date().toLocaleString()}
//               </span>
//             </div>
//             {msg.role === 'assistant' && msg.content && Array.isArray(msg.content) ? (
//               <div className="direct-chat-text">
//                 {msg.content.map((item, idx) => (
//                   <div key={idx}>{JSON.stringify(item)}</div>
//                 ))}
//               </div>
//             ) : (
//               <div className="direct-chat-text">{msg.content}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useRef, useEffect, useState } from 'react';
import '../chat.css';  // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

const Chat = ({ messages }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (Array.isArray(messages)) {
      setChatHistory(prevHistory => [...prevHistory, ...messages.map(msg => ({ ...msg, timestamp: msg.timestamp || new Date().toISOString() }))]);
    } else if (messages && typeof messages === 'object') {
      setChatHistory(prevHistory => [...prevHistory, { ...messages, timestamp: messages.timestamp || new Date().toISOString() }]);
    }
  }, [messages]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  const renderTable = (data) => {
    if (data.length === 0) {
      return null;
    }
    const keys = Object.keys(data[1]);  // Assuming the first item will have all keys.
    const tableWidth = keys.length * 150;  // Assuming each column needs at least 150px
    return (
      <div className="table-responsive" style={{ overflowX: 'auto', clear: 'both' }}>
        <table className="table table-hover" style={{ minWidth: `${tableWidth}px` }}>
          <thead className="thead-light">
            <tr>
              {keys.map(key => (
                <th key={key} scope="col">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {keys.map(key => (
                  <td key={key}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="chat-container card-body p-0" ref={chatContainerRef}>
      <div className="direct-chat-messages chat-messages">
        {chatHistory.length === 0 && (
          <div className="initial-message">
            How can I help you today?
          </div>
        )}
        {chatHistory.map((msg, index) => (
          <div key={index} ref={index === chatHistory.length - 1 ? lastMessageRef : null} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
            <div className="direct-chat-infos clearfix">
              <span className="direct-chat-name float-left">
                {msg.role === 'user' ? 'You' : 'Bot'}
              </span>
              <span className="direct-chat-timestamp float-right">
                {new Date(msg.timestamp).toLocaleString()}
              </span>
            </div>
            <div className="direct-chat-text">
              {msg.role === 'assistant' && Array.isArray(msg.content) ? renderTable(msg.content) : msg.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;









