window.addEventListener("DOMContentLoaded", (e) => {
  Object.keys(localStorage).forEach(function (key) {
    if (key) {
      const stringifiedList = localStorage.getItem(key);
      console.log(stringifiedList);
      const user = JSON.parse(stringifiedList);
      console.log(user);

      addNewUser(user);
    }
  });
});

function removeUser(user) {
  const parentNode = document.getElementById("items");
  //   console.log(parentNode.children);
  console.log(parentNode.childNodes);
  Array.from(parentNode.children).forEach(function (child) {
    if (child.id === user.Email) {
      parentNode.removeChild(child);
    }
  });
}

function storeDetails(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const Email = document.getElementById("email").value;
  const Phone = document.getElementById("phone").value;
  const obj = {
    name,
    Phone,
    Email,
  };
  console.log(obj);
  if (localStorage.getItem(obj.Email)) {
    removeUser(obj);
    localStorage.removeItem(obj.Email);
  }
  localStorage.setItem(obj.Email, JSON.stringify(obj));
  addNewUser(obj);
}

function addNewUser(obj) {
  const ul = document.getElementById("items");
  const li = document.createElement("li");

  li.appendChild(
    document.createTextNode(obj.name + " " + obj.Email + " " + obj.Phone)
  );
  li.id = `${obj.Email}`;
  li.className = "item-list";
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Edit"));
  btn.addEventListener("click", function () {
    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.Email;
    document.getElementById("phone").value = obj.Phone;
    li.remove();
  });
  li.appendChild(btn);

  deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.addEventListener("click", function () {
    localStorage.removeItem(obj.Email);
    li.remove();
  });
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}
