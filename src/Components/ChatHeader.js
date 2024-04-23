import React from 'react';
import '../chatheader.css';  // Ensure your paths are correct
const ChatHeader = () => {
  return (
    <div className="card-header" style={{ backgroundColor: '#000000a3', display: 'flex', justifyContent: 'center' }}>
      <h3 className="card-title" style={{fontWeight:600,fontSize:"large"}}>Rikpal</h3>
    </div>
  );
};

export default ChatHeader;
