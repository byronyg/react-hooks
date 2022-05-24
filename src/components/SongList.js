import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("Use effect hook in full operation", songs);
  }, [songs]);
  useEffect(() => {
    console.log("Use effect hook in", age);
  }, [age]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv1() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      {/* <button onClick={addSong}>Add Song</button> */}
      <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
    </div>
  );
};

export default SongList;
