var el = document.querySelectorAll('.color-switcher li');
var classList=[];

for(var i=0; i<el.length; i++){
    classList.push(el[i].getAttribute('data-color'));

    el[i].addEventListener("click",function(){
        // removed all  old class from list 
        document.body.classList.remove(...classList);
        // add the spicefay class that user has clicked on it 
        document.body.classList.add(this.getAttribute('data-color'))
    },false)
}
console.log(classList)