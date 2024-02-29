import Quiz from "../../components/Quiz";
import Result from "../../components/Result";
import Start from "../../components/Start";

function CssInterview() {
  return (
    <>
      <Start title="Css Interview" />
      <Quiz url="interviews/css-interview.json" />
      <Result />
    </>
  );
}

export default CssInterview;
