import React from "react";

type Props = {
  onSubmit: (comment: string) => any;
  id: string
};

export default function CommentInput(props: Props) {
  let { onSubmit, id } = props;
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

  return (
    <div>
      <label htmlFor={id} className="sr-only">Comment</label>
      <input
        type="text"
        className="bg-gray-100 text-gray-900 shadow w-full p-2"
        placeholder="Comment..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        id={id}
      />
    </div>
  );
}
