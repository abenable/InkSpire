import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const Options = {
  providers: [
    CredentialsProvider({
      name: "Email",
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const { data, status } = await axios.post(
          "http://localhost:3001/auth/login",
          {
            email: credentials.email,
            password: credentials.password,
          }
        );
        if (status === 200) {
          const user = data.User;
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: true,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signup",
  },
};

const handler = NextAuth(Options);

export { handler as GET, handler as POST };
