import React, { Suspense } from "react";

import OverviewPage from "./pages/overview";
import Header from "./components/header";

type Props = {};

export default function App(props: Props) {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <OverviewPage />
      </Suspense>
    </div>
  );
}
