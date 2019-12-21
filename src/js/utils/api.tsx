import { getRandomName, getRandomInt } from "./random";

let posts: Array<any> = [];

export async function getPosts(start: number, end: number) {
  await new Promise(resolve => {
    setTimeout(resolve, 150);
  });

  if (posts.length < end) {
    posts.push(
      ...new Array(end - posts.length).fill("").map((_, index) => {
        let imageId = getRandomInt(1, 15);

        return {
          id: posts.length + index,
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
          liked: true
        };
      })
    );
  }

  return posts.slice(start, end);
}

export default async function fetcher(uri: string) {
  switch (uri) {
    case "/api/posts":
      return getPosts(0, 20);
  }
}
