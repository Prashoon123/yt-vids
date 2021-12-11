import colors from "../config/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FadingCircle } from "better-react-spinkit";

function Loading() {
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.replace("/home");
    } else {
      if (loading === false) {
        router.replace("/home");
      }
    }
  }, [user, loading]);

  return (
    <div className="h-screen flex justify-center items-center">
      <FadingCircle size={50} color={colors.primary} />
    </div>
  );
}

export default Loading;
