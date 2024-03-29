import { Link } from "react-scroll";
import styles from "./home.module.css";
import linked_icons from "../linked_icons.js";

const Home = () => {
  // const scrollRef = useRef();

  // const hi_list = [
  //   "안녕",
  //   "Hello",
  //   "こんにちは",
  //   "你好",
  //   "hallo",
  //   "Hola",
  //   "Привет",
  //   "สวัสดี",
  //   "olá",
  //   "salut",
  //   "Сайн уу",
  //   "ciao",
  //   "xin chào",
  // ];

  // const [index, setIndex] = useState(1);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(index);

  //     setHello(hi_list[index]);
  //     if (index < 12) {
  //       setIndex(index + 1);
  //       console.log(" if " + index);
  //     } else {
  //       setIndex(0);
  //       console.log(" else " + index);
  //     }
  //   }, 3000);
  // }, []);

  // ** 인풋에 변화(onChange)가 일어났을 때 위 setInterval처럼 clearInterval을 하고 새로운
  // 변화 값(delay)를 넣어주지 않아도 알아서 인터벌을 새로 설정하는 것을 볼 수 있다

  return (
    <>
      <div className={styles.profile_bg}>
        <p className={styles.info_hello}>
          Hello World!! &nbsp;&nbsp;My name is KHS.
        </p>
        <p className={styles.info}>
          <br />
          <br />
          <p className={styles.info_more}>
            I'am Front-End Developer.
            <br />
            My Goal is Full-stack Developer.
            <br />
            Of course, I know how to do back.
          </p>
        </p>
        <div className={styles.baro}>
          <Link to="1" spy={true} smooth={true}>
            <img className={styles.baro_img} src={linked_icons[4]}></img>
          </Link>
          <p className={styles.baro_text}>
            You can't wait to see my works, Click here!!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
