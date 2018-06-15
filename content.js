var obj;

this.addEventListener('dragstart', dstartfunc);

main.addEventListener('drop', ddrop,);
main.addEventListener('dragover', dover);

locate.addEventListener('drop', ddrop);
locate.addEventListener('dragover', dover);

locateSmaller.addEventListener('drop', ddrop);
locateSmaller.addEventListener('dragover', dover);

container.addEventListener('drop', ddrop);
container.addEventListener('dragover', dover);

h1.addEventListener('dragover', dover);
h1.addEventListener('drop',ddrop)

h2.addEventListener('dragover', dover);
h2.addEventListener('drop',ddrop)



function dstartfunc(e){
    e.stopPropagation();
    e.dataTransfer.setData('text/html', e.target.id);
}


function ddrop(e){
    e.stopPropagation();
    obj=e.dataTransfer.getData('text/html');
    this.appendChild(document.getElementById(obj));
            console.log("this.id= "+this.id);
 

}


function dover(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(this.id);
    if(this.parentElement.id!=""){ 
        // console.log(" element: "+this.id);
    }
}