import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';


const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-800 to-slate-800'>
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-zinc drop-shadow-md",
          font.className
          )}>
          Auth 🔒
        </h1>
        <p className='text-amber-600 text-lg mt-8'>
          A simple authentication service
        </p>
        <LoginButton >
          <Button className='mt-8' size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
