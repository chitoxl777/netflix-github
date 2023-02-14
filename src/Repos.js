import React from "react";
import "./Repos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Repos(props) {
  const displayRepos = (props) => {
    const { repos } = props;

    // Sorting repos by Star count in descending order then mapping through data
    if (repos.length > 0) {
      repos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
      return repos.map((repo) => {
        return (
          <div className="container-lg" key={repo.id}>
            <div className="repo-card">
              <div>
                <Card style={{ width: "100%", height: "auto" }}>
                  <Card.Body>
                    <Card.Title>
                      <h3>
                        <Link to={`/${repo.name}`} className="repo-name">
                          {repo.name}
                        </Link>
                      </h3>
                    </Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                    <div id="grid" className="pt-3">
                      <Card.Text>
                        <b>
                          <i>{repo.language}</i>
                        </b>
                      </Card.Text>
                      <Card.Text>
                        <b>
                          <i>Star Count:</i>
                        </b>{" "}
                        {repo.stargazers_count}
                      </Card.Text>
                      <Card.Text>
                        <b>
                          <i>Fork Count:</i>
                        </b>{" "}
                        {repo.forks_count}
                      </Card.Text>
                      <Card.Text>
                        <b>
                          <i>Date Created:</i>
                        </b>{" "}
                        {repo.created_at}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <h3>No Repos Listed</h3>;
    }
  };

  return (
    <>
      <Header />
      {displayRepos(props)}
    </>
  );
}
