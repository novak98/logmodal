import React from "react";
import { Button } from "./Button";

export const Containerbg = (props) => {
  return (
    <div className="container2">
      <div className="image-text">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <div className="headings">
              <h1 className="text-left">Find More About Botello House</h1>
              <br />
              <h4 className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                fringilla at libero at finibus.
              </h4>
            </div>
            <Button
              type="button"
              className="btn btn-light"
              title="Get An Offer"
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
