 import { FastifyRequest, FastifyReply } from "fastify";
import  {clerkPlugin, getAuth } from "@clerk/fastify";
// import Clerk from "@clerk/fastify";
import type { CustomJwtSessionClaims } from "@repo/types";



declare module "fastify"{    
    interface FastifyRequest{
        userId?: string;    
    }
}



export const shouldBeUser  = async (request:FastifyRequest,reply:FastifyReply)=>{
    const {  userId } = getAuth(request)

    // If user isn't authenticated, return a 401 error
    if (!userId) {
      return reply.status(401).send({ message: 'You are not logged in!' });
    }    

    request.userId = userId;

}


export const shouldBeAdmin  = async (request:FastifyRequest,reply:FastifyReply)=>{
    const { userId, sessionClaims } = getAuth(request);

    // If user isn't authenticated, return a 401 error
    if (!userId) {
      return reply.status(401).send({ message: 'You are not logged in!' });
    }   
    
    const claims  = sessionClaims as CustomJwtSessionClaims;
    if (claims.metadata?.role !== 'admin') {
        return reply.status(403).send({ message: 'You are not authorized to access this resource!' });
    }

    request.userId = userId;

}