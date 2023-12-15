// const Stripe = require('stripe');

import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { items, user_id, total, token } = await req.body;
    // console.log(
    //   items?.map((item) => {
    //     return {
    //       currency: "aud",
    //       name: item.productName,
    //       unit_amount: item.productPrice,
    //       product_id: item.productID,
    //       quantity: item.productQuantity,
    //     }
    //   })
    // );
    const shop_id = items?.[0]?.shop_id;
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
              },
              unit_amount: item.productPrice * 100,
            },
            quantity: item.productQuantity,
          };
        }),
        metadata: {
          user_id: user_id,
          shop_id: shop_id,
          transaction_type: "debit",
          transaction_description: "",
          transaction_title: "customer checkout",
          coupon_id: "",
          total: total,
          payment_gateway: "stripe",
          token: token,
          latitude: "",
          longitude: "",
          cart_items: JSON.stringify(items?.map((item) => {
            return {
              currency: "aud",
              name: item.productName,
              amount: item.productPrice,
              product_id: item.productID,
              quantity: item.productQuantity,
            };
          })),
        },
        success_url: `${req.headers.origin}/pantry`,
        cancel_url: `${req.headers.origin}/checkout`,
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
