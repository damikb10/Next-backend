import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";

export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  return NextResponse.json({
    user: {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      subscriptionTier: session.user.subscriptionTier,
    }
  });
}
