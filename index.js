// 1) Function expression called divide
const divide = function(a, b) {
    return a / b;
  };
  
  // 2) Divide 2000 by 100
  const result = divide(2000, 100);
  console.log(result);  // Output: 20
  
  // 3) Arrow function called square
  const square = (x) => {
    return x * x;  // Multiplies x times itself
  };
  
  // Testing the square function
  console.log(square(5));  // Output: 25
  
  // 4) Arrow function called add
  const add = (a, b) => a + b;  // Adds two parameters together
  
  // Testing the add function
  console.log(add(10, 20));  // Output: 30
  