import ChildComponent from "./ChildComponent";

function ParentsComponent() {
  return (
    <div>
      <h3>나는 부모입니다.</h3>
      <div>
        <h1>내 자식을 소개합니다.</h1>
        <ChildComponent />
        <ChildComponent />
      </div>
    </div>
  );
}

export default ParentsComponent;
