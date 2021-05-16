import { useEffect, useState } from "react";
export const useClassState = (initialState) => {
  const [state, setState] = useState(initialState.data);
  useEffect(() => {
    if (!initialState._____loaded) {
      initialState.data = state;
      initialState._____loaded = true;
      Object.getOwnPropertyNames(initialState)
        .filter((key) => key !== "data")
        .forEach((key) => {
          let temp = initialState[key];
          initialState[key] = (...props) => {
            initialState.data = JSON.parse(JSON.stringify(initialState.data));
            temp.call(initialState, ...props);
            setState(initialState.data);
          };
        });
    }
  });
};

export const usePrimitive = (init) => {
  const [state, setState] = useState(init);
  return function (val) {
    if (arguments.length === 0) {
      return state;
    } else {
      setState(val);
    }
  };
};
// export const useCollection = (initialOb) => {
//   console.log(initialOb);
//   const [state, setState] = useState(0);

//   if (!initialOb.loaded) {
//     initialOb.loaded = true;
//     let t = initialOb;
//     let h = {
//       get: function (target, prop, r) {
//         return target[prop];
//       },
//       set: function (target, prop, r) {
//         console.log(target[prop]);
//         target[prop] = r;
//         setState(state + 1);
//       }
//     };

//     initialOb.proxy = new Proxy(t, h);
//   }

//   return initialOb.proxy;
// };
// export const useCollection = (initialOb) => {
//   console.log(initialOb);
//   const [state, setState] = useState(initialOb);

//   if (!initialOb.loaded) {
//     initialOb.loaded = true;

//     Object.getOwnPropertyNames(initialOb).forEach((key) => {
//       initialOb[key] = {
//         val: initialOb[key],
//         set(val) {
//           this.val = val;
//           setState(initialOb);
//         }
//       };
//     });
//   }

//   return state;
// };
let s = (d) => {
  return d;
};

s.willMount = () => {};

s.willUnMount = () => {};

s.now = () => {
  console.log("now");
};

let data = {
  count: 0,
  user: { age: 10, address: { city: "hyd" } },
  label: "text",
  isDisabled: true,
  error: "test"
};

let isDisabled = s(true);

s(function test() {
  data.count = 10;
  data.label = "label";
});

s.updateUser = () => {
  data.user.age = 20;
};
s.updateUser();

s(
  (data.count = 10),
  (data.label = "10"),
  data.count++,
  (data.isDisabled = true)
);
s();
s(() => {})();
s(() => {}, 1000); // ()=> {}
s(() => {}, 1000, true); // ()=> {}

s.willMount(() => {});
s.willUnMount(() => {});
s(() => {
  data.count++;
  data.label = "asdf";
  data.isDisabled = true;
});

let test = s(() => {});
