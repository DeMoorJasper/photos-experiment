import React from "react";
import useSWR from "swr";

import Post, { PostType } from "../components/post";
import fetcher from "../utils/api";

type Props = {};

export default function OverviewPage(props: Props) {
  // @ts-ignore
  const { data } = useSWR<Array<PostType>>("/api/posts", fetcher, {
    suspense: true
  });

  return (
    <div className="max-w-xl mx-auto">
      {data.map((postData: PostType) => {
        return React.createElement(Post, {
          post: postData,
          onLike: () => {}
        });
      })}
    </div>
  );
}
