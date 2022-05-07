import '../styles/components/Team.css'


const Team = ({player1, player2}) => {
    return (
      <div className="team">
        <span>{player1}</span>
        <span>{player2}</span>
      </div>
    );
  };
  
export { Team };