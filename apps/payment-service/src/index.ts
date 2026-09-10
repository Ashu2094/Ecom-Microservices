import { serve } from '@hono/node-server'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { Hono } from 'hono'
import { shouldBeUser } from './middleware/authMiddleware.js'

const app = new Hono()
app.use('*',clerkMiddleware())

app.get('/', (c) => {
  return c.text('Payment Service Works!')
})

app.get('/test',shouldBeUser, (c) => {
  
  return c.json({
    message: 'Payment Service is Authenticated!!' ,
    userId: c.get('userId')   
  })
})

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