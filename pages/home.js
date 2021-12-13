import Benefit from "../components/Benefit";
import Header from "../components/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Header />

      <div className="flex items-center justify-center m-2 mt-4">
        <div>
          <h1 className="text-4xl font-bold w-96">
            Save your favorite YT Videos
          </h1>
          <p className="mt-4 text-lg">Like this video is my favorite!</p>
        </div>
        <iframe
          width="650"
          height="350"
          src="https://www.youtube.com/embed/4Tm6Z1y3h94"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>

      <div className="flex-col flex items-center w-screen justify-center mt-24">
        <div className="flex flex-row">
          <Benefit benefit="Free Forever" />
          <Benefit benefit="No Ads" />
          <Benefit benefit="No Interruptions" />
        </div>
        <Benefit benefit="Add videos with just a few clicks" single />
      </div>

      <div className="mt-14 m-4">
        {!user ? (
          <div className="flex justify-center items-center">
            <div className="w-1/5 flex justify-center items-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                  className="relative bg-[#00C85F] text-white p-5 rounded-full"
                  onClick={() => router.push("/login")}
                >
                  Login to get started
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="w-1/5 flex justify-center items-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                  className="relative bg-[#00C85F] text-white p-5 rounded-full"
                  onClick={() => router.push("/videos")}
                >
                  C'mon add some videos
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
