'use client'
import * as z from 'zod';
import { register } from '@/actions/register';
import { useForm } from 'react-hook-form';
import { useTransition, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { FormError } from  '@/components/form-error';
import { FormSuccess } from  '@/components/form-success';

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            register(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        });
    };

    return (
        <CardWrapper 
            headerLabel='Create an account'
            backButtonLabel="Already have an account?"
            backButtonHref='/auth/login'
            showSocial
        >
            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder='test@example.com'
                                    type='email'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder='********'
                                    type='password'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    {/* <FormError message='Something went wrong!'/> */}
                    <FormError message={error}/>
                    {/* <FormSuccess message='register successful!'/> */}
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPending}
                    type='submit'
                    className='w-full'
                    >
                        Register
                    </Button>
                </form>
            </Form>
        
        
        {/* <p className=' text-sm text-zinc-700 font-semibold'>register</p> */}
        </CardWrapper>

        

    );
}

export default RegisterForm;