import React, { useEffect, useState } from "react";
import Data from "@/shared/Data";
import { useSession } from "next-auth/react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "@/shared/FirebaseConfig";

const Form = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const { data: session } = useSession();
  const [db, setDb] = useState();
  //   const db = getFirestore(app);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const db = getFirestore(app);
      setDb(db);
    }
  }, []);

  useEffect(() => {
    setInputs((values) => ({ ...values, userName: session.user.name }));
    setInputs((values) => ({ ...values, userImage: session.user.image }));
    setInputs((values) => ({ ...values, email: session.user.email }));
  }, [session]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await setDoc(doc(db, "posts", Date.now().toString()), inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          className="w-full mb-4 
        outline-blue-400 border-[1px] 
        p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description here"
        />

        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <select
          name="game"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        >
          <option disabled defaultValue>
            Select Game
          </option>
          {Data.GameList.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/gif, image/jpeg, image/png"
          className="mb-5 border-[1px] w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 w-full p-1 
rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
