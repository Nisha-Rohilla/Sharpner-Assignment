const btn = document.getElementById("sub-tn");

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  document.getElementById("my-form").style.background = "#ccc";
});

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.getElementById("my-form").style.background = "#rrr";
});

function printDetails(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.querySelector("[type='date']").value;
  const time = document.querySelector("[type='time']").value;

  console.log("Name :", name);
  console.log("Email :", email);
  console.log("Phone :", phone);
  console.log("Date :", date);
  console.log("Time :", time);
}
