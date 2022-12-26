import React, { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../store/githab/githab.api";
import { useDebounce } from "../hooks/debounce";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounce = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
    skip: debounce.length < 3,
  });

  useEffect(() => {
    setDropdown(debounce.length > 3 && data?.length! > 0);
  }, [debounce, data]);

  return (
    <div
      className={
        "flex justify-center pt-10 mx-auto h-screen w-screen bg-gray-200"
      }
    >
      {isError && (
        <p className={"text-center text-red-600"}> Somthing went wrong</p>
      )}

      <div className={"relative w-[560px]"}>
        <input
          className={"border py-2 px-4 w-full h-[42px] mb-2 rounded-lg"}
          placeholder={"Search fot GitHab username..."}
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {dropdown && (
          <ul
            className={
              "absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white list-none overflow-y-scroll rounded-lg"
            }
          >
            {isLoading && <p className={"text-center"}> Loading...</p>}
            {data?.map((user) => (
              <li
                key={user.id}
                className={
                  "py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer rounded-lg"
                }
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
