import React from 'react';
import { Button } from './Button';

export const FirstContainer = () => {
    return (
    <div className="container-center">
            <div className="row">
                <div className="col-md-12 offset-md-3">
                  <h1 className="text-center">Feel amazing in just square meters</h1>
                  <br/>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla at libero at finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla at libero at finibus. Lorem ipsum dolor sit amet</p><br/>
                  {/* <button type="button" className="btn btn-primary">Get An Offer</button> */}
                  <Button className="btn btn-primary" title="Get An Offer" />
                </div>
            </div>
        </div>
        
    )
};
