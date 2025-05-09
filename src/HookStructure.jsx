import React, { useEffect, useState } from "react";

const HookStructure = () => {
  const [count, setCount] = useState(0); // 초기 값은 0
  const [text, setText] = useState("빈 텍스트"); // 초기 값은 "빈 텍스트"

  useEffect(() => {
    // 빈 배열로 useEffect를 줌
    console.log("컴포넌트가 마운트됨");
  }, []);

  useEffect(() => {
    console.log("카운트가 변경되었음: ", count);
  }, [count]);

  useEffect(() => {
    console.log("텍스트가 변경되었음", text);
  }, [text]);

  useEffect(() => {
    console.log("매 렌더링마다 실행");
  }); // 의존성 배열이 없는 경우 = 매 렌더링마다 실행

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <hr className="text-gray-200" />
      <h2>typed text: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"
      ></input>
    </div>
  );
};

export default HookStructure;
