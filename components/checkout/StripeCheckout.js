import { useState } from 'react'

import getStripe from  '../../util/getStripe'



const StripeCheckout =  ({amount, deliveryFee}) => {
  const items = [
    {
      price: amount,
      quantity: 1,
      name: 'Total Amount'
  },
  {
    price: deliveryFee,
    quantity: 1,
    name: 'Delivery Fee'
  }
  
  ]
    // const router = useRouter();
    const [stripError, setStripError] = useState(false)
    const [loading, setLaoding] = useState(false)

// === with serverside and client integration ====\ 
    
  const redirectToCheckout = async () => {
      setLaoding(true)

      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
      })

      const data = await response.json()
      if (data.statusCode) {
        console.log('SRIPE ERROR',response.json())
        return
      };
      
      console.log('DATAAA==', data)
      const stripe = await getStripe();
      const g = await stripe.redirectToCheckout({sessionId: data.id})
      if(g.error) setStripError(error.message)

      localStorage.setItem('Stripe_Results', JSON.stringify(g));
      localStorage.setItem('user', JSON.stringify({a: 'emmma', s: "udejo"}));

      setLaoding(false)
      
    }

  return (
    <div onClick={redirectToCheckout} 
    disabled={loading}
    className='w-full p-3 text-center rounded-lg bg-blue-900'> {loading ? "loading..." : "Stripe Pay"} 
    </div>
  )
}

export default StripeCheckout