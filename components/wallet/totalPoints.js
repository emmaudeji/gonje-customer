import React from 'react';

const TotalPoints = () => {
    return (
        <div className="col-xl-4 col-lg-12">
            <div className="total-points">
                <strong>Total Points</strong>
                <div className="points">
                    <span>1000</span>
                </div>
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#card-details">Send Points to Wallet</button>
            </div>
        </div>
    );
};

export default TotalPoints;