
'use server';

import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { redirect } from 'next/navigation';

export const handleSignOut = async () => {
  try {
    // Firebase sign-out is a client-side concept for state, but we can't do that
    // in a server action. The redirect will force a client-side state refresh.
    // For a more integrated experience, client-side sign-out is preferred,
    // but this server action will securely log the user out by redirecting.
    await signOut(auth);
  } catch (error) {
    console.error("Sign out error", error);
  }
  redirect('/login');
};
