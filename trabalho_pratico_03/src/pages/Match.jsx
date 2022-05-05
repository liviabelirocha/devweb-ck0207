import { Scoreboard } from "../components/Scoreboard";
import { Timer } from "../components/Timer";
import { Button } from "../components/Button";

const Match = () => {
  return (
    <div>
      <Scoreboard />
      <Timer />

      <div className="controls">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
};

export { Match };
