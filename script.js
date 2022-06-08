let myObj;

function storeDetails(e) {
  myObj = {
    Name: e.target.Name.value,
    Email: e.target.Email.value,
    Phone: e.target.Phone.value,
    Date: e.target.date.value,
    Time: e.target.time.value,
  };
  localStorage.setItem("myObj", JSON.stringify(myObj));
  console.log(localStorage);
  //   display();
}

function display() {
  let myObj = JSON.parse(localStorage.getItem("myObj"));
  let user = new Array();
  user = Object.values(myObj);
  var itemList = document.querySelector(".item-list");
  for (var i = 0; i < user.length; i++) {
    var li = document.createElement("li");
    li.className = "list";
    li.appendChild(document.createTextNode(user[i]));
    itemList.appendChild(li);
  }
}

// myObj = JSON.parse(localStorage.getItem("myObj"));
// let user = new Array();
// user = Object.values(myObj);
// var itemList = document.querySelector(".item-list");
// for (var i = 0; i < user.length; i++) {
//   var li = document.createElement("li");
//   li.className = "list";
//   li.appendChild(document.createTextNode(user[i]));
//   itemList.appendChild(li);
// }
