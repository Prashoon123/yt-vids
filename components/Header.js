import { signOut } from "@firebase/auth";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Menu from "./Menu";

function Header() {
  const router = useRouter();
  const location = router.pathname;
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="sticky z-50 top-0 w-full p-4 flex justify-between items-center bg-black">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="h-16 w-16 object-contain cursor-pointer" />
      </Link>

      <div className="flex justify-between">
        <Link href="/home">
          <button
            className={`navbar-button ${
              location === "/home" && "bg-[#00C85F] p-2 px-4 text-black"
            }`}
          >
            Home
          </button>
        </Link>

        {user ? (
          <Link href="/videos">
            <button
              className={`navbar-button ${
                location === "/videos" && "bg-[#00C85F] p-2 px-4 text-black"
              }`}
            >
              My Videos
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button
              className={`navbar-button ${
                location === "/login" && "bg-[#00C85F] p-2 px-4 text-black"
              }`}
            >
              Login
            </button>
          </Link>
        )}

        <Link href="/donate">
          <button
            className={`navbar-button ${
              location === "/donate" && "bg-[#00C85F] p-2 px-4 text-black"
            }`}
          >
            Donate
          </button>
        </Link>

        {user && (
          // <a title="Click to logout" className="cursor-pointer">
          //   <img
          //     src={user?.photoURL}
          //     alt="avatar"
          //     className="h-10 w-10 object-contain rounded-full m-2 mx-4"
          //     onClick={() => signOut(auth)}
          //   />
          // </a>

          <Menu />
        )}
      </div>
    </header>
  );
}

export default Header;
