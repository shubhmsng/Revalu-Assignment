import { Suspense } from "react";
import { lazy } from "react";
import Loader from "components/Loader";

const Manufacturers = lazy(() => import("./Manufacturers"));

export const ManufacturersPage = () => (
  <Suspense fallback={<Loader />}>
    <Manufacturers />
  </Suspense>
);

export default ManufacturersPage;
