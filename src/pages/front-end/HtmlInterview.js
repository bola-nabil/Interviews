import Quiz from "../../components/Quiz";
import Result from "../../components/Result";
import Start from "../../components/Start";

function HtmlInterview() {
  return (
    <>
      <Start title="Html Interview" />
      <Quiz url="interviews/html-interview.json" />
      <Result />
    </>
  );
}

export default HtmlInterview;
