import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGoogle } from "react-icons/fa"

export function SignupCard() {
  return (
    <Card className="max-w-sm dark w-3xl opacity-90">
      <CardHeader>
        <CardTitle>Sign up to your account</CardTitle>
        <CardDescription>
          Enter your email below to Sign up to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Log In</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="mb-2" htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" placeholder="John" required />
              </div>
              <div>
                <Label className="mb-2" htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <Button variant="outline" className="w-full">
          Sign up with Google <FaGoogle />
        </Button>
      </CardFooter>
    </Card>
  )
}
