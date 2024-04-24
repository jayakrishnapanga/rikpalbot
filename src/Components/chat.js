// import React, { useRef, useEffect, useState } from 'react';
// import Chart from "react-apexcharts";
// import '../chat.css';  // Ensure your paths are correct
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ApexChart from './ApexCharts';
// import MapChart from './MapChart';

// const Chat = ({ messages }) => {
//     const [chatHistory, setChatHistory] = useState([]);
//     const chatContainerRef = useRef(null);
//     const lastMessageRef = useRef(null);

//     useEffect(() => {
//         if (Array.isArray(messages)) {
//             const updatedHistory = messages.map(msg => ({
//                 ...msg, 
//                 timestamp: msg.timestamp || new Date().toISOString()
//             }));
//             setChatHistory(prevHistory => [...prevHistory, ...updatedHistory]);
//         } else if (messages && typeof messages === 'object') {
//             const updatedMessage = {
//                 ...messages, 
//                 timestamp: messages.timestamp || new Date().toISOString()
//             };
//             setChatHistory(prevHistory => [...prevHistory, updatedMessage]);
//         }
//     }, [messages]);

//     useEffect(() => {
//         if (lastMessageRef.current) {
//             lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, [chatHistory]);

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
    //             if (msg.content.Graph.type === 'map') {
    //                 console.log(msg.content.Graph.type)
    //                 contentElements.push(<MapChart data={msg.content.Graph} />);
    //             } else {
    //                 console.log(msg.content.Graph.type)
    //                 contentElements.push(
    //                     <ApexChart chartData={msg.content.Graph} />
    //                 );
    //             }
    //         }
    //     }
    
    //     if (contentElements.length === 0 && typeof msg.content === 'string') {
    //         return <p>{msg.content}</p>;
    //     }
    
    //     return <>{contentElements}</>;
    // };
    

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
//                         {msg.role === 'assistant' && msg.content && msg.content.Additional && <div className="additional-content">{msg.content.Additional}</div>}
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
               
                    console.log(msg.content.Graph.type)
                    contentElements.push(

                            <div className=' direct-chat-text'>
                                <div className='apex direct-chat-text'>
                                <ApexChart chartData={msg.content.Graph} />
                                </div>
                            </div>
                        
                    );
                
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
                        {/* {msg.role === 'assistant' && msg.content && msg.content.Graph && msg.content.Graph.options && msg.content.Graph.series && 
                            <div className='apex'>
                                <ApexChart chartData={msg.content.Graph} />
                            </div>
                        } */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;
