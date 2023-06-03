import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  // Games
  // Action Games
  // Xbox Action Games
  const genreId = useGameQueryStore((g) => g.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((p) => p.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={6}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
