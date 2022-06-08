function storeDetails(e) {
  e.preventDefault();
  const name = e.target.Name.value;
  const Email = e.target.Email.value;
  const Phone = e.target.Phone.value;
  const Date = e.target.date.value;
  const Time = e.target.time.value;
  const obj = {
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
  const child = `<li>${user.name}, ${user.Email}, ${user.Phone}
  ${user.Date}, ${user.Time.toLocaleString()}</li>`;
  parentNode.innerHTML = parentNode.innerHTML + child;
}
