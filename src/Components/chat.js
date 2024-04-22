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


/// this is main component 
// import React, { useRef, useEffect, useState } from 'react';
// import '../chat.css';  // Import the CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

// const Chat = ({ messages }) => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const chatContainerRef = useRef(null);
//   const lastMessageRef = useRef(null);

//   useEffect(() => {
//     if (Array.isArray(messages)) {
//       setChatHistory(prevHistory => [...prevHistory, ...messages.map(msg => ({ ...msg, timestamp: msg.timestamp || new Date().toISOString() }))]);
//     } else if (messages && typeof messages === 'object') {
//       setChatHistory(prevHistory => [...prevHistory, { ...messages, timestamp: messages.timestamp || new Date().toISOString() }]);
//     }
//   }, [messages]);

//   useEffect(() => {
//     if (lastMessageRef.current) {
//       lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [chatHistory]);

  // const renderTable = (data) => {
  //   if (data.length === 0) {
  //     return null;
  //   }
  //   const keys = Object.keys(data[1]); 
  //   console.log(Object.values(data[0]))
  //   const tableWidth = keys.length * 150;
  //   return (
  //     <>
      
  //     <div className="table-responsive" style={{ overflowX: 'auto', clear: 'both' }}>
  //     <div style={{textAlign:'center',}}> Query:    {Object.values(data[0])}</div>
  //       <table className="table table-hover" style={{ minWidth: `${tableWidth}px` }}>
  //         <thead className="thead-light">
  //           <tr>
  //             {keys.map(key => (
  //               <th key={key} scope="col">{key}</th>
  //             ))}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data.map((row, index) => (
  //             <tr key={index}>
  //               {keys.map(key => (
  //                 <td key={key}>{row[key]}</td>
  //               ))}
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //     </>
  //   );
  // };

//   return (
//     <div className="chat-container card-body p-0" ref={chatContainerRef}>
//       <div className="direct-chat-messages chat-messages">
//         {chatHistory.length === 0 && (
//           <div className="initial-message">
//             How can I help you today?
//           </div>
//         )}
//         {chatHistory.map((msg, index) => (
//           <div key={index} ref={index === chatHistory.length - 1 ? lastMessageRef : null} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//             <div className="direct-chat-infos clearfix">
//               <span className="direct-chat-name float-left">
//                 {msg.role === 'user' ? 'You' : 'Bot'}
//               </span>
//               <span className="direct-chat-timestamp float-right">
//                 {new Date(msg.timestamp).toLocaleString()}
//               </span>
//             </div>
//             <div className="direct-chat-text">
//               {msg.role === 'assistant' && Array.isArray(msg.content) ? renderTable(msg.content) : msg.content}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
    
//   );
  
// };

// export default Chat;







// import React, { useRef, useEffect, useState } from 'react';
// import Chart from "react-apexcharts";
// import '../chat.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Chat = ({ messages }) => {
//     const [chatHistory, setChatHistory] = useState([]);
//     const chatContainerRef = useRef(null);
//     const lastMessageRef = useRef(null);

//     useEffect(() => {
//         if (Array.isArray(messages)) {
//             setChatHistory(prevHistory => [...prevHistory, ...messages.map(msg => ({ ...msg, timestamp: msg.timestamp || new Date().toISOString() }))]);
//         } else if (messages && typeof messages === 'object') {
//             setChatHistory(prevHistory => [...prevHistory, { ...messages, timestamp: messages.timestamp || new Date().toISOString() }]);
//         }
//     }, [messages]);

//     useEffect(() => {
//         if (lastMessageRef.current) {
//             lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, [chatHistory]);

//     const renderContent = (msg) => {
//         if (msg.role === 'assistant') {
//             if (msg.content.Normal && msg.content.Normal.results) {
//                 return renderTable(msg.content.Normal.results, msg.content.Normal.query);
//             } else if (msg.content.Graph) {
//                 return <ApexChart chartData={msg.content.Graph} />;
//             }
//         }
//         return msg.content;
//     };

//     const renderTable = (data, query) => {
//         if (!data || data.length === 0) {
//             return <p>No data available to display.</p>;
//         }
//         if (!Array.isArray(data) || data.length === 0 || !data[0]) {
//             return <p>Malformed data structure.</p>;
//         }

//         const keys = Object.keys(data[0]); 
//         const tableWidth = keys.length * 150;
//         return (
//             <>
//             <div className="table-responsive" style={{ overflowX: 'auto', clear: 'both' }}>
//                 <div style={{ textAlign: 'center' }}>Query: {query}</div>
//                 <table className="table table-hover" style={{ minWidth: `${tableWidth}px` }}>
//                     <thead className="thead-light">
//                         <tr>
//                             {keys.map(key => (
//                                 <th key={key} scope="col">{key}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((row, index) => (
//                             <tr key={index}>
//                                 {keys.map(key => (
//                                     <td key={key}>{row[key]}</td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             </>
//         );
//     };

//     return (
//         <div className="chat-container card-body p-0" ref={chatContainerRef}>
//             <div className="direct-chat-messages chat-messages">
//                 {chatHistory.length === 0 && <div className="initial-message">How can I help you today?</div>}
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} ref={index === chatHistory.length - 1 ? lastMessageRef : null} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//                         <div className="direct-chat-infos clearfix">
//                             <span className="direct-chat-name float-left">{msg.role === 'user' ? 'You' : 'Bot'}</span>
//                             <span className="direct-chat-timestamp float-right">{new Date(msg.timestamp).toLocaleString()}</span>
//                         </div>
//                         <div className="direct-chat-text">{renderContent(msg)}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Chat;

// const ApexChart = ({ chartData }) => {
//     return (
//         <div className="app">
//             <div className="mixed-chart">
//                 <Chart
//                     options={chartData.options}
//                     series={chartData.series}
//                     type={chartData.options.chart.type}
//                     width="500"
//                 />
//             </div>
//         </div>
//     );
// };


// import React, { useRef, useEffect, useState } from 'react';
// import Chart from "react-apexcharts";
// import '../chat.css';  // Ensure your paths are correct
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ApexChart from './ApexCharts';

// const Chat = ({ messages }) => {
//     const [chatHistory, setChatHistory] = useState([]);
//     const chatContainerRef = useRef(null);
//     const lastMessageRef = useRef(null);

//     useEffect(() => {
//         if (Array.isArray(messages)) {
//             setChatHistory(prevHistory => [...prevHistory, ...messages.map(msg => ({ ...msg, timestamp: msg.timestamp || new Date().toISOString() }))]);
//         } else if (messages && typeof messages === 'object') {
//             setChatHistory(prevHistory => [...prevHistory, { ...messages, timestamp: messages.timestamp || new Date().toISOString() }]);
//         }
//     }, [messages]);

//     useEffect(() => {
//         if (lastMessageRef.current) {
//             lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, [chatHistory]);

//     const renderContent = (msg) => {
//         if (msg.role === 'assistant') {
//             let contentElements = [];

//             // Check if Normal data is present and is an object, and handle accordingly
//             if (msg.content.Normal && typeof msg.content.Normal === 'object') {
//                 // Assuming Normal might be an object with results and query
//                 if (msg.content.Normal.results) {
//                     contentElements.push(renderTable(msg.content.Normal.results, msg.content.Normal.query));
//                 }
//             } else if (msg.content.Normal) {
//                 // Handle case where Normal is just a string
//                 return <p>{msg.content.Normal}</p>;
//             }

//             // Render graph if data is properly configured
//             if (msg.content.Graph && msg.content.Graph.options && msg.content.Graph.series) {
//                 contentElements.push(<ApexChart chartData={msg.content.Graph} />);
//             }

//             // If content elements are empty, display just the text content
//             if (contentElements.length === 0 && typeof msg.content === 'string') {
//                 return <p>{msg.content}</p>;
//             }

//             return <>{contentElements}</>;
//         }

//         // Fallback for user messages or unstructured assistant messages
//         return <p>{msg.content}</p>;
//     };

//     const renderTable = (data, query) => {
//         if (!data || data.length === 0) {
//             return <p>No data available to display.</p>;
//         }
//         const keys = Object.keys(data[0]);
//         const tableWidth = keys.length * 150;
//         return (
//             <div className="table-responsive" style={{ overflowX: 'auto', clear: 'both' }}>
//                 <div style={{ textAlign: 'center' }}>Query: {query}</div>
//                 <table className="table table-hover" style={{ minWidth: `${tableWidth}px` }}>
//                     <thead className="thead-light">
//                         <tr>
//                             {keys.map(key => <th key={key} scope="col">{key}</th>)}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((row, index) => (
//                             <tr key={index}>
//                                 {keys.map(key => <td key={`${key}-${index}`}>{row[key]}</td>)}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };

//     return (
//         <div className="chat-container card-body p-0" ref={chatContainerRef}>
//             <div className="direct-chat-messages chat-messages">
//                 {chatHistory.length === 0 && <div className="initial-message">How can I help you today?</div>}
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} ref={index === chatHistory.length - 1 ? lastMessageRef : null} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
//                         <div className="direct-chat-infos clearfix">
//                             <span className="direct-chat-name float-left">{msg.role === 'user' ? 'You' : 'Bot'}</span>
//                             <span className="direct-chat-timestamp float-right">{new Date(msg.timestamp).toLocaleString()}</span>
//                         </div>
//                         <div className="direct-chat-text">{renderContent(msg)}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Chat;

import React, { useRef, useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import '../chat.css';  // Ensure your paths are correct
import 'bootstrap/dist/css/bootstrap.min.css';
import ApexChart from './ApexCharts';
import MapChart from './MapChart';
const Chat = ({ messages }) => {
    const [chatHistory, setChatHistory] = useState([]);
    const chatContainerRef = useRef(null);
    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (Array.isArray(messages)) {
            const updatedHistory = messages.map(msg => ({
                ...msg, 
                timestamp: msg.timestamp || new Date().toISOString()
            }));
            setChatHistory(prevHistory => [...prevHistory, ...updatedHistory]);
        } else if (messages && typeof messages === 'object') {
            const updatedMessage = {
                ...messages, 
                timestamp: messages.timestamp || new Date().toISOString()
            };
            setChatHistory(prevHistory => [...prevHistory, updatedMessage]);
        }
    }, [messages]);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory]);

    // const renderContent = (msg) => {
    //     let contentElements = [];
    //     if (msg.role === 'assistant') {
    //         if (msg.content.Normal && typeof msg.content.Normal === 'object') {
    //             if (msg.content.Normal.results) {
    //                 contentElements.push(renderTable(msg.content.Normal.results, msg.content.Normal.query));
    //             }
    //         } else if (typeof msg.content.Normal === 'string') {
    //             return <p>{msg.content.Normal}</p>;
    //         }

    //         if (msg.content.Graph && msg.content.Graph.options && msg.content.Graph.series) {
    //             contentElements.push(<ApexChart chartData={msg.content.Graph} />);
    //         }
    //     }

    //     if (contentElements.length === 0 && typeof msg.content === 'string') {
    //         return <p>{msg.content}</p>;
    //     }

    //     return <>{contentElements}</>;
    // };
    const renderContent = (msg) => {
        let contentElements = [];
        if (msg.role === 'assistant') {
            if (msg.content.Normal && typeof msg.content.Normal === 'object') {
                if (msg.content.Normal.results) {
                    contentElements.push(renderTable(msg.content.Normal.results, msg.content.Normal.query));
                }
            } else if (typeof msg.content.Normal === 'string') {
                return <p>{msg.content.Normal}</p>;
            }
    
            if (msg.content.Graph && msg.content.Graph.options && msg.content.Graph.series) {
                if (msg.content.Graph.type === 'map') {
                    console.log(msg.content.Graph.type)
                    contentElements.push(<MapChart data={msg.content.Graph} />);
                } else {
                    console.log(msg.content.Graph.type)
                    contentElements.push(<ApexChart chartData={msg.content.Graph} />);
                }
            }
        }
    
        if (contentElements.length === 0 && typeof msg.content === 'string') {
            return <p>{msg.content}</p>;
        }
    
        return <>{contentElements}</>;
    };
    

    const renderTable = (data, query) => {
        if (!data || data.length === 0) {
            return <p>No data available to display.</p>;
        }
        const keys = Object.keys(data[0]);
        const tableWidth = keys.length * 150;
        return (
            <div className="table-responsive" style={{ overflowX: 'auto', clear: 'both' }}>
                <div style={{ textAlign: 'center' }}>Query: {query}</div>
                <table className="table table-hover" style={{ minWidth: `${tableWidth}px` }}>
                    <thead className="thead-light">
                        <tr>
                            {keys.map(key => <th key={key} scope="col">{key}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {keys.map(key => <td key={`${key}-${index}`}>{row[key]}</td>)}
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
                {chatHistory.length === 0 && <div className="initial-message">How can I help you today?</div>}
                {chatHistory.map((msg, index) => (
                    <div key={index} ref={index === chatHistory.length - 1 ? lastMessageRef : null} className={`direct-chat-msg ${msg.role === 'user' ? 'right' : ''}`}>
                        <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">{msg.role === 'user' ? 'You' : 'Bot'}</span>
                            <span className="direct-chat-timestamp float-right">{new Date(msg.timestamp).toLocaleString()}</span>
                        </div>
                        <div className="direct-chat-text">{renderContent(msg)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;
