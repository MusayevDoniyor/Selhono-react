import React, { useState, useEffect } from "react";

const SERVER_URL = `${import.meta.env.VITE_BASE_URL}`;

const RoomCards = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchRooms = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(SERVER_URL, {
          signal,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Received non-JSON response");
        }

        const data = await response.json();

        if (!signal.aborted) {
          setRooms(data);
        }

        console.log(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", error);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();

    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading && <div>Loading...</div>}

      {rooms.map((room) => (
        <div
          key={room.id}
          className="mx-auto flex flex-col gap-12 items-center"
        >
          <img
            src={`http://localhost:3000${room.image}`}
            alt={room.roomName}
            className="w-64 h-64 object-cover" // Specified width and height
          />
          <div className="flex justify-between mt-5 items-center w-full">
            <span>
              <strong className="font-dmserif text-color3 text-2xl tracking-wider">
                {room.roomName}
              </strong>
              <br />
              <span className="text-color2 font-jost text-xl tracking-wider">
                {room.category}
              </span>
            </span>
            <span className="bg-[#F4F0EC] rounded-full py-4 cursor-pointer px-5 text-color3 text-lg">
              <i className="pi pi-angle-right"></i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCards;
