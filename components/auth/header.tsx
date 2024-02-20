import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const font = Poppins({
    subsets: ['latin'],
    weight: ['600'],
  });

interface HeaderProps {
    label: string;
}

export const Header = ({
    label,
}: HeaderProps) => {
    return (
        <div className=
            "w-full flex-col gap-y-4 items-center justify-center text-5xl font-semibold text-zinc drop-shadow-md">
                <h1 className={cn('text-5xl font-semibold', font.className
                )}>
                    Auth 🔒
                </h1>
                <p className='text-muted-foreground text-sm'>
                    {label}
                </p>
        </div>  
    )
}

export default Header;