import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
admin.messaging();
const firestored = admin.firestore();

export const boardCastNews = functions.https.onRequest(
  async (request: functions.https.Request, response: functions.Response) => {
    response.set("Access-Control-Allow-Origin", "*");
    switch (request.method) {
      case "POST":
        response.set("Access-Control-Allow-Headers", "Content-Type");
        response.set("Access-Control-Allow-Methods", "GET, POST");
        const { title, description } = request.body;

        const { id } = await firestored.collection("News").add({
          ...request.body,
          title,
          description
        });

        const users = await firestored.collection("User").get();

        users.forEach(user => {
          const userData = user.data();
          if (userData.token.length > 10)
            admin.messaging().sendToDevice(userData.token, {
              notification: {
                title,
                body: description
              },
              data: {
                click_action: "FLUTTER_NOTIFICATION_CLICK",
                id: id
              }
            });
        });

        return response.json({
          status: "created",
          message: "created and boardcast news"
        });

      default:
        return response.json({
          status: "error"
        });
    }
  }
);
