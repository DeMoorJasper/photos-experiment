import React from "react";
import useSWR, { mutate } from "swr";

import Post from "../components/post";
import fetcher, { updatePost } from "../utils/api";
import { PostType } from "../types/post";

const POSTS_ENDPOINT = "/api/posts";

type Props = {};

export default function OverviewPage(props: Props) {
  // @ts-ignore
  const { data } = useSWR<Array<PostType>>(POSTS_ENDPOINT, fetcher, {
    suspense: true
  });

  return (
    <div className="max-w-xl mx-auto">
      {data.map((postData: PostType, i: number) => {
        return React.createElement(Post, {
          post: postData,
          onLike: async () => {
            mutate(
              POSTS_ENDPOINT,
              updatePost(postData.id, {
                ...postData,
                liked: !postData.liked
              })
            );
          },
          key: `post-${i}`
        });
      })}
    </div>
  );
}
