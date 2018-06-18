
var fileObject = document.getElementById('files');
var listObject = document.getElementById('list');
var holderObject = document.getElementById('holder');
var image;
fileObject.addEventListener('change', changeFunc);
var filename=fileObject.name;
var filesize=fileObject.size;
var filetype;
var details;

function changeFunc(e){
    
// listObject.textContent=e.target.files;
// holderObject.textContent=e.target.fileObject;


console.log(e.target.files);

// image=e.target.readAsDataURL(files[0]);
image=e.target.files[0];
holderObject.innerHTML="<img src=/"+image+"></img>";

details="Name= <br>"+image.name+ "<br>"+ "Size="+image.size+"kb";

listObject.innerHTML=details;
// listObject.value=details;
}

// test comment for change