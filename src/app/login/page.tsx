import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <div className="bg-background flex flex-col min-h-screen items-center justify-center gap-6  md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
