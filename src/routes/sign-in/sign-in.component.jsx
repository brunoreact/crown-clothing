import { auth, provider, signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        //const response = await signInWithGooglePopup(auth, provider);  DESTRUCTURE RESPONSE TO THE INNER USER OBJ
        const {user} = await signInWithGooglePopup(auth, provider);
        const userDocRef = await createUserDocFromAuth(user);
    }

    return (
        <>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with GOOGLE</button>
        </>
    );
}

export default SignIn;