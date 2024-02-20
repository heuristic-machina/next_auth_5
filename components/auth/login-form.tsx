import { CardWrapper } from '@/components/auth/card-wrapper';
import { Header } from '@/components/auth/header';


export const LoginForm = () => {

    return (
        <CardWrapper 
            headerLabel='Welcome back'
            backButtonLabel="Don't have an account?"
            backButtonHref='auth/register'
            showSocial
        > 
        </CardWrapper>

        

    );
}

export default LoginForm;