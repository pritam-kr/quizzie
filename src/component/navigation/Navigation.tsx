import React from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="right-side">
        <ul className="center">
          <li>
            <a href="/Pages/login.html" className="links">
              <button className="btn btn-primary">Login</button>
            </a>
          </li>
          <li>
            <a href="#j" className="center">
              <span className="user-name links">Pritam@123</span>
              <img
                src="/assets/user.png"
                alt=""
                className="avatar img-responsive img-rounded avatar-ex-small"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navigation };
