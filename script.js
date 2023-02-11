/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

// **************ADDING MAP FUNCTION*****************
function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(M1);
  function M1(ar) {
    if(ar.marks >= "50") {
      console.log(ar);
    }
  }
}

//****************FOR EACH FUNCTION****************
function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(M2);
  function M2(ar) {
    if(ar.marks >= "50") {
      console.log(ar)
    }
  }
}

//****************ADDING DATA ****************
function addData() {
  //Write your code here, just console.log
    let nObj = { id: 4, name: "susan", age: "20", marks: "45" };
    arr.push(nObj);
    console.log(arr);
  }


//****************REMOVING FAILED STUDENT****************
function removeFailedStudent() {
  //Write your code here, just console.log
  let filtered_arr = arr.filter(function (val){
    if (val.marks < "50") {
      return val;
    }
  });
  console.log(filtered_arr);
}

//****************CONCATENATIng****************
function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    {id: 5, name: "vidhi" , age: "21" , marks: "72" },
    {id: 6, name: "sonal" , age: "26" , marks: "48" },
    {id: 7, name: "ayush" , age: "22" , marks: "86" },
  ];

  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
