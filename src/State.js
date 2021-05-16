class Data {
  data = {
    count: 0,
    user: { age: 10, address: { city: "Hyd" } }
  };
  get formatCount() {
    return "$" + this.data.count;
  }
  increment() {
    debugger;
    console.log("increment");
    this.data.count++;
    this.changeCity("Delhi");
  }
  changeCity = (newCity) => {
    console.log("in change city");
    this.data.user.address.city = newCity;
  };
}

export let data = new Data();
export let data1 = {
  data: { count: 0 },
  increment() {
    this.data.count++;
    console.log("increment");
  }
};

// collection

// let data = { length, [0], [2], [3] , test: ()}
// data[0]  data.test = something;
// data.keys.find()
// data.find();
// data.find()
// dota.contains
// data.push();
// data.pop();
// data.shift();
// data.unshift()
// data.fo

// const state = useCollection({ age: 10, name: "rrr", city:"12123"});

// state.age;
//  state.age = 10;
//  state.name;
//  // state.name==10;
