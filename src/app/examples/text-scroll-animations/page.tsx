import Image from "next/image";

import { ScrollXWithY, StaggeredText, TextWithSvgPath } from "./_components";

const images = [
  "https://picsum.photos/id/905/250/",
  "https://picsum.photos/id/906/250/",
  "https://picsum.photos/id/907/250/",
  "https://picsum.photos/id/908/250/",
  "https://picsum.photos/id/909/250/",
  "https://picsum.photos/id/910/250/",
  "https://picsum.photos/id/911/250/",
  "https://picsum.photos/id/912/250/",
  "https://picsum.photos/id/913/250/",
  "https://picsum.photos/id/914/250/",
  "https://picsum.photos/id/915/250/",
  "https://picsum.photos/id/916/250/",
];

const TextScrollAnimations = () => {
  return (
    <>
      <StaggeredText />
      <ScrollXWithY>
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`image-${index}`}
            width={250}
            height={250}
            className="rounded-lg"
          />
        ))}
      </ScrollXWithY>
      <TextWithSvgPath />
    </>
  );
};

export default TextScrollAnimations;
