import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs";
import ConnectToDb from "@/database";
import User from "@/model/user";
import { Account ,User as NextAuthUser } from "next-auth";


async function login(credentials: any) {
  try {
    ConnectToDb();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Wrong Creditinals");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong password");
    return user;
  } catch (error) {
    console.log(error)
  }
}




export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      

      async authorize(credentials: any) {
        await ConnectToDb();
        try {
          console.log(credentials.email);
          const user = await login(credentials);
          return user;
        } catch (err: any) {
          console.log(err, "error");
        }
      },

    }),

    GithubProvider({
        clientId:'c4394b9fb48abaa1a854' || "",
        clientSecret:'bdf06a4945746fabd201ac1beb0d96755dbac48f'|| "",
      }),
    GoogleProvider({
        clientId: "556452094863-huha8jovbk754q4jlmvahp7b90vbbs5s.apps.googleusercontent.com"|| "",
        clientSecret: "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" || ""
      })
  ],
  callbacks: {
    async signIn({ user, account }:{user:NextAuthUser,account:Account}) {

      
     if(account?.provider=="credentials"){
        return true
     }
     if(account?.provider=="github"){
        await ConnectToDb()
        try{
            const existingUser=await User.findOne({email:user.email})
            if(!existingUser){
                const newUser=await User.create({email:user.email})

                return true
            }
            return true

        }catch(error){
            console.log(error)
        }
     }
     if(account?.provider=="google"){
        await ConnectToDb()
        console.log(user,account)
        try{
            const existingUser=await User.findOne({email:user.email})
       
            if(!existingUser){
                const newUser=await User.create({email:user.email})

                return true
            }
            return true

        }catch(error){
            console.log(error)
        }
     }
    },
}
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };