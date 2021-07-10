import {
  initializeFirebase,
  getUserByUserId,
  getAllUsers,
} from "./firebase.functions";

// sets up firebase, ready for use
initializeFirebase();

export { getUserByUserId, getAllUsers };
