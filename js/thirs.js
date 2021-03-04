let value = 500;

let obj = {
  value: 0,
  increment: function () {
    this.value++;
    // setTimeout(
    //   function () {
    //     console.log(this);
    //     console.log('value', this.value);
    //   }.bind(this),
    //   3000
    // );
    setTimeout(() => {
      console.log(this);
      console.log('value', this.value);
    }, 3000);
    // let innerFunction = function () {
    //   console.log(this);
    //   console.log('value', this.value);
    // };
    // innerFunction();
  },
};

obj.increment();

const test = {
  value: 100,
};

test.func = obj.increment;
test.func();
