import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Section from "./components/Section/Section";
import { useState, useEffect } from  "react";
import axios from "axios";
import "./App.css";

export const config = {
  endpoint: "https://qtify-backend-labs.crio.do/albums"
};

function App() {
  const [topAlbumsList, setTopAlbumsList] = useState([]);
  const [newAlbumsList, setNewAlbumsList] = useState([]);

  const getTopAlbums = async () => {
    try {
      const apiResponse = await axios.get(config.endpoint+"/top");
      return apiResponse.data;
    }
    catch (e) {
      console.error(e);
    }
  }

  const getNewAlbums = async () => {
    try {
      const apiResponse = await axios.get(config.endpoint+"/new");
      return apiResponse.data;
    }
    catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const onLoadHandler = async () => {
      const topAlbumsData = await getTopAlbums();
      const newAlbumsData = await getNewAlbums();
      setTopAlbumsList(topAlbumsData);
      setNewAlbumsList(newAlbumsData);
    }
    onLoadHandler();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <main className='section-container'>
        <Section topAlbums={topAlbumsList} />
        <div className='ruler'></div>
        <Section newAlbums={newAlbumsList} />
      </main>
    </div>
  );
}

export default App;
