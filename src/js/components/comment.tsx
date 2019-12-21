import React from "react";

import { CommentType } from "../types/comment";

type Props = {
  comment: CommentType;
};

export default function Comment(props: Props) {
  let { comment } = props;

  return (
    <div className="my-2">
      <span className="mr-1 font-semibold">{comment.user.name}</span>
      {comment.comment}
    </div>
  );
}
