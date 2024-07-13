import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Layout from "./components/Layout";

export default function App() {
  return (
    <header>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <Layout />
      </SignedIn>
    </header>
  )
}