import { Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
export default function LandingPage() {
  return (
    <>
      <h1 className="flex items-center gap-2">
        <Rocket size={40} className="text-blue-300" /> Lorem Ipsum
      </h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
        tenetur.
      </p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}
