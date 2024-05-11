import { Suspense } from "react";
import { lazy } from "react";
import Loader from "components/Loader";

const Projects = lazy(() => import("./Projects"));

export const ProjectsPage = () => (
  <Suspense fallback={<Loader />}>
    <Projects />
  </Suspense>
);

export default ProjectsPage;
