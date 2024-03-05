import React from 'react';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label'; 

const Page = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/images/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg')" }}
    >
      <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8">
        <div className="w-full max-w-screen-sm space-y-6">
          <div className="space-y-2">
            <div id="signup">
              <h2 className="text-2xl font-bold py-8">Sign Up</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Name</Label>
                  <Input id="signup-name" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" placeholder="m@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                  <Input id="signup-confirm-password" type="password" />
                </div>
                <Button className="w-full">Sign Up</Button>
              </div>
            </div>
            <div className="text-center text-sm">
              Already have an account? Switch to{' '}
              <Button variant="underline" className="mx-1 p-0 rounded-none border-0 h-8 min-w-0">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
