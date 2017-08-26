photos = [
  "https://68.media.tumblr.com/6518518ac7383404c77f612094a74d9f/tumblr_omo9spZrI41vsjcxvo1_540.gif",
  "https://previews.123rf.com/images/oleksiy/oleksiy1309/oleksiy130900023/23108958-Seamless-grey-abstract-background-Stock-Vector.jpg"
]

 var index = 0;


function cambia() {
  if (index) {
    index --;
  }else {
    index ++;
  }
document.getElementById('photos').src = photos [index];
}

function shy() {
  document.getElementById('shy').style.visibility = "hidden";

}
