import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Test() {
  const [socket, setSocket] = useState(null);
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);

    newSocket.on("connect", function () {
      setIsSocketConnected(newSocket.connected);
      newSocket.emit("front-end initial emit");
    });

    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
      <h1>Connection Status</h1>
      {isSocketConnected ? (
        <div className="chat-container">
          <div>Connected socket</div>
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </>
  );
}
