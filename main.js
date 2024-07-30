

const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error("Something went wrong, make sure $(selector) exits");
};

//nav bar
// Get the container element
var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.onload = function(){
  document.getElementById('home-info').style.display = 'block'; 
 document.getElementById('blog-post').style.display = 'none';
 document.getElementById('blog-post-display').style.display = 'none';
 document.getElementById('blog-post-info').style.display = 'none';
}

//switching between pages
function infoAppear(num){
  topFunction();
 document.getElementById('home-info').style.display = 'none'; 
 document.getElementById('blog-post').style.display = 'none';
 var blogNum = "blog-" + num;
 document.getElementById(blogNum).style.display = 'block';
 document.getElementById('blog-post-display').style.display = 'block';
 document.getElementById('blog-post-info').style.display = 'block';
 var posts = document.getElementById('blog-post-info');
 posts = posts.getElementsByClassName("post");
 console.log(posts);
 for (var i = 0; i < posts.length; i++) {
  var postNum = "blog-" + (i+1);
  if(postNum != blogNum){
    document.getElementById(postNum).style.display = 'none';
  }
  }
  window.scrollTo(screenTop);

 
}

function homeAppear(){
  document.getElementById('blog-post').style.display = 'none';
  document.getElementById('home-info').style.display = 'block'; 
  document.getElementById('blog-post-info').style.display = 'none';
  document.getElementById('blog-post-display').style.display = 'none';
 
}
function blogHomeAppear(){
  
  document.getElementById('home-info').style.display = 'none';
  document.getElementById('blog-post-info').style.display = 'none';
  document.getElementById('blog-post-display').style.display = 'none';
  document.getElementById('blog-post').style.display = 'block';

  var page = document.getElementById('blog-post');
  page = page.getElementsByClassName("page");
  for (var i = 1; i < page.length; i++) {
    var pageNum = "page-" + (i+1);
    document.getElementById(pageNum).style.display = 'none';
    }
}

function blogHomeAppearArrow(){
  
  document.getElementById('home-info').style.display = 'none';
  document.getElementById('blog-post-info').style.display = 'none';
  document.getElementById('blog-post-display').style.display = 'none';
  document.getElementById('blog-post').style.display = 'block';
}

//scroll btn
// Get the button:
let mybutton = document.getElementById("up-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function nextPage(num){
  var curPage = "page-" + num;
  var nextPage = "page-" + (num+1);
  document.getElementById(curPage).style.display = 'none';
  document.getElementById(nextPage).style.display = 'block';
}

function prevPage(num){
  var curPage = "page-" + num;
  var prevPage = "page-" + (num-1);
  document.getElementById(curPage).style.display = 'none';
  document.getElementById(prevPage).style.display = 'block';
}
