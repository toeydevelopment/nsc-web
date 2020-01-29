import { useState } from "react";
import firestore from "../database";
import axios from "axios";

export const useCreateNews = () => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    photo: "",
    type: ""
  });
  const createNews = news2 => {
    axios
      .post(
        "https://us-central1-todowork-8e85f.cloudfunctions.net/boardCastNews",
        {
          ...news2
        }
      )
      .then(res => {
        console.log(res);
      });
  };

  return [news, setNews, createNews];
};
