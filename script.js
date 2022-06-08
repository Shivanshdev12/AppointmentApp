function storeDetails(e) {
  localStorage.setItem("Name", e.target.Name.value);
  localStorage.setItem("Email", e.target.Email.value);
  localStorage.setItem("Phone", e.target.Phone.value);
  localStorage.setItem("Date", e.target.date.value);
  localStorage.setItem("Time", e.target.time.value);
  console.log(e.target.date.value);
}
