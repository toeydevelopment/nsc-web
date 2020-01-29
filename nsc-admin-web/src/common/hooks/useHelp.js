import { useState, useEffect } from "react";
import firestore from "../database";

export function useHelpData(isHelp) {
  const [help, setHelp] = useState([]);
  const [loading, setLoad] = useState(false);
  useEffect(async () => {
    setLoad(true);
    let snapShot = await firestore.collection(isHelp ? "Help" : "Report").get();
    let helpes = [];
    snapShot.forEach(snap => {
      helpes.push({
        id: snap.id,
        ...snap.data()
      });
    });
    setHelp(helpes);
    setLoad(false);
  }, []);

  return [help, loading];
}
