import React, { useEffect } from "react";
import { useSearchUsersQuery } from "../store/githab/githab.api";

const HomePage = () => {
  useEffect(() => {}, []);

  const { isLoading, isError, data } = useSearchUsersQuery("bronik04");
  return (
    <div
      className={
        "flex justify-center pt-10 mx-auto h-screen w-screen bg-gray-200"
      }
    >
      {isError && (
        <p className={"text-center text-red-600"}> Somthing went wrong</p>
      )}
      {isLoading && <p className={"text-center"}> Loading...</p>}
    </div>
  );
};

export default HomePage;
