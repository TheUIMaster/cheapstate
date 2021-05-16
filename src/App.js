import "./styles.css";
import { useClassState as subscribe, usePrimitive } from "./useCheapState";
import { data, data1 } from "./State";
let t = { x: 10 };
let h = {
  get: function (target, prop, r) {
    return target[prop];
  },
  set: function (target, prop, r) {
    console.log(target[prop]);
    target[prop] = r;
  }
};
let p = new Proxy(t, h);

//setInterval(() => p.x++, 1000);

export default function App() {
  subscribe(data);
  subscribe(data1);

  let count = usePrimitive(0);
  return (
    <div className="App">
      {p.x}
      <button
        onClick={() => {
          count(count() + 1);
        }}
      >
        {count()}
      </button>
      <h1 onClick={() => data.increment(10)}>Hello CodeSandbox</h1>
      {data.data.count} {data.formatCount}
      <h1 onClick={() => data1.increment(10)}>Hello CodeSandbox</h1>
      {data1.data.count} {data1.formatCount}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
