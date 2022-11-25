console.log("connected");
var arr = [];

arr.push({
    img : "./5.jpg",
    head: "Light Sneakers",
    para: " Lorem ipsum dolor sit amet consectetur, Adipisci ratione sed sequi dolor maiores inventor adimac, deserunt ipsa."
});
arr.push({
    img : "./3.jpg",
    head: "Buggy Toes",
    para: "  Dignis simos neque corrupti illo iste cumquetar oditecto. Nemo tenetur ut corrupti maiores, hic adipisci recusandae."
});
arr.push({
    img : "./2.jpg",
    head:"Air Pro Max",
    para: " Iste cumque odit architecto.Nemo tenetur utarad oditecto.corrupti maiores, hic adipisci recusandae, officia fugiat!"
});
arr.push({
    img : "./4.jpg",
    head: "Smookey Boots",
    para: "  Lorem ipsum dolor sit amet consectetur, istera cumque odit architecto.Nemo tenetur utarada oditecto.corrupti maiores"
});

var blog_image = document.querySelector('.blog-inner-image');
var prev_btn = document.getElementById("prev");
var next_btn = document.getElementById("next");
var rend = document.getElementById('render');
var blog_para = document.getElementById('blog-para');
var blog_head =document.getElementById('blog-head');

var slider = document.querySelector('.slider');
var information_btn = document.querySelector('.information-button');
var i=0;

window.addEventListener("scroll",function(){
    
    if(window.scrollY>90 && window.scrollY<1220){
        slider.classList.add('slider-anim');
        information_btn.classList.add('buttons-anim');
    }
    else{
        slider.classList.remove('slider-anim');
        information_btn.classList.remove('buttons-anim');
    }
    if(window.scrollY>1176 && i==0){
        counter("pro1",0,200,2000);
        counter("pro2",0,450,2400);
        counter("pro3",0,500,2500);
        i++;
    }

});

function counter(id,start,end,duration){
    let obj=document.getElementById(id),
    current=start,
    range=end-start,
    increment=end>start ? 1 : -1,
    step=Math.abs(Math.floor(duration/range)),
    timer=setInterval(()=>{
        current+=increment;
        // obj.textContent=current+" £";
        if(current==end)
        {
            clearInterval(timer);
        }
    },step)
}
var j;
var k=1;
var SliderIndex = 1;
main_function(SliderIndex);

function next(n){
    SliderIndex = SliderIndex + n;
    k = k + n;
    main_function(SliderIndex);
}

next_btn.addEventListener("click",function(e){
    e.preventDefault();
    next(1);
});

prev_btn.addEventListener("click",function(e){
    e.preventDefault();
    next(-1);
});

function main_function(index){
    if(index > arr.length) {
        SliderIndex = 1;
        k=1;
    }
    if(index < 1) { 
        SliderIndex = arr.length;
        k=arr.length;
    }
    
    blog_image.style.transition = "all 500ms";
    blog_image.style.background =`url(${arr[SliderIndex-1].img}) no-repeat center /420px`;
    blog_head.textContent = arr[SliderIndex-1].head;
    blog_para.textContent = arr[SliderIndex-1].para;
    rend.textContent = "0"+k;

}
