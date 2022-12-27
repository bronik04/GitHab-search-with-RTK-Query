import React, {useState} from "react";
import { IRepo } from "../models/models";
import { useAction } from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addToFavorite, removeFromFavorite } = useAction();
  const { favorites } = useAppSelector(state => state.githab);

    const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

    const addFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToFavorite(repo.html_url);
    setIsFav(true)
  };

  const removeFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      removeFromFavorite(repo.html_url);
      setIsFav(false)
  }
  return (
    <a
      href={repo.html_url}
      target={"_blank"}
      className={
        "px-3 py-5 rounded mb-5 hover:shadow-md hover:bg-gray-100 transition-all block"
      }
    >
      <h2 className={"text-lg font-bold"}>{repo.full_name}</h2>
      <p className={"text-sm mb-2"}>
        Watchers: <span className={"font-bold"}>{repo.watchers}</span>
      </p>
      <p className={"text-sm font-thin"}>{repo?.description}</p>
      {!isFav && (
        <button
          className={
            "py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all mr-2"
          }
          onClick={addFavorite}
        >
          Add
        </button>
      )}
      { isFav &&
        <button
          className={
            "py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          }
          onClick={removeFavorite}
        >
          Remove
        </button>
      }
    </a>
  );
};

export default RepoCard;
