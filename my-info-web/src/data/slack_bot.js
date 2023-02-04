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

const TOKEN = "token id";

const CHANNEL_ID = "channel id";

const HOOK_URL = "hookurl";

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
