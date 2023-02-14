import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import Repos from "./Repos";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Commits from "./pages/Commits";
import Header from "./Header";

function App() {
  const [repos, setRepos] = useState("");

  const url = "https://api.github.com/orgs/Netflix/repos";

  async function getAllRepos() {
    axios
      .get(`${url}`)
      .then((res) => {
        // console.log(res);
        const allRepos = res.data;
        console.log(allRepos);
        setRepos(allRepos);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getAllRepos();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Repos repos={repos} />} />
        <Route path="/:id" element={<Commits repos={repos} />} />
      </Routes>
    </>
  );
}

export default App;
