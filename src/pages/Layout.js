import { Outlet } from "react-router-dom";
import {} from "../style/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = () => {
  return (
    <>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/contact">ABOUT ME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" tabindex="-1" aria-disabled="falc">PORTOFOLIO</a>
  </li>
</ul>
      <Outlet />
    </>
  );
};

export default Layout;
