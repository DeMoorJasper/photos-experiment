import React from "react";

// @ts-ignore
import emptyHeart from "../../icons/heart-empty.svg";
// @ts-ignore
import filledHeart from "../../icons/heart-filled.svg";
import Comment from "./comment";
import { PostType } from "../types/post";
import { formatNumber } from "../utils/numbers";
import CommentInput from "./comment-input";

type Props = {
  post: PostType;
  onLike: () => any;
  onComment: (content: string) => any;
};

export default function Post(props: Props) {
  let { post, onLike, onComment } = props;

  return (
    <div className="border border-gray-200 shadow rounded overflow-hidden my-8">
      <div className="p-4">
        <span className="font-semibold capitalize">{post.user.name}</span>
      </div>
      <div className="border-t border-b border-gray-100">
        <img
          src={post.imageUri}
          alt={post.description}
          title={post.description}
          className="w-full h-auto cursor-pointer"
          onClick={onLike}
        />
      </div>
      <div className="p-4 flex items-center">
        <img
          src={post.liked ? filledHeart : emptyHeart}
          title="like"
          alt="like"
          className="h-6 w-auto cursor-pointer"
          onClick={onLike}
        />
        <span className="ml-4 font-medium">{formatNumber(post.likes)}</span>
      </div>
      <div className="pl-4 pb-4 pr-4">
        <div className="mb-2">
          <span className="mr-1 font-semibold">{post.user.name}</span>
          {post.description}
        </div>
        <div>
          {post.comments.slice(0, 5).map((c, i) => (
            <Comment key={i} comment={c} />
          ))}
        </div>
      </div>
      <div>
        <CommentInput onSubmit={onComment} />
      </div>
    </div>
  );
}
