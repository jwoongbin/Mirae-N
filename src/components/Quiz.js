import './Quiz.css';

function Quiz({data}){
  console.log(data[0].subs[0].questiones[0].num);
  return (
    <div className="Quiz-wrap">
      <div className="header"><h1>[개념 터치 추가 문제] -1</h1></div>
      <div className="contents">
        {data.map((item, index) =>
        data[0].subs[0].questiones[index].question)}
      </div>
      <div className="footer"></div>
    </div>

  );
}

export default Quiz;