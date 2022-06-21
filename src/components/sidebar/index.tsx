import { Link } from "react-router-dom";
import { FaShopify, FaGripVertical, FaJediOrder } from "react-icons/fa";

// STYLING
import "./style.scss";

export default function Sidebar(props: any) {
  return (
    <>
      <ul
        className={`navbar-nav sidebar sidebar-dark accordion ${
          props.sidebar && "d-none"
        }`}
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-text mx-3">THE FRACTURES</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <FaGripVertical className="mx-3" />
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Interface</div>
        <li className="nav-item">
          <Link className="nav-link" to="/merch_details">
            <FaShopify className="mx-3" />
            <span>Merch</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/orders">
            <FaJediOrder className="mx-3" />
            <span>Orders</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
