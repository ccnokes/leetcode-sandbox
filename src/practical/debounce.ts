
// NOTE `T extends ...` type enables type inference for parameters when passing functions

export default function debounce<T extends (...args: any[]) => void>(cb: T, wait: number = 0) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  
  const debounceFn = function(...args: Parameters<T>) {
    clearTimeout(timeoutId); // cancel any existing timeouts to reset
    
    timeoutId = setTimeout(() => {
      cb.apply(this, args); // apply so correct context is applied
    }, wait);
  };

  debounceFn.cancel = function() {
    clearTimeout(timeoutId);
  };

  return debounceFn;
}

// test with object
// const obj = {
//   name: 'test',
//   printName: debounce(function() {console.log(this.name);}, 1000)
// };

// debounce(() => console.log('debounced'), 1000)();

// obj.printName();
// obj.printName.cancel();
