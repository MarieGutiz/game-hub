import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGame();

  return (
    <>
      {errors && <text>{errors}</text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding='10' spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
