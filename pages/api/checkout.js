import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const endpointSecret =
  "whsec_6818b2f7a9a636a8d76f1eb89ad1e98431f885fbcf153236857ffa9997e1e52b";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = await req.text();
      const signature = req.headers["stripe-signature"];
      const event = stripe.webhooks.constructEvent(
        body,
        signature,
        endpointSecret
      );
      console.log(
        "Verified==========================",
        "RAWBODY===",
        req.body,
        "SIGNATURE===",
        signature
      );
      if (event.type === "checkout.session.completed") {    
        console.log(event.data.object.metadata.itinerary_id);
      }
      return res.status(200).json({ result: event, ok: true });

    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.status(400).send("Webhook Error: Invalid signature");
    }
    console.log("=========", req.body);
    res.status(200).json({ success: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
