import { Link } from "react-router-dom";
import { FaBars, FaHouseUser } from "react-icons/fa";

export default function Header(props: any) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={() => props.setSidebar(!props.sidebar)}
      >
        <FaBars />
      </button>

      <div className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <h1 className="h3 mb-0 text-gray-800">Dashoard</h1>
      </div>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FaHouseUser />
            <span className="mx-2 d-none d-lg-inline text-gray-600 small">
              Username
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
