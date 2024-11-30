import React from "react";
function LeftSection() {
    return (
      <div className="w-1/5 bg-blue-500 h-screen text-white p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-4 font-bold text-2xl gap-y-8">
       
        <br />
          <li className="flex items-center space-x-2 ">
            <span>🏠</span> <span>Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>👤</span> <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>📬</span> <span>Messages</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>📜</span> <span>History</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>📋</span> <span>Tasks</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>👥</span> <span>Communities</span>
          </li>
          <br/><br/><br/><br/>
          <li className="flex items-center space-x-2">
            <span>⚙️</span> <span>Setting</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>💬</span> <span>Support</span>
          </li>  
          <li className="flex items-center space-x-2">
            <span>🔒</span> <span>Privacy</span>
          </li>       
        </ul>
      </div>
    );
  }
  
  export default LeftSection;
  