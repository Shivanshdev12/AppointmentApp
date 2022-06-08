var obj = {};
window.addEventListener("DOMContentLoaded", (event) => {
  display();
});

function storeDetails(e) {
  e.preventDefault();
  const name = e.target.Name.value;
  const Email = e.target.Email.value;
  const Phone = e.target.Phone.value;
  const Date = e.target.date.value;
  const Time = e.target.time.value;
  obj = {
    name,
    Email,
    Phone,
    Date,
    Time,
  };
  localStorage.setItem(obj.Email, JSON.stringify(obj));
  addNewUser(obj);
}

function addNewUser(user) {
  const parentNode = document.getElementById("items");
  const child = `<li>${user.name}, ${user.Email}, ${user.Phone},
    ${user.Date}, ${user.Time.toLocaleString()}</li>`;
  parentNode.innerHTML = parentNode.innerHTML + child;
}

function display() {
  Object.keys(localStorage).forEach((key) => {
    stringifiedUser = localStorage.getItem(key);
    console.log(stringifiedUser);
    user = JSON.parse(stringifiedUser);
    // console.log(user);
    const parentNode = document.getElementById("items");
    const child = `<li>${user.name}, ${user.Email}, ${user.Phone},
    ${user.Date}, ${user.Time.toLocaleString()}</li>`;
    parentNode.innerHTML = parentNode.innerHTML + child;
  });
}
