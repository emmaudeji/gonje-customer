// const Stripe = require('stripe');

import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const successURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/pantry"
    : "https://customer.gonje.com.au/pantry";
const cancelURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/checkout"
    : "https://customer.gonje.com.au/checkout";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {items, user_id} = await req.body;
    const shop_id= items?.[0]?.shop_id;
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NTtVaCQ7rc17WeifUGwhIw6" },
          { shipping_rate: "shr_1NTtXGCQ7rc17Weigz5iCMyC" },
        ],

        line_items: items?.map((item) => {
          return {
            price_data: {
              currency: "aud",
              product_data: {
                name: item.productName,
                // images: '',
              },
              unit_amount: item.productPrice * 100,
            },
            // adjustable_quantity: {
            //   enabled:false,
            //   minimum: 1,
            // },
            quantity: item.productQuantity,
          };
        }),
        metadata: {
          user_id:user_id, 
          shop_id:shop_id
        },
        success_url: successURL,
        cancel_url: cancelURL,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.status(404).json("Method not allowed");
  }
}
