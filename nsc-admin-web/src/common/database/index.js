import firebase from "firebase";

const firebaseConfig = {
  databaseURL: "https://todowork-8e85f.firebaseio.com",
  projectId: "todowork-8e85f"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;

export const getById = (collection, id) =>
  firebase
    .firestore()
    .collection(collection)
    .where("id", "==", id)
    .limit(1)
    .get();

export const getAll = collection =>
  firebase
    .firestore()
    .collection(collection)
    .get();

export const updateStatusVictim = id => {
  firebase
    .firestore()
    .collection("User")
    .doc(id)
    .update({
      status: "ได้รับการช่วยเหลือแล้ว"
    })
    .then(res => {
      console.log(res);
    })
    .catch(console.log);
};
