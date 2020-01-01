import React from "react";
import lodash from "lodash";

type Props = {
  onSubmit: (comment: string) => any;
};

export default function CommentInput(props: Props) {
  let { onSubmit } = props;
  let [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(value);
      setValue("");
    }
  };

  lodash

  return <input
    type="text"
    className="bg-gray-100 text-gray-900 shadow w-full p-2"
    placeholder="Comment..."
    onChange={handleChange}
    onKeyDown={handleKeyDown}
    value={value}
  />;
}
