import { Suspense } from "react";
import { lazy } from "react";
import Loader from "components/Loader";

const Materials = lazy(() => import("./Materials"));

export const MaterialsPage = () => (
  <Suspense fallback={<Loader />}>
    <Materials />
  </Suspense>
);

export default MaterialsPage;
