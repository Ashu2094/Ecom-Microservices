import { serve } from '@hono/node-server'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { Hono } from 'hono'
import { shouldBeUser } from './middleware/authMiddleware.js'
import stripe from './utils/stripe.js'



const app = new Hono()
app.use('*',clerkMiddleware())

app.get('/', (c) => {
  return c.text('Payment Service Works!')
})

// app.post('/create-stripe-product', async (c) => {
//   const res = await stripe.products.create({
//     id:"123",
//     name: 'My Product',
//     default_price_data:{
//         currency: 'usd',
//         unit_amount: 10 * 100,
//     }
//     });
//     return c.json(res)
// });

// app.get('/stripe-product-price', async (c) => {
//   const res = await stripe.prices.list({
//     product:"123",
//     });
//     return c.json(res)
// });

const start = async () => {
    try{
        serve(
        {
            fetch: app.fetch,
            port: 8002
        }, (info) => {
            console.log(`Payment Service is running on port no 8002.`)
        }
    );
    }catch(error)
    {
        console.log(error);
       // ProcessingInstruction.exit(1);
    }
};

start();