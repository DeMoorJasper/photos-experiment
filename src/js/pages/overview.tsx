import React from "react";

import Post from "../components/post";
import { getRandomName } from "../utils/random";

type Props = {};

export default function OverviewPage(props: Props) {
  let posts = new Array(15).fill("").map((item, index) => {
    return {
      imageUri: `https://storage.googleapis.com/instagram-clone-test-images/original/${index +
        1}.jpg`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      comments: [],
      user: {
        name: getRandomName()
      },
      likes: 10,
      liked: true,
      onLike: () => {}
    };
  });

  return (
    <div className="max-w-xl mx-auto">
      {posts.map(postData => {
        return React.createElement(Post, postData);
      })}
    </div>
  );
}
