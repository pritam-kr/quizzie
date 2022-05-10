import {
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { User } from "firebase/auth";
import toast from "react-hot-toast";



export const useFirebase = () => {

  //Sending users info to firebase 
  const createUserCollection = async (
    user: User,
    userInfo: { firstName: string; lastName: string }
  ) => {
    if (!user) return;

    const userRef = doc(db, `users/${user.uid}`);

    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      const { email } = user;
      const { firstName, lastName } = userInfo;

      try {
        setDoc(userRef, {
          email,
          firstName,
          lastName,
          createdAt: new Date(),
        }).then((res) => console.log(res));
      } catch (error) {
        toast.error(`Error occured while creating user collection ${error}`, { position: "top-right" });
      }
    }
  };

  // Getting current users from firebase 
  const getUserInfo = async (uid: string) => {
    if (!uid) return;

    try {
      const userRef = doc(db, `users/${uid}`);

      const snapshot: any = await getDoc(userRef);
      const email: string = snapshot._document.data.value.mapValue.fields.email.stringValue;
      const firstName: string = snapshot._document.data.value.mapValue.fields.firstName.stringValue;
      const lastName: string = snapshot._document.data.value.mapValue.fields.lastName.stringValue;

      if (snapshot) {
        localStorage.setItem("username", JSON.stringify({ email: email, firstName: firstName, lastName: lastName }));
      }

      if (snapshot.exists()) {
        return snapshot.data()
      }
    } catch (err) {

      toast.error("Error occured while fetching user info in useFirebase.", { position: "top-right" })
    }
  };


  //Leader board 
  type leaderBoardType = {
    email: string;
    firstName: string;
    lastName: string;
    score: number;
  }

  const setLeaderBoardData = async (data: leaderBoardType) => {
    const leaderBoardData = data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const leaderBoardRef = await addDoc(collection(db, "leaderBoard"), leaderBoardData);
  }

  return { createUserCollection, getUserInfo, setLeaderBoardData };
};
