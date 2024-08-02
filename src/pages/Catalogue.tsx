import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { useLoaderData } from "react-router";

export default function Catalogue() {
  // const data = useLoaderData();
  // console.log(data);
  return (
    <section>
      <Breadcrumbs />
      <h1>Catalogue </h1>
    </section>
  );
}
