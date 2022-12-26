import React, {useEffect, useState} from "react";
import { useSearchUsersQuery } from "../store/githab/githab.api";
import {useDebounce} from "../hooks/debounce";

const HomePage = () => {
    const [search, setSearch] = useState('');
    const debounce = useDebounce(search);

  useEffect(() => {
      console.log(search);
  }, [debounce]);

  const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
      skip: debounce.length < 3
  });
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

      <div className={"relative w-[560px]"}>
        <input
          className={"border py-2 px-4 w-full h-[42px] mb-2 rounded-lg"}
          placeholder={"Search fot GitHab username..."}
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div
          className={
            "absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white"
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          asperiores.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
