// DROPDOWN

// function myFunction(){
//     document.getElementById("myDropDown").classList.toggle("show");
// }

function myFunction (){
    var x = document.getElementById("btn");
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
}
 document.addEventListener('click', function(event) {
  var dropdown = document.getElementById("btn");
  var button = document.getElementById("tbtn");

  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
document.getElementById("btn").addEventListener('click', function(event) {
  if (event.target.classList.contains('dropdown-item')) {
    this.style.display = 'none';
  }
}); 