import React from "react";
import { Button } from "./Button";
import LoginModal from "./LoginModal";
import { connect } from "react-redux";

const FirstContainer = (props) => {
  return (
    <div className="container-center">
      {props.isModalOpen && <LoginModal />}
      <div className="row">
        <div className="col-md-12 offset-md-3">
          <h1 className="text-center">Feel amazing in just square meters</h1>
          <br />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fringilla at libero at finibus.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean fringilla at libero at finibus.
            Lorem ipsum dolor sit amet
          </p>
          <br />
          {/* <button type="button" className="btn btn-primary">Get An Offer</button> */}
          <Button className="btn btn-primary" title="Get An Offer" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
  isModalOpen: state.reducer.isModalOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstContainer);
