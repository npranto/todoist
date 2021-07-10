import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";

const getStore = () => firebase.firestore();

const initializeFirebase = () => firebase.initializeApp(firebaseConfig);

const getUserByUserId = (userId) => {
  return new Promise((resolve) => {
    if (!userId || typeof userId !== "string") {
      return resolve({
        error: "Please provide a valid `userId` to fetch user from firestore",
      });
    }

    return getStore()
      .collection("users")
      .where("userId", "==", userId)
      .get()
      .then((querySnapshot) => {
        JSON.stringify({ querySnapshot });
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify({ result: doc.data() })}`);
          // resolve({ success: true });
        });
      })
      .catch((error) => {
        console.error(error);
        resolve({
          error: `Unable to find userId [${userId}] from firestore`,
          details: error,
        });
      });
  });
};

const getAllUsers = () => {
  return new Promise((resolve) => {
    return getStore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify({ result: doc.data() })}`);
          // resolve({ success: true, doc });
        });
      })
      .catch((error) => {
        console.error(error);
        resolve({
          error: `Unable to get all users from firestore`,
          details: error,
        });
      });
  });
};

export { initializeFirebase, getUserByUserId, getAllUsers };
