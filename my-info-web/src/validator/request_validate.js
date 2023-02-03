const RequestValidate = (context) => {
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const telRegex = new RegExp("[0-9]*$");

  if (context.name.length == 0) {
    alert("이름을 입력해주세요!");
    return true;
  }
  if (context.tel.length > 0 && !telRegex.test(context.tel)) {
    alert("연락처에 숫자만 입력해주세요!");
    return true;
  }
  if (context.email.length == 0 || !emailRegex.test(context.email)) {
    alert("이메일 형식을 지켜주세요!");
    return true;
  }
  if (context.request.length <= 10) {
    alert("요청사항을 10자이상 입력해주세요!");
    return true;
  }
  return false;
};

export default RequestValidate;
