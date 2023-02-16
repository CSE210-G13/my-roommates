import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export function getAuthUser() {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    return [user, loading]
}