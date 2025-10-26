import { LoginForm } from "@/components/LoginForm"

export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-white dark:bg-zinc-950">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
