import React from "react";
import { IRepo } from "../models/models";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  return (
    <div
      className={
        "px-3 py-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all"
      }
    >
      <h2 className={"text-lg font-bold"}>{repo.full_name}</h2>
      <p className={"text-sm mb-2"}>
        Watchers: <span className={"font-bold"}>{repo.watchers}</span>
      </p>
      <p className={"text-sm font-thin"}>{repo?.description}</p>
    </div>
  );
};

export default RepoCard;
