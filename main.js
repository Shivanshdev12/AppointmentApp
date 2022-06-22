window.addEventListener("DOMContentLoaded", (e) => {
  axios
    .get(
      "https://crudcrud.com/api/bf8dbc4320114269966395d1701a03ff/appointments"
    )
    .then((res) => {
      Array.from(res.data).forEach(function (el) {
        addNewUser(el);
      });
    });
});

function submitData(e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const Phone = document.getElementById("phone").value;
  const obj = {
    name,
    email,
    Phone,
  };
  axios
    .post(
      "https://crudcrud.com/api/bf8dbc4320114269966395d1701a03ff/appointments",
      obj
    )
    .then((res) => {
      addNewUser(res.data);
    })
    .catch((err) => console.log(err));
}

function addNewUser(obj) {
  const ul = document.getElementById("items");
  const li = document.createElement("li");

  li.appendChild(
    document.createTextNode(
      "Name : " +
        obj.name +
        ", Email : " +
        obj.email +
        ", Phone no. : " +
        obj.Phone
    )
  );
  li.id = `${obj._id}`;
  li.className = "item-list";
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Edit"));
  btn.addEventListener("click", function () {
    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.email;
    document.getElementById("phone").value = obj.Phone;
    li.remove();
  });
  li.appendChild(btn);

  //DELETE
  deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.addEventListener("click", function () {
    axios
      .delete(
        `https://cors-anywhere.herokuapp.com/https://crudcrud.com/api/bf8dbc4320114269966395d1701a03ff/appointments/${obj._id}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    // console.log(`${obj._id}`);
    li.remove();
  });
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}
