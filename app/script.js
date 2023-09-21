subjects=["knowledge","sports"]
const selectInput=document.querySelector('#category-input')
for(i=0;i<subjects.length;i++)
{
    const option=document.createElement('option')
    option.setAttribute('id',`sub${i}`)
    option.setAttribute('value',subjects[i])
    option.innerText=subjects[i]
    selectInput.appendChild(option)
}
form = document.querySelector("#choose-category-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  btnproceed = document.querySelector("#proceed-btn");
  category = document.querySelector("#category-input").value;
  console.log(category);
  movetoCategory(category);
});
function movetoCategory(category) {
  switch (category) {
    case "knowledge":
      window.location.href = "knowledge.html";
      break;
    case "sports":
      window.location.href = "sports.html";
      break;
      default:
        alert("Please select a category")
  }
}
