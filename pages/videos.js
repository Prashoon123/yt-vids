import Header from "../components/Header";
import Video from "../components/Video";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import FadingCircle from "better-react-spinkit/dist/FadingCircle";
import colors from "../config/colors";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

function Videos() {
  const [user, loading, error] = useAuthState(auth);
  const [videoUrl, setVideoUrl] = useState("");
  const [videos] = useCollection(
    collection(db, "users", user?.uid || "1", "videos")
  );
  const router = useRouter();

  useEffect(() => {
    if (loading === false) {
      if (!user) {
        router.push("/login");
      }
    }
  }, [loading, user]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <FadingCircle size={50} color={colors.primary} />
      </div>
    );
  }

  const addVideo = async (e) => {
    e.preventDefault();

    const videoId = videoUrl.split("/");

    if (!videoId[3]) {
      return toast.error("The video URL is invalid!");
    }

    await addDoc(collection(db, "users", user?.uid, "videos"), {
      videoUrl: `https://youtube.com/embed/${videoId[3]}`,
      createdBy: {
        displayName: user?.displayName,
        email: user?.email,
        uid: user?.uid,
        photoURL: user?.photoURL,
      },
    }).then(() => {
      setVideoUrl("");

      toast.success("Added the video successfully!");
    });
  };

  return (
    <div>
      <Header />

      <div>
        <form onSubmit={addVideo}>
          <div className="m-6 flex justify-center items-center flex-col">
            <label for="videoUrl" className="text-sm font-medium mb-2">
              Enter video url
            </label>
            <input
              type="text"
              id="videoUrl"
              placeholder="https://youtu.be/4Tm6Z1y3h94"
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white rounded-lg focus:ring-2 outline-none focus:ring-green-400 focus:border-green-500 block w-1/4 p-2.5"
              required={true}
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <center>
            <button
              type="submit"
              className="text-black bg-[#00C85F] focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center self-center"
            >
              Submit
            </button>
          </center>
        </form>
      </div>

      <div className="flex justify-center items-center mt-6 flex-col m-2">
        {videos?.docs?.length > 0 && (
          <div className="bg-black p-6 rounded-xl">
            {videos?.docs?.map((video) => (
              <Video videoUrl={video?.data()?.videoUrl} id={video?.id} />
            ))}
          </div>
        )}
      </div>

      <Toaster />
    </div>
  );
}

export default Videos;
