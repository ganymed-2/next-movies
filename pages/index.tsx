import Image, { StaticImageData } from "next/image";
import imageBass from "../public/images/IMG-20230620-WA0026.png";

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "El Hadji Bassirou TOURE",
        description:
          "Get to know El Hadji Bassirou TOURE and the things he loves by visiting his personal website.",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}

type PresentationProps = {
  url: string;
  imageSrc: StaticImageData;
};
function Presentation(props: PresentationProps) {
  let { url, imageSrc: image } = props;
  return (
    <li>
      <a href={url} target="_blank">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={image} alt={"img"} />
        </div>
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <div className="mt-6 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Who am I?</h1>
        <p className="text-base mt-6 text-zinc-600">
          Hello, I am <strong>Dr. El Hadji Bassirou TOURE</strong>, a computer
          science teacher and researcher in the Department of Mathematics and
          Computer Science at the Faculty of Science and Technology of Cheikh
          Anta Diop University.
        </p>
      </header>
      <div className="mt-2">
        <h2 className="text-2xl">Me</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <Presentation
            url={
              "https://universitecheikhantadiopdedakar.academia.edu/ElHadjiBassirouToure"
            }
            imageSrc={imageBass}
          />
        </ul>
      </div>
    </div>
  );
}
