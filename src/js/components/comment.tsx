import React from "react";

export type CommentType = {
  user: string,
  comment: string
};

type Props = {
  comment: CommentType
};

export default function Comment(props: Props) {
  let { comment } = props;

  return (
    <div className="my-2">
      <span className="mr-1 font-semibold">{comment.user}</span>{comment.comment}
    </div>
  );
}
