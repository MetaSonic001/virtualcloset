import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Login() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <img
        alt="Image"
        className="absolute inset-0 object-cover w-full h-full"
        src="/images/micheile-henderson-FpPcoOAk5PI-unsplash.jpg"
        style={{
          aspectRatio: "1440/600",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6">
          <div className="grid max-w-md px-4 text-center gap-4">
            <div className="space-y-2 text-black">
              <h1 className="text-4xl font-semibold tracking-tighter text-black">Welcome to VOGUE</h1>
              <p className="text-black-500 dark:text-black-400">
                Enter your username and password to access your account
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-black">Username</Label>
                <Input id="username" placeholder="Username" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">Password</Label>
                <Input id="password" placeholder="Password" required type="password" />
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" type="submit">Login</Button>
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
              <div className="text-sm text-black">
                <Link href="#">
                  <span className="underline">Forgot your password?</span>
                </Link>
              </div>
              <div className="text-sm text-black">
                Not have an account?
                <Link href="#">
                  <span className="underline">Create an account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
