import React, { useState, useEffect } from "react";

const SERVER_URL = import.meta.env.VITE_BASE_URL;

const RoomCards = ({ category }) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchRooms = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${SERVER_URL}/rooms`, {
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
          const filteredRooms = data.filter(
            (room) => room.category.toLowerCase() === category
          );
          setRooms(filteredRooms);
        }
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
  }, [category]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="max-w-xl mx-auto flex flex-col gap-4 items-center"
        >
          <img
            src={`${SERVER_URL}${room.image}`}
            alt={room.roomName}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="flex justify-between items-center w-full">
            <div>
              <strong className="font-bold text-gray-800 text-lg">
                {room.roomName}
              </strong>
              <br />
              <span className="text-gray-600 text-sm">{room.category}</span>
            </div>
            <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-800">
              <i className="pi pi-angle-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCards;
