import React, { Suspense } from "react";

import OverviewPage from "./pages/overview";
import Header from "./components/header";
import Loader from "./components/loader";

type Props = {};

export default function App(props: Props) {
  return (
    <div>
      <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center"><Loader /></div>}>
        <Header />
        <OverviewPage />
      </Suspense>
    </div>
  );
}
