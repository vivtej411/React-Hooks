import { useEffect, useRef, useState } from "react";

function HookUseRef() {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const countRef = useRef();

  const [name, setName] = useState("");

  useEffect(() => {
    countRef.current = name;
  }, [name]);

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span ref={countRef}>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleAdd}>+</button>
      <input ref={countRef} onChange={(e) => setName(e.target.value)}></input>
      <p></p>

      <button
        onClick={() => {
          countRef.current.innerHTML = "10";
        }}
      >
        Change to 10
      </button>
      <p>
        {name} is state -- {countRef.current} is ref
      </p>
    </>
  );
}

export default HookUseRef;
