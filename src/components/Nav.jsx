import React from "react";
import { Button } from "./Button";
import { connect } from "react-redux";
import { openModal } from "../reducers/actions";

const NavBar = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only"></span>

              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="pull-left" href="#">
              <img className="logo1" src="royalplace3.png" />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li>
                <a href="#">The Process</a>
              </li>
              <li>
                <a href="#">The house</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About Botello <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">item1</a>
                  </li>
                  <li>
                    <a href="#">item2</a>
                  </li>
                  <li>
                    <a href="#">item3</a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="navbar-form navbar-right" role="search">
              <div className="form-group">
                {props.isUserLogged ? (
                  <span className="user-name">{props.userName}</span>
                ) : (
                  <Button
                    title="Login"
                    className="btn btn-default"
                    onClick={() => props.openModal()}
                  />
                )}
              </div>
              <Button title="Get An Offer" className="btn btn-light" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
});

const mapStateToProps = (state) => ({
  userName: state.reducer.userName,
  isUserLogged: state.reducer.isUserLogged,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
