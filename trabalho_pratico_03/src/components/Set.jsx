import "../styles/components/Set.css"

const Set = ({scoreTeam1, scoreTeam2}) => {
  return (
    <div className="set">
      <p>{scoreTeam1}</p>
      <p>{scoreTeam2}</p>
    </div>
  );
};

export { Set };
