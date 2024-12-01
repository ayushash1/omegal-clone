/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // get parameter
  const name = searchParams.get("name");
  useEffect(() => {
    // logic to init user to the room
  }, [name]);
  return <div>Hi {name}</div>;
};

export default Room;
