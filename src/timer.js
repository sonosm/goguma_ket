import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  React.useEffect(
    function () {
      setTime(time + 1);
    },
    [time] // 이것때문에 타임 무한 루프 / time 지우면 문제 해결
  );
  return (
    <div>
      <h3>{time}초</h3>
      <button>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
