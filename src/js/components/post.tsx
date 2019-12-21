import React from "react";

// @ts-ignore
import emptyHeart from "../../icons/heart-empty.svg";
// @ts-ignore
import filledHeart from "../../icons/heart-filled.svg";
import Comment, { CommentType } from "./comment";

type User = {
  name: string;
};

export type PostType = {
  imageUri: string;
  description: string;
  user: User;
  comments: Array<CommentType>;
  likes: number;
  liked: boolean;
};

type Props = {
  post: PostType;
  onLike: () => any;
};

export default function Post(props: Props) {
  let { post, onLike } = props;

  return (
    <div className="border border-gray-200 shadow rounded overflow-hidden my-8">
      <div className="p-4 flex justify-between">
        <span className="font-semibold capitalize">{post.user.name}</span>
        <img
          src={post.liked ? filledHeart : emptyHeart}
          title="like"
          alt="like"
          className="h-6 w-auto cursor-pointer"
          onClick={onLike}
        />
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
      <div className="p-4">
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
    </div>
  );
}
