'use server';
import { redirect } from "next/navigation";
// useActionState przekazuje DWA argumenty: poprzedni stan i dane formularza
export async function submitContact(prevState, formData) {
    const email = formData.get('email');

    if (!email || !email.includes('@')) {
        return { success: false, message: 'Podaj poprawny adres e-mail.' };
    }



    redirect ('/contact/dziekujemy')
   
}