import axios from "axios";

const RequestPost = (context) => {
  axios
    .post("http://127.0.0.1:8000/api/v1/users/", {
      name: context.name,
      tel: context.tel,
      email: context.email,
      request: context.request,
      created: new Date(),
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default RequestPost;
