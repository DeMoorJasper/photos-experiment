import React from "react";

// @ts-ignore
import emptyHeart from "../../icons/heart-empty.svg";
import filledHeart from "../../icons/heart-filled.svg";

type User = {
  name: string;
};

type Comment = {};

type Props = {
  imageUri: string;
  description: string;
  user: User;
  comments: Array<Comment>;
  likes: number;
  liked: boolean;
  onLike: () => any;
};

export default function Post(props: Props) {
  let { imageUri, description, comments, user, liked } = props;

  return (
    <div className="border border-gray-200 shadow rounded overflow-hidden my-8">
      <div className="p-4 flex justify-between">
        <span className="font-semibold capitalize">{user.name}</span>
        <img
          src={liked ? filledHeart : emptyHeart}
          title="like"
          alt="like"
          className="h-6 w-auto"
        />
      </div>
      <div className="border-t border-b border-gray-100">
        <img
          src={imageUri}
          alt={description}
          title={description}
          className="w-full h-auto"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="mr-2 font-semibold">{user.name}</span>
          {description}
        </div>
        <div>TODO...</div>
      </div>
    </div>
  );
}
