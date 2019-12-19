import { getRandomName, getRandomInt } from "./random";

export async function getPosts(start: number, end: number) {
  await new Promise(resolve => {
    setTimeout(resolve, 150);
  });

  return new Array(end - start).fill("").map((item, index) => {
    let imageId = getRandomInt(1, 15);

    return {
      imageUri: `https://storage.googleapis.com/instagram-clone-test-images/original/${imageId}.jpg`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      comments: [
        {
          user: getRandomName(),
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
        }
      ],
      user: {
        name: getRandomName()
      },
      likes: 10,
      liked: true,
      onLike: () => {}
    };
  });
}

export default async function fetcher(uri: string) {
  switch (uri) {
    case "/api/posts":
      return getPosts(0, 20);
  }
}
