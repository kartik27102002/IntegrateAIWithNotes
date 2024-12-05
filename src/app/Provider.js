"use client"
import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ConvexProvider, ConvexReactClient } from "convex/react";
function Provider({children}) {
    
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <div>
        <ConvexProvider client={convex}>
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
          {children}
          </PayPalScriptProvider>
          </ConvexProvider>;
    </div>
  )
}

export default Provider
