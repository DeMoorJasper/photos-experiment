import { getRandomName, getRandomInt } from "./random";
import { PostType } from "../types/post";
import { CommentType } from "../types/comment";

const DEFAULT_API_LATENCY = 75;
const USE_WEBP = true;
const USE_COMPRESSED_IMAGE = true;

export const POSTS_ENDPOINT = "/api/posts";
export const USER_ENDPOINT = "/api/user";

let posts: Array<PostType> = [];

async function emulateLatency(latency = DEFAULT_API_LATENCY) {
  await new Promise(resolve => {
    setTimeout(resolve, latency);
  });
}

export async function createComment(id: number, comment: CommentType) {
  await emulateLatency();

  let foundIndex = posts.findIndex(p => p.id === id);
  if (foundIndex >= 0) {
    posts[foundIndex].comments.push(comment);
  }

  return posts;
}

export async function updatePost(id: number, newPost: any) {
  await emulateLatency();

  let foundIndex = posts.findIndex(p => p.id === id);
  if (foundIndex >= 0) {
    posts[foundIndex] = newPost;
  }

  return posts;
}

export async function getPosts(start: number, end: number) {
  await emulateLatency();

  if (posts.length < end) {
    posts.push(
      ...new Array(end - posts.length).fill("").map((_, index) => {
        let imageId = getRandomInt(1, 15);

        return {
          id: posts.length + index,
          imageUri: `https://storage.googleapis.com/instagram-clone-test-images/${
            USE_COMPRESSED_IMAGE ? "medium" : "original"
          }/${imageId}.${USE_WEBP ? "webp" : "jpg"}`,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          comments: [
            {
              user: {
                name: getRandomName()
              },
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            }
          ],
          user: {
            name: getRandomName()
          },
          likes: getRandomInt(0, 150000),
          liked: false
        };
      })
    );
  }

  return posts.slice(start, end);
}

export async function getUser() {
  await emulateLatency();

  return {
    name: "John"
  };
}

export default async function fetcher(uri: string) {
  switch (uri) {
    case "/api/posts":
      return getPosts(0, 20);
    case "/api/user":
      return getUser();
  }
}
