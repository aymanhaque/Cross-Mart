import { SignupForm } from "@/components/SignupForm"

export default function Signup() {
  return (
    <div className="invert flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm/>
      </div>
    </div>
  )
}
