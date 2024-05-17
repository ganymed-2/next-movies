import Image, { StaticImageData } from "next/image";

import imageFaille from "../public/images/movies/LA FAILLE.png";
import imageIdentity from "../public/images/movies/IDENTITY.png";
import imageLegend from "../public/images/movies/LEGENDES D'AUTOMNE.jpg";

export async function getStaticProps() {
  return {
    props: {
      pageId: "movies",
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
type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};
function ProjectItem(props: ProjectItemProps) {
  let { name, url, urlDisplay, imageSrc: image } = props;
  return (
    <li>
      <a href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1
text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              🔗 {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
export default function Movies() {
  return (
    <div className="mt-4 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Movies I Recommend</h1>
        <p className="text-base mt-2 text-zinc-600">
          I would like to share with you some movies that I loved. !
        </p>
      </header>
      <div className="mt-10">
        <h2 className="text-2xl text-red-800">Movies</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            name={"LEGENDS OF THE FALL"}
            url={"https://www.netflix.com/sn/title/693960"}
            urlDisplay={"Netflix"}
            imageSrc={imageLegend}
          />
          <ProjectItem
            name={"IDENTITY"}
            url={"https://www.imdb.com/title/tt0309698/"}
            urlDisplay={"imdb.com"}
            imageSrc={imageIdentity}
          />
          <ProjectItem
            name={"LA FAILLE"}
            url={"https://www.canalplus.com/cinema/la-faille/h/573097_50002"}
            urlDisplay={"CANAL+"}
            imageSrc={imageFaille}
          />
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl text-red-800">Series</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            name={"LEGENDS OF THE FALL"}
            url={"https://www.netflix.com/sn/title/693960"}
            urlDisplay={"Netflix"}
            imageSrc={imageLegend}
          />
          <ProjectItem
            name={"IDENTITY"}
            url={"https://www.imdb.com/title/tt0309698/"}
            urlDisplay={"imdb.com"}
            imageSrc={imageIdentity}
          />
          <ProjectItem
            name={"LA FAILLE"}
            url={"https://www.canalplus.com/cinema/la-faille/h/573097_50002"}
            urlDisplay={"CANAL+"}
            imageSrc={imageFaille}
          />
        </ul>
      </div>
    </div>
  );
}
