import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { games, errors } = useGame();

  return (
    <>
      {errors && <text>{errors}</text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
