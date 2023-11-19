import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ key, player }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <h1>{key}</h1>
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          Team: {player.team}
          <br />
          Nationality: {player.nationality}
          <br />
          Number: {player.jerseyNumber}
          <br />
          Age: {player.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
