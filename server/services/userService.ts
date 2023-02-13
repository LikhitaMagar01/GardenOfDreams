import { getUserByEmail, getUserByUserName } from '~/server/database/repositories/userRepository';
type ExistsCheck = {
    value: boolean,
    message?: string
};

type RegistrationErrors = {
    emailError?: string
    usernameError?: string
}

export async function doesUserExists(email: string, username: string): Promise<ExistsCheck>{
    const hasEmail = getUserByEmail(email)
    const hasUserName = getUserByUserName(email)
    const emailExists = hasEmail !== null
    const userNameExists = hasUserName !== null
    
    const errors: RegistrationErrors = {}

    if(emailExists){
        errors.emailError = `This email, ${email}, is already registered`
    }

    if(userNameExists){
        errors.usernameError = `This username, ${username}, is already registered`
    }

    if(emailExists || userNameExists){
        const message = JSON.stringify(errors)
        return {value: true, message}
    }
    return { value: false }
}