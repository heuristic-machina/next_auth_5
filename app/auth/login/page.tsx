import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
  })

const LoginPage = () => {
    return (
        <div>
            <h1 className={cn(
          "text-6xl font-semibold text-zinc drop-shadow-md",
          font.className
          )}>Login</h1>
        </div>
    );
}

export default LoginPage;