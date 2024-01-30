import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link class="nav-link active" to="/">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/photos">
              Photos
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/albums">
              Albums
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/todos">
              ToDos
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/comments">
              Comments
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
