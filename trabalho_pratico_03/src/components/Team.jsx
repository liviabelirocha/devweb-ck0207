import '../styles/components/Team.css'


const displayPerson = (player) => (
  <div className='player'>
    <span>{player.name}</span>
    {player.plunder ? (
      <img
        height="15px"
        src="https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10663/26965/beach_ball__43475.1527023620.png?c=2"
        alt="ball"
      />
    ) : (
      ""
    )}
  </div>
);

const Team = ({player1, player2}) => {
    return (
      <div className="team">
        {displayPerson(player1)}
        {displayPerson(player2)}
      </div>
    );
  };
  
export { Team };