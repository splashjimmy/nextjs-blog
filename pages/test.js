import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Test() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    console.log(newSocket);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
      <h1>Connection Status</h1>
      {socket?.connected ? (
        <div className="chat-container">
          <div>Connected socket</div>
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </>
  );
}
