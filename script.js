const tabLinks = document.querySelectorAll(".tab-links");

const tabContents = document.querySelectorAll(".tab-contents");

function clickTab(tabname) {
  current = event.currentTarget;
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  current.classList.add("active-link");
  document.querySelector(`#${tabname}`).classList.add("active-tab");
}

const listUl = document.querySelector("#listUl");
function openMenu() {
  listUl.style.right = "0";
}
function closeMenu() {
  listUl.style.right = "-100%";
}
let links = document.querySelectorAll("li a")

 links.forEach(link => {
    link.addEventListener("click", () => {
     closeMenu()
  })
})


const scriptURL =
  "https://script.google.com/macros/s/AKfycbwoumaDlKxNJsx-88XJG5dnvxz7Z3UvZtGH_4yXkX0nGfuoKAXC2BOWIFVUPXJgzLdc/exec";
const form = document.forms["submit-to-google-sheet"];
const message = document.querySelector("#message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        message.innerHTML = "Message sent successfully!";
        setTimeout(() => {
            message.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});


 const work = document.querySelectorAll(".work");
 work.forEach(e=>{
  e.addEventListener("click", (layer)=>{
    layer.target.classList.toggle("opacity");
  })
 })