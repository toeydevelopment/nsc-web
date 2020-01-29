import { useState, useEffect } from "react";
import firestore, { getAll } from "../database";

export const useAllUser = () => {
  const [victims, setVictims] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(async () => {
    const victimData = [];
    const idss = [];
    const help = await firestore.collection("Help").get();
    help.forEach(async h => {
      const user = await firestore.doc("User/" + h.data().userId).get();
      const data = user.data();
      idss.push(user.id);
      if (data?.fname != undefined)
        victimData.push([
          data.fname + " " + data.lname,
          data.address,
          h.data().description,
          h.data().helped ? "ช่วยเหลือแล้ว" : "ยังไม่ช่วยเหลือ"
        ]);
      setIds(idss);
      setVictims(victimData);
    });
  }, []);

  return [victims, ids];
};
