import Quiz from "../../components/Quiz";
import Result from "../../components/Result";
import Start from "../../components/Start";

function JavaScriptInterview() {
  return (
    <>
      <Start title="JavaScript Interview" />
      <Quiz url="interviews/javascript-interview.json" />
      <Result />
    </>
  );
}

export default JavaScriptInterview;
