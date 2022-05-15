var randomArray = ['Anna', 'Carlos', 'Eva', 'Dave', 'Kristýna', 'Maty'];

var list = document.getElementById("ulForAppending");

randomArray.forEach(function(item, index) {
    if (item === 'Maty') {
    var element = document.createElement("li");
    element.innerHTML = "<div><b>"+item+"</b></div>";
    list.appendChild(element);
}   else {
    var element = document.createElement("li");
    element.innerHTML = "<div>"+item+"</div>";
    list.appendChild(element);
}   
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!",
  };

var newTitle = document.createElement("h1");
newTitle.innerHTML = additionalBlock.title;
$('main').append(newTitle);

var newText = document.createElement("p");
newText.innerHTML = additionalBlock.text;
$('main').append(newText);



