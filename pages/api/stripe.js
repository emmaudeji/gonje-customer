const Stripe = require('stripe');


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function  handler(req, res) {
    if (req.method === 'POST') {
      const items = await req.body

    try {

      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1NTtVaCQ7rc17WeifUGwhIw6' },
          { shipping_rate: 'shr_1NTtXGCQ7rc17Weigz5iCMyC' },
        ],
        
        line_items: items?.map((item) => {
          
          return {
            price_data: { 
              currency: 'aud',
              product_data: { 
                name: item.name,
                // images: '',
              },
              unit_amount: item.price * 100,
            },
            // adjustable_quantity: {
            //   enabled:false,
            //   minimum: 1,
            // },
            quantity: item.quantity
          }
        }),
        success_url: `http://localhost:3000/checkout`,
        cancel_url: `http://localhost:3000/checkout`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);

    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }

    } else {
      res.status(404).json('Method not allowed')
    }
}