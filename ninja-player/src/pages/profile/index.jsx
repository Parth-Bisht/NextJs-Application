import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import app from "@/shared/FirebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import PostItem from "@/components/Home/PostItem";
import Toast from "@/components/Toast";

const index = () => {
  const [db, setDb] = useState();
  const { data: session } = useSession();
  const [userPost, setUserPost] = useState([]);
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    getUserPost();
  }, [session]);

  useEffect(() => {
    const db = getFirestore(app);
    setDb(db);
  }, []);

  const getUserPost = async () => {
    if (session?.user.email) {
      const q = query(
        collection(db, "posts"),
        where("email", "==", session?.user.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        setUserPost((userPost) => [...userPost, data]);
      });
    }
  };
  const onDeletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    setShowToast(true);
    window.location.reload();
  };
  return (
    <div className="p-6 mt-8">
      {showToast ? (
        <div className="absolute top-10 right-10">
          <Toast
            msg={"Post Deleted Successfully"}
            closeToast={() => setShowToast(false)}
          />
        </div>
      ) : null}
      <h2
        className="text-[35px] 
      font-extrabold text-blue-500"
      >
        Profile
      </h2>
      <p>Manage Your Post</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10">
        {userPost &&
          userPost.map((item, ind) => (
            <div key={ind}>
              <PostItem post={item} modal={true} />
              <button
                className="bg-red-400 w-full p-1 mt-1
        rounded-md text-white"
                onClick={() => onDeletePost(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default index;
