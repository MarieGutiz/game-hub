import bullEye from "../assets/Emojis/bulls-eye.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";
import meh from "../assets/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojisMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" , boxSize:'20px'},
    4: { src: thumbsUp, alt: "recommended", boxSize:'18px' },
    5: { src: bullEye, alt: "exceptional" , boxSize:'20px'},
  };

  return <Image {...emojisMap[rating]} marginTop={1} />;
};

export default Emoji;
