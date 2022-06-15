import React from "react";
import ShowCard from "./ShowCard";

function MyWatchList({ watchList, removeFromWatchList, removeForever }) {
  const renderShows = watchList.map((show) => (
    <ShowCard
      key={show.id}
      show={show}
      onShowClicked={removeFromWatchList}
      onShowDelete={removeForever}
    />
  ));

  return <div className="watch-list-container">{renderShows}</div>;
}

export default MyWatchList;
