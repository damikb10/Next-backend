import { auth } from "../../../../lib/auth";
import { toNodeHandler } from "better-auth/nextjs";

export const { GET, POST } = toNodeHandler(auth);
