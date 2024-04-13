// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 
// import '../chatFooter.css'; 

// const ChatFooter = ({ sendMessage }) => {
//   return (
//     <div className="card-footer chat-footer">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const messageInput = e.target.elements.message;
//           const message = messageInput.value;
//           if (message.trim() !== '') {
//             sendMessage(message);
//             messageInput.value = '';
//           }
//         }}
//       >
//         <div className="input-group">
//           <input
//             type="text"
//             name="message"
//             placeholder="Type Message ..."
//             className="form-control input-no-border" // Add a custom class to remove border
//           />
//           <span className="input-group-append">
//             <button type="submit" className="btn btn-primary">
//               <FontAwesomeIcon icon={faPaperPlane} /> {/* Use the paper plane icon */}
//             </button>
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ChatFooter;



// import React, { useState } from "react";
// import { get_answer } from '../BackendConnection/CallChatGpt'

// const Footer = () => {
//     const [conversationHistory, setConversationHistory] = useState([]);
//     const [input, setInput] = useState('');
//     const [loader, setLoader] = useState(false);

//     const submit = async () => {
//         if (input.length === 0 || loader) return;
//         setLoader(true);
//         const updatedHistory = [...conversationHistory, { role: "user", content: input }];
//         setConversationHistory(updatedHistory);
//         setInput('');

//         try {
//             const data = await get_answer(updatedHistory);
//             console.log(data)
//             const assistantResponse = data.Normal[0]['Your query'];
//             const updatedConversationHistory = [...updatedHistory, { role: "assistant", content: assistantResponse }];
//             setConversationHistory(updatedConversationHistory);
//         } catch (error) {
//             console.error("Error getting response:", error);
//         }

//         setLoader(false);
//     };

//     const handelEnter = (e) => {
//         if (e.key === 'Enter') {
//             submit();
//         }
//     };

//     return (
//         <div className="input-group">
//             <input
//                 type="text"
//                 name="message"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handelEnter}
//                 placeholder="Type Message ..."
//                 className="form-control"
//             />
//             <span className="input-group-append">
//                 <button type="button" onClick={submit} disabled={loader} className="btn btn-primary">Send</button>
//             </span>
//         </div>
//     );
// };

// export default Footer;



// import React, { useState } from "react";
// import { FaTelegramPlane } from 'react-icons/fa';
import '../chatFooter.css'; // Import the CSS file

// const Footer = ({ sendMessage }) => {
//     const [input, setInput] = useState('');
//     const [loader, setLoader] = useState(false);

//     const submit = async () => {
//         if (input.length === 0 || loader) return;
//         setLoader(true);

//         try {
//             sendMessage(input);
//         } catch (error) {
//             console.error("Error sending message:", error);
//         }

//         setInput('');
//         setLoader(false);
//     };

//     const handleEnter = (e) => {
//         if (e.key === 'Enter') {
//             submit();
//         }
//     };

//     return (
//         <div className="footer-container">
//             <div className="input-group">
//                 <input
//                     type="text"
//                     name="message"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyDown={handleEnter}
//                     placeholder="Type Message ..."
//                     className="form-control"
//                 />
//                 <span className="input-group-append">
//                     <button type="button" onClick={submit} disabled={loader} className="btn btn-primary">
//                         <FaTelegramPlane />
//                     </button>
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Footer;


import React, { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa'; 
import { get_answer } from '../BackendConnection/ApiCall'; 

const Footer = ({ sendMessage }) => {
    const [input, setInput] = useState('');
    const [loader, setLoader] = useState(false); 

    const submit = async () => {
        if (input.length === 0 || loader) return;

        try {
            setInput('');
            setLoader(true); 
            await sendMessage(input);
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setLoader(false);
        }

        setInput('');
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            submit();
        }
    };

    return (
        <div className="footer-container">
            <div className="input-group">
                <input
                    type="text"
                    name="message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleEnter}
                    placeholder="Message Rikpal..."
                    className="form-control"
                />
                <span className="input-group-append">
                    <button type="button" onClick={submit} disabled={loader} className="btn btn-primary">
                        {loader ? <Loader /> : <FaTelegramPlane />}
                    </button>
                </span>
            </div>
        </div>
    );
};

const Loader = () => (
    <div className="spinner-border spinner-border-sm" role="status">
        <span className="sr-only">Loading...</span>
    </div>
);

export default Footer;
