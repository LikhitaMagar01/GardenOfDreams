import { CompatibilityEvent, sendError } from 'h3'
import { IUser } from '~~/types/IUser'
import bcrypt from 'bcrypt'
import { doesUserExists } from '~~/server/services/userService'
import { createUser } from '~~/server/database/repositories/userRepository'

export default async (event: CompatibilityEvent) => {
    const body = await useBody(event)
    const name = body.name
    const username = body.username
    const email = body.email
    const password = body.password
    const userExists = await doesUserExists(email, username)
    if(userExists.value === true){
        sendError(event, createError({
            statusCode: 422,
            statusMessage: userExists.message
        }))
    }

    const encryptedPassword: string = await bcrypt.hash(password, 10)

    const userData: IUser = {
        username,
        name,
        email,
        loginType: 'email',
        password: encryptedPassword
    }
    const user = await createUser(userData)
    return await makeSession(user, event)
}