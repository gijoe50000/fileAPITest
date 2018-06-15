var obj;

this.addEventListener('dragstart', dstartfunc);

main.addEventListener('drop', ddrop);
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
    e.dataTransfer.setData('text/html', e.target.id);
}


function ddrop(e){
    obj=e.dataTransfer.getData('text/html');
    
    if(this.parentElement.id=="main"||this.parentElement.id=="container"){
    this.appendChild(document.getElementById(obj));
    }
    else
    {
        console.log("Parentid= "+this.parentElement.id);
        this.child.appendChild(document.getElementById(obj));
    }

}


function dover(e){
    e.preventDefault();
    // console.log(this);
    if(this.parentElement.id!=""){ console.log("parent element: "+this.parentElement.id);}
}