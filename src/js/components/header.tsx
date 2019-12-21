import React from "react";
import useSWR from "swr";

import fetcher, { USER_ENDPOINT } from "../utils/api";
import { UserType } from "../types/user";

type Props = {};

export default function Header(props: Props) {
  // @ts-ignore
  const userResponse = useSWR<Array<UserType>>(USER_ENDPOINT, fetcher, {
    suspense: true
  });

  return (
    <header className="py-4 border-gray-200 border-b shadow">
      <div className="flex justify-between max-w-xl mx-auto items-center">
        <span className="text-xl font-semibold">Social Pixi</span>
        <span className="font-medium">{userResponse.data.name}</span>
      </div>
    </header>
  );
}
