import { useCallback, useState } from "react";

const Child = ({ handleChange, setShow }) => {
  console.log("child ran");
  return (
    <>
      <p>{handleChange()}</p>
      <button onClick={() => setShow((prev) => !prev)}>change</button>
    </>
  );
};

function HookUseCallback() {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

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

  const [show, setShow] = useState(false);

  const handleChange = useCallback(() => {
    return count.num * 2;
  }, [count]);

  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <button onClick={handleAdd}>+</button>
      <Child handleChange={handleChange} setShow={setShow}></Child>
    </>
  );
}

export default HookUseCallback;
