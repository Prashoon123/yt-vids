import Header from "../components/Header";
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider, auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const login = () => {
    signInWithPopup(auth, googleAuthProvider).then(async (authUser) => {
      const user = authUser.user;

      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
      });
    });
  };

  return (
    <div>
      <Header />

      <div className="flex justify-center items-center h-96">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button
            className="relative bg-[#00C85F] text-white p-5 rounded-full"
            onClick={login}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
