import { metadata } from "@/app/layout";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});
export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.error();
  }

  const text = await request.text();

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY,
  );
  if (event.type === "checkout.session.completed") {
    //const session = event.data.object as Stripe.Checkout.Session;

    const sessionWithLineItens = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      { expand: ["line_items"] },
    );

    const lineItems = sessionWithLineItens.line_items;
    console.log(lineItems)

    //console.log({ metadata: session.metadata });
  }
  return NextResponse.json({ received: true });
};