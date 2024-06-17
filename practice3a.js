let marks = {
    anandita: 90,
    Ashutosh: 99,
    lorem: 91,
    Gouri: 100,
    Rajesh: 95,
  };
  for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
  }
  for (let key in marks){
    console.log("the marks of " + key + " are " + marks[key])
  }

  let cn=4
  let i
  while(i!=cn){
    i=89
  }