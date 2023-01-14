import React, { useState } from "react";
import axios from "axios";
import "./RestAPI.css";

function RestAPI() {
  const [text, setText] = useState([]);

  return (
    <>
      <h1>MY INFO WEB</h1>
      <div className="btn-primary">
        <button
          onClick={() => {
            axios
              .post("http://127.0.0.1:8000/api/v1/users/", {
                id: 6,
                name: "이한별",
                tel: "01032443300",
                email: "starman22@gmail.com",
                request:
                  "안녕하세요. 넥스트러너스입니다. 프론트엔드에 관심이 있으신가요?",
                created: new Date(),
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Request POST
        </button>
        <button
          onClick={() => {
            axios
              .get("http://127.0.0.1:8000/api/v1/users/")
              .then((response) => {
                setText([...response.data]);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Request GET
        </button>
      </div>
      {text.map((e) => (
        <div>
          {" "}
          <div className="list">
            <div>{e.name}</div>
            <div>{e.email}</div>
            <div>{e.request}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RestAPI;
