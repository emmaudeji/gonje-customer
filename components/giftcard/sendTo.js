import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const SendTo = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const email = users?.email || "";
    const phone = users.address ? users.address[0]?.address[0]?.phone :"hsdjgf"

    return (
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="gift-wrap">
                <div className="top-heading">
                    <h3>Send to</h3>
                </div>
                <div className="content mt-3">
                    <p>Gift Card will be emailed to</p>
                    <strong>{email}</strong><br/>
                    <strong>{phone}</strong>
                    <p>Lorem ipsumdoller salad has to be made with tomatoes only?</p>
                </div>
            </div>

        </div>
    );
};


export default SendTo;