import { Rocket } from "lucide-react";
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
      <div className="flex gap-2 items-center">
        <Button>Log In</Button>
        <Button variant={"outline"}>Sign Up</Button>
        
      </div>
    </>
  );
}
