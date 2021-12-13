import Header from "../components/Header";
import Video from "../components/Video";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import FadingCircle from "better-react-spinkit/dist/FadingCircle";
import colors from "../config/colors";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Fuse from "fuse.js";

function SearchVideos() {
  const [user, loading, error] = useAuthState(auth);
  const [title, setTitle] = useState("");
  const [videos, videoLoading] = useCollection(
    collection(db, "users", user?.uid || "1", "videos")
  );
  const [searchedVideos, setSearchedVideos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (loading === false) {
      if (!user) {
        router.push("/login");
      }
    }
  }, [loading, user]);

  if (loading || videoLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <FadingCircle size={50} color={colors.primary} />
      </div>
    );
  }

  const searchVideos = async (e) => {
    e.preventDefault();

    const searchVideos = [];

    videos.forEach((video) => {
      searchVideos.push({
        title: video?.data()?.title,
        videoUrl: video?.data()?.videoUrl,
        id: video?.id,
      });
    });

    console.log(searchVideos);

    const fuse = new Fuse(searchVideos, {
      keys: ["title"],
      includeScore: true,
    });

    const results = fuse.search(!title ? " " : title);

    setSearchedVideos(results);
  };

  return (
    <div>
      <Header />

      <div>
        <form onSubmit={searchVideos}>
          <div className="m-6 flex justify-center items-center flex-col">
            <label for="title" className="text-sm font-medium mb-2">
              Enter the video's name
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white rounded-lg focus:ring-2 outline-none focus:ring-green-400 focus:border-green-500 block w-1/4 p-2.5"
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <center>
            <button
              type="submit"
              className="text-black bg-[#00C85F] focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center self-center"
            >
              Search
            </button>
          </center>
        </form>
      </div>

      <div className="flex justify-center items-center mt-6 flex-col m-2">
        {searchedVideos?.length > 0 && (
          <div className="bg-black p-6 rounded-xl">
            {searchedVideos?.map((video) => (
              <Video videoUrl={video?.item?.videoUrl} id={video?.item?.id} />
            ))}
          </div>
        )}
      </div>

      <Toaster />
    </div>
  );
}

export default SearchVideos;
