import "../styles/components/Game.css"

const Game = () => {
  const gameScore = {
    team1: 15,
    team2: 30
  };

  return (
    <div className="game">
      <p>{gameScore['team1']}</p>
      <p>{gameScore['team2']}</p>
    </div>
  );
};

export { Game };
