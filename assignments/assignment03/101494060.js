// Delear and Output student information including lab session day

//part1
let stuID = 101494060;
let fullName = "Thant Zin Win";
let profName = "Professor Azzad";
let sessionDay = "Thursday";
document.write("<div style=' position: absolute;  position: absolute; bottom: 50px; right: 16px;'>"+ "<strong>" + "Student ID:" + "</strong>" + stuID , " " ,"<strong>" + "Full Name:" + "</strong>" + fullName + "</div>" + "<br>");

document.write("<div style=' position: absolute;  position: absolute; bottom: 30px; right: 16px;'>" + "<strong>" + "Lab Professor:" + "</strong>" + profName ," " , "<strong>" + "Lab Session Day:" + "</strong>" + sessionDay  + "</div>" + "<br>" );


//part 2
let num1 = parseInt(prompt("Enter a number : "));
let num2 = parseInt(prompt("Enter a number : "));

function part2(num1, num2) {
  // Assign the return value to a variable named _return
  let _return = "";
  // Your code should start here

  if (num1 < num2) {
    _return = 1;
  } else if (num1 == num2) {
    _return = 0;
  } else {
    _return = 2;
  }
  /* Your code ends here.
       Don't add or change anything after this line.*/
  return _return;
}

function part3(num1, num2) {
  // Assign the return value to a variable named _return
  let _return = "";
  // Your code should start here
  if (num1 < num2) {
    // integers from num1 to num2 (low to high)
    for (let i = num1; i <= num2; i++) {
      _return += i;
    }
  } else if (num1 > num2) {
    // integers from num1 to num2 in reverse order (high to low)
    for (let i = num1; i >= num2; i--) {
      _return += i;
    }
  } else if (num1 == num2) {
    // the sum of two numbers if they are equal
    let sum = num1 + num2;
    _return = sum;
  }

  /* Your code ends here.
       Don't add or change anything after this line.*/
  return _return;
}

// part4

function part4(array_index, array) {
  // Assign the return value to a variable named _return
  let _return;

  // Your code should start here
  if (array_index >= 0 && array_index < array.length) {
    _return = true; // array_index is a valid index
  } else {
    _return = false; // array_index is outside the valid boundaries
  }

 
  /* Your code ends here.
       Don't add or change anything after this line.*/

  return _return;
}

// Example usage:
let index1 = 2;
let array1 = [1, 2, 3, 4, 5];
console.log(part4(index1, array1)); // Output will be true (valid index)

let index2 = 7;
let array2 = [1, 2, 3, 4, 5];
console.log(part4(index2, array2)); // Output will be false (invalid index)

function part5(array) {
  // Assign the return value to a variable named _return
  let _return = "";

  // Your code should start here
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) { //condition asking for even numbers
      _return += array[i]; // concatenating even numbers
    }
  }
  if (array.length == 0 || _return == "") { // condition asking for empty array or no return
    _return = 0;
  }

  /* Your code ends here.
         Don't add or change anything after this line.*/

  return _return;
}
