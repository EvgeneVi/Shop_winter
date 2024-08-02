import { useLocation } from "react-router";

export default function Breadcrumbs() {
  const path = useLocation().pathname;
  const BCarr = path.split("/");
  // console.log(BCarr.slice(1, BCarr.length));
  // \.map((item, i) => item.length > 0 && item));
  return <div>Breadcrumbs</div>;
}
