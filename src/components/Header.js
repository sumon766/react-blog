import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
              Posts
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/photos">
              Photos
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/albums">
              Albums
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
