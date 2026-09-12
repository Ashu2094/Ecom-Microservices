import Fastify from "fastify";
// import {Clerk} from '@clerk/fastify'
import { clerkPlugin, getAuth } from "@clerk/fastify";
import { shouldBeUser } from "./middleware/authMiddleware.js";
import { connectOrderDB } from "@repo/order-db";
import { orderRoute } from "./routes/order.js";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const fastify = Fastify();
fastify.register(clerkPlugin)

fastify.get("/",(request,reply)=>{
    return reply.send("Order Endpoint Works");
})


fastify.get("/test",{preHandler: shouldBeUser},async (request,reply)=>{
    
    
    return reply.send({
      message: 'Order Service is Authenticated!',
      userId: request.userId
    })  
})

fastify.register(orderRoute);
const start = async() =>{
    try{
        await connectOrderDB();
        await fastify.listen({port: 8001})
        console.log("Order service is running on port 8001");
    } catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
};

start();