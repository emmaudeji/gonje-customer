import {useState, useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
    BraintreePayPalButtons
} from "@paypal/react-paypal-js";


// import {
//     PayPalScriptProvider,
//     PayPalButtons,
//     BraintreePayPalButtons,
//     usePayPalScriptReducer
// } from "@paypal/react-paypal-js";


// // // This values are the props in the UI
// // const style = { label: "paypal", layout: "vertical" };
// // const amount = "2";

// // // Custom component to wrap the PayPalButtons and handle currency changes
// // const ButtonWrapper = ({ currency, clientToken }) => {
// //   // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
// //   // This is the main reason to wrap the PayPalButtons in a new component
// //   const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

// //   useEffect(() => {
// //     dispatch({
// //       type: "resetOptions",
// //       value: {
// //         ...options,
// //         currency: currency,
// //       },
// //     });
// //   }, [currency, dispatch, options]);

// //   return (
// //     <BraintreePayPalButtons
// //       style={style}
// //       disabled={false}
// //       fundingSource="" // Available values are: ["paypal", "card", "credit", "paylater", "venmo"]
// //       forceReRender={[style, amount, clientToken]}
// //       createOrder={function (data, actions) {
// //         return actions.braintree
// //           .createPayment({
// //             flow: "checkout",
// //             amount: amount, // Here change the amount if needed
// //             currency: "USD", // Here change the currency if needed
// //             intent: "capture",
// //             // enableShippingAddress: true,
// //             // shippingAddressEditable: false,
// //             // shippingAddressOverride: {
// //             //   recipientName: "Scruff McGruff",
// //             //   line1: "1234 Main St.",
// //             //   line2: "Unit 1",
// //             //   city: "Chicago",
// //             //   countryCode: "US",
// //             //   postalCode: "60652",
// //             //   state: "IL",
// //             //   phone: "123.456.7890",
// //             // },
// //           })
// //           .then((orderId) => {
// //             // Your code here after create the order
// //             console.log(data)
// //             return orderId;
// //           });
// //       }}
// //       onApprove={function (data, actions) {
// //         return actions.braintree.tokenizePayment(data).then((payload) => {
// //           // Your code here after capture the order
// //           console.log(JSON.stringify(payload));
// //         });
// //       }}
// //     />
// //   );
// // };

// // export default function PayPal() {
// //   const [clientToken, setClientToken] = useState(null);

// //   useEffect(() => {
// //     (async () => {
// //       const response = await (
// //         await fetch(
// //           "https://braintree-sdk-demo.herokuapp.com/api/braintree/auth"
// //         )
// //       ).json();
// //       setClientToken(response?.client_token || response?.clientToken);
// //     })();
// //   }, []);

// //   return (
// //     <>
// //       {clientToken ? (
// //         <div style={{ maxWidth: "750px", minHeight: "200px" }}>
// //           <PayPalScriptProvider
// //             options={{
// //               "clientId":
// //                 "AX68R3pqTsCdpQ64zdd7vzoVflgReYkfFuYHzVlMKT4OQlWlbD4RzVDdQ66KiWvHmWCgqoXFT5YFnrXk",
// //               "data-client-token": clientToken,
// //               components: "buttons",
// //               intent: "capture",
// //               vault: false,
// //             }}
// //           >
// //             <ButtonWrapper currency={"USD"} clientToken={clientToken} />
// //           </PayPalScriptProvider>
// //         </div>
// //       ) : (
// //         <h1>Loading token...</h1>
// //       )}
// //     </>
// //   );
// // }



// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, callOrderApi, walletBalance, deliveryFee, amount }) => {

    console.log('=====c', amount, deliveryFee)
    // const amount = amount
    // const currency = currency;
    const style = {"layout":"horizontal"};
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

export default function PayPal({deliveryFee, amount, callOrderApi, walletBalance}) {
    
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": process.env.NEXT_PUBLIC_PAYPAL_ID,
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency='USD'
                    showSpinner={false}
                    deliveryFee={deliveryFee}
                    amount={amount}
                    callOrderApi={callOrderApi}
                    walletBalance={walletBalance}
                />
			</PayPalScriptProvider>
		</div>
	);
}