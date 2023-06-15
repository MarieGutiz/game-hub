import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenresSmallDisplay = () => {
  const { data: genres, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((g) => g.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((g) => g.setGenreId);
  const elemtSelected = genres.results.find((g) => g.id === selectedGenreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {elemtSelected?.name || "Genre"}
      </MenuButton>
      <MenuList>
        {genres.results.map((genre) => (
          <MenuItem onClick={() => setSelectedGenreId(genre.id)} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenresSmallDisplay;
