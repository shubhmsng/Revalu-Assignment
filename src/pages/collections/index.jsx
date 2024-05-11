import { Suspense } from "react";
import { lazy } from "react";
import Loader from "components/Loader";

const Collections = lazy(() => import("./Collections"));

const CollectionsPage = () => (
  <Suspense fallback={<Loader />}>
    <Collections />
  </Suspense>
);

export default CollectionsPage;
