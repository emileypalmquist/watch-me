import React, { useEffect } from "react";
import ShowCard from "./ShowCard";

function ShowList({ addTowatchList, shows, setShows, removeForever }) {
  useEffect(() => {
    fetch("http://localhost:8081/shows")
      .then((resp) => resp.json())
      .then((data) => setShows(data));
  }, []);

  const showInfo = shows.map((show) => (
    <ShowCard
      key={show.id}
      show={show}
      onShowClicked={addTowatchList}
      onShowDelete={removeForever}
    />
  ));

  return <div className="show-container">{showInfo}</div>;
}

export default ShowList;
