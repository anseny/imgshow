var headervar = document.getElementById("header");
var container = document.getElementById("imgs");
var index = 0;
var imgs = container.getElementsByTagName("img");
var timer = null;
var titles = document.getElementById("title");
var ts = titles.getElementsByTagName("div"); 
window.onload = function imgshow(){
    header.onmouseover = function(){
        if(timer) {clearInterval(timer);}
    }
    header.onmouseout = function(){
        timer = setInterval(function(){
            index++;  
            if(index>3){
                index = 0;
            } 
            //console.log(index); 
            changeimg(index);
        },1000)
    }
    for(var j = 0;j<ts.length;j++){
        ts[j].id = j;
        ts[j].onclick = function(){
            index = this.id;
            changeimg(index);

        }
    }
    header.onmouseout();
}
function changeimg(index){

    for(var i = 0;i<imgs.length;i++){
        imgs[i].style.display = "none";
        ts[i].style.background ="white";
    }
    imgs[index].style.display = "block";
    ts[index].style.background ="#ffcc00";

}