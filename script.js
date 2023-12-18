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

  const modal = document.getElementById("myModal");
  const trigger = document.querySelectorAll(".work .more-info");
  const close = document.querySelector('.close')
  function showProjectContent(project) {
    console.log(project);
    // Hide all project content containers
    const projectContents = document.querySelectorAll('.project-content');
    projectContents.forEach(function (content) {
        content.style.display = 'none';
    });

    // // Show the selected project content container
    const selectedContent = document.getElementById(project + '-content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

  // Show modal on click

  trigger.forEach(e=>{
    
    
  e.addEventListener("click", function() {
      modal.style.display = "block";
      // Extract the project identifier from the data-project attribute
      var project = this.closest('.work').getAttribute('data-project');
      // console.log(project);

      // Call showProjectContent with the project identifier
      showProjectContent(project);
    })
  });

  // Close modal when close button is clicked
  function closeModal() {
      modal.style.display = "none";
  }
  close.addEventListener('click', ()=>{
    closeModal()
  })
  // Close modal if clicked outside of modal content
  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });


//  const work = document.querySelector(".work-list").addEventListener("click", layer=>{
//     layer.target.classList.toggle("opacity");
//   })
 