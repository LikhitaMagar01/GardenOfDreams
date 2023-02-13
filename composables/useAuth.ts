import { ISession } from "~~/types/ISession"

export async function registerWithEmail(
  username: string,
  name: string,
  email: string,
  password: string
):Promise<FormValidation>{
  try {
    const res = await $fetch<ISession>('/api/auth/register', {
      method: 'POST',
      body: { username, name, email, password }
    })
if(res){
    useState('user').value = res
    await navigateTo('/dashboard')
}
  }
  catch(e){
    console.log('error:' + e.toString())
  }
}