var photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhyzwzZYYdKbawMde_Z9108nNvX6EgsUOrB2Osuf4sWlGcvgY",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIQQ8GbRBtEqDo60GQvCemXp9Ku8RiQ5okr1IvV5DDLNDB6yl",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9_r4K5sf44FoKNciwaKnCR3r69K6ii5OXvLbroSOuyRaBzqI",
    "https://cdn.pixabay.com/photo/2016/04/17/14/48/wallpaper-1334819_960_720.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFLXx4GNyK8R775t7bYb790QpkBQn3wNv9x0e8NwmYgWRllmM",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7SKGBzF7IqkOdxKHOdinpOitkESOyPr10gAaF7Y59fXFXR6l-A"

];

var index = 0;

setTimeout(function(){
adelante();
}, 3000);

function adelante() {
  if (index < photos.length - 1){
    index++;
    document.getElementById('photos').src = photos[index];
  }else {
    index = 0;
    document.getElementById('photos').src = photos[index];
  }
}

function atras() {
  if (index > 0){
    index--;
    document.getElementById('photos').src = photos[index];
  }else {
    index = photos.length -1;
    document.getElementById('photos').src = photos[index];
  }
}
