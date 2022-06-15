import React, { useState } from "react";
import MyWatchList from "./MyWatchList";
import ShowList from "./ShowList";

function ShowCatalog() {
  const [shows, setShows] = useState([]);
  const [watchList, setWatchList] = useState([]);

  function addTowatchList(showToAdd) {
    const isInList = watchList.some((show) => show.id === showToAdd.id);
    if (!isInList) {
      setWatchList((currentWatchList) => [...currentWatchList, showToAdd]);
    }
  }

  function removeFromWatchList(showToRemove) {
    setWatchList((currentWatchList) =>
      currentWatchList.filter((show) => show.id !== showToRemove.id)
    );
  }

  function removeForever(e, showId) {
    e.stopPropagation();
    fetch(`http://localhost:8081/shows/${showId}`, {
      method: "DELETE",
    });
    setWatchList((currentWatchList) =>
      currentWatchList.filter((show) => show.id !== showId)
    );
    setShows((currentShows) =>
      currentShows.filter((show) => show.id !== showId)
    );
  }

  return (
    <>
      <MyWatchList
        watchList={watchList}
        removeFromWatchList={removeFromWatchList}
        removeForever={removeForever}
      />
      <hr />
      <ShowList
        addTowatchList={addTowatchList}
        shows={shows}
        setShows={setShows}
        removeForever={removeForever}
      />
    </>
  );
}

export default ShowCatalog;
