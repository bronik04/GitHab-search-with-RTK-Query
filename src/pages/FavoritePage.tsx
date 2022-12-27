import React from "react";
import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.githab);
  return (
    <div
      className={
        "flex justify-center pt-10 mx-auto min-h-screen w-screen bg-gray-200"
      }
    >
      <ul className={"list-none"}>
        {favorites?.map((f) => (
          <li key={f}>
            <a href={f} target={'_blank'}>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
