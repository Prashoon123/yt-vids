import { TrashIcon } from "@heroicons/react/solid";
import { deleteDoc, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";

function Video({ videoUrl, id }) {
  const [user, loading, error] = useAuthState(auth);

  const deleteVideo = () => {
    const sure = confirm("Are you sure you want to delete this video?");
    if (sure === true) {
      deleteDoc(doc(db, "users", user?.uid, "videos", id));
    } else return;
  };

  return (
    <div className="bg-transparent border border-[#00C85F] p-4 m-4 mb-8 rounded-2xl">
      <div className="flex flex-row justify-center items-center">
        <TrashIcon
          className="h-6 w-6 mb-2 cursor-pointer"
          color="white"
          onClick={deleteVideo}
        />
      </div>

      <iframe
        width="650"
        height="350"
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default Video;
