import { Suspense } from "react";
import { lazy } from "react";
import Loader from "components/Loader";

const Elements = lazy(() => import("./Elements"));

const ElementsPage = () => (
  <Suspense fallback={<Loader />}>
    <Elements />
  </Suspense>
);

export default ElementsPage;
