import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const { subscriptionTier } = await request.json();
  
  // Validate subscription tier
  const validTiers = ["free", "premium", "enterprise"];
  if (!validTiers.includes(subscriptionTier)) {
    return NextResponse.json({ error: "Invalid subscription tier" }, { status: 400 });
  }
  
  // Update user subscription
  const updatedUser = await auth.api.updateUser({
    headers: request.headers,
    body: {
      subscriptionTier,
    },
  });
  
  return NextResponse.json(updatedUser);
}
