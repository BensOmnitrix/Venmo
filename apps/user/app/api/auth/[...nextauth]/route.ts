import NextAuth from "next-auth";
import { NEXT_AUTH_PROVIDERS } from "../../../lib/auth";

export const handler = NextAuth(NEXT_AUTH_PROVIDERS);

export const GET = handler;
export const POST = handler;