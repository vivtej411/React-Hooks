import "./App.css";
import useFetchAPI from "./useHooks/useFetchAPI";

function App() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(data);
  if (error) return <p>Error!</p>;
  if (loading) return <p>loading...</p>;
  return (
    <div>
      {/*<HookUseState></HookUseState>*/}
      {/*<HookUseEffect></HookUseEffect>*/}
      {/* {<HookUseMemo></HookUseMemo>} */}
      {/* {<HookUseCallback></HookUseCallback>} */}
      {/* {<HookUseRef></HookUseRef>} */}
      {/* {<HookUseContext></HookUseContext>} */}
      {/* {<HookUseReducer></HookUseReducer>} */}
      {/* {<HookUseLayoutEffect></HookUseLayoutEffect>} */}
      <ul>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default App;
