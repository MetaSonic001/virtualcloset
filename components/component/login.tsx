
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LOGIN() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-1">
        <img
          alt="Image"
          className="object-cover"
          height="600"
          src="public\images\annie-spratt-lkvD9xlWdU0-unsplash.jpg"
          style={{
            aspectRatio: "1440/600",
            objectFit: "cover",
          }}
          width="1440"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid max-w-md px-4 text-center gap-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tighter">Welcome to VOGUE</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your username and password to access your account
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <Button className="w-full">Login</Button>
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
              <div className="text-sm">
                <Link className="underline" href="#">
                  Forgot your password?
                </Link>
              </div>
              <div className="text-sm">
                not have an account?
                <Link className="underline" href="#">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
