import Quiz from "../../components/Quiz";
import Result from "../../components/Result";
import Start from "../../components/Start";


function ReactInterview() {
    return (
      <>
        <Start title="React Interview"/>
        <Quiz url="interviews/react-interview.json" />
        <Result />
      </>
    );
}

export default ReactInterview;