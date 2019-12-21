import { UserType } from "./user";
import { CommentType } from "./comment";

export type PostType = {
  id: number;
  imageUri: string;
  description: string;
  user: UserType;
  comments: Array<CommentType>;
  likes: number;
  liked: boolean;
};
