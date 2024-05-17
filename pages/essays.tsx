export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
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

export default function Essays() {
  return <div>Essays (TODO) </div>;
}
