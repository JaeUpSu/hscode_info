import axios from "axios";

const headers = {
  "Content-type": "application/json; charset=utf-8",
  Authorization: `Bearer ${TOKEN}`,
};

const txt = (msg) => {
  return `name : ${msg.name} ${"\n"}tel: ${msg.tel} ${"\n"}email:  ${
    msg.email
  } ${"\n"}request: ${msg.request}`;
};

const TOKEN = "xoxb-4722906445298-4744922791058-7ruiieGCj4jPXINBreblx3Pr";

const CHANNEL_ID = "C04MTUVAP7X";

const HOOK_URL =
  "https://hooks.slack.com/services/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";

export const sendRequest = async (msg) => {
  try {
    await axios({
      method: "post",
      url: `https://cors-anywhere.herokuapp.com/${HOOK_URL}`,
      data: {
        text: txt(msg),
        channel: `${CHANNEL_ID}`,
      },
      headers: headers,
    }).then((res) => {
      console.log(res);
    });
  } catch (e) {
    console.log(e);
  }
};
