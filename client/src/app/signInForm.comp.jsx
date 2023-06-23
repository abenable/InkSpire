'use client';
import { signIn } from 'next-auth/react';

export default function SignIn() {
    return (
        <div className="form-group">
            <button type="submit" onClick={()=>signIn()}>Sign In with Google</button>
     </div>
 )
}