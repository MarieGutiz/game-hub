import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((p) => p.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const setSelectedPlatform = useGameQueryStore((p) => p.setPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem onClick={() => setSelectedPlatform(p.id)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
