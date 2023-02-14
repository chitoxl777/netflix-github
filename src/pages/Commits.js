import { useParams } from "react-router-dom";
import { useState, useEffect, React } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Commits.css";

export default function Commits(props) {
  // Using Params to grab data from react router
  const params = useParams();
  const name = params.id;

  const [commits, setCommits] = useState("");

  const url = `https://api.github.com/repos/Netflix/${name}/commits`;

  async function getRepoData() {
    axios
      .get(`${url}`)
      .then((res) => {
        const allCommits = res.data;
        console.log(allCommits);
        setCommits(allCommits);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getRepoData();
  }, []);

  const displayCommits = () => {
    if (commits.length > 0) {
      return commits.map((commit) => {
        return (
          <div className="repo-card container-lg" key={commit.sha}>
            <div>
              <Card style={{ width: "100%", height: "auto" }}>
                <Card.Body>
                  <Card.Title>
                    <h3>{commit.commit.message}</h3>
                  </Card.Title>
                  <div className="pt-3" id="grid">
                    {commit.committer === null ? (
                      <Card.Text>Username: null</Card.Text>
                    ) : (
                      <Card.Text>Username: {commit.committer.login}</Card.Text>
                    )}
                    <Card.Text>Hash: {commit.sha}</Card.Text>
                    <Card.Text>
                      Date Created: {commit.commit.author.date}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <div className="container-lg pb-3 d-flex flex-wrap flex-items-start my-3 flex-md-items-center">
        <div className="flex-1">
          <h1>{name}</h1>
          <p>Netflix Open Source Platform</p>
        </div>
      </div>
      {displayCommits(commits)}
    </>
  );
}
