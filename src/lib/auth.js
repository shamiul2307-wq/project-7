

 
 
 
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URL

//if (!mongoUri) {
  //throw new Error(
    //"MONGODB_URI is missing. Check your .env.local file."
   //);
 //}

const client =   MongoClient(mongoUri);
const db = client.db("bazardor");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});

