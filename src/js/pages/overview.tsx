import React from "react";
import useSWR, { mutate } from "swr";

import Post from "../components/post";
import fetcher, { updatePost, createComment, POSTS_ENDPOINT, USER_ENDPOINT } from "../utils/api";
import { PostType } from "../types/post";
import { UserType } from "../types/user";

type Props = {};

export default function OverviewPage(props: Props) {
  // @ts-ignore
  const postResponse = useSWR<Array<PostType>>(POSTS_ENDPOINT, fetcher, {
    suspense: true
  });

  // @ts-ignore
  const userResponse = useSWR<Array<UserType>>(USER_ENDPOINT, fetcher, {
    suspense: true
  });

  return (
    <div className="max-w-xl mx-auto">
      {postResponse.data.map((postData: PostType, i: number) => {
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
          onComment: async comment => {
            mutate(
              POSTS_ENDPOINT,
              createComment(postData.id, {
                user: userResponse.data,
                comment
              })
            );
          },
          key: `post-${i}`
        });
      })}
    </div>
  );
}
