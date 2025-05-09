import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["apple", "banana", "orange"]);

  // 의존성 배열을 변경하지 않고, 배열 내부 요소를 변경
  useEffect(() => {
    console.log("useEffect 실행됨");
  }, [items]); // Items 값이 바뀔때마다 useEffect 실행

  const addItem = () => {
    const newItem = prompt("newItem을 입력하세요: ");
    if (newItem) {
      // newItem이 있으면?
      setItems((prevItems) => [...prevItems, newItem]);
      // 배열을 새로 만들어 새로운 항목을 추가
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((items, index) => (
          <li key={index}>{items}</li>
          // index가 필요한 이유?
          // 배열에 접근하기 위한 index를
        ))}
      </ul>
      <button onClick={addItem} className="border">
        Add Item
      </button>
    </div>
  );
};

export default ItemList;
