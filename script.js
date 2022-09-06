const headerSection=document.querySelector('.section-hero')

// ==================responsive nabar =======================
const mobile_nav=document.querySelector('.mobile-navbar-btn')
const headerElem=document.querySelector('.header')
mobile_nav.addEventListener('click',()=>{
    headerElem.classList.toggle('active')
})


// ==============sticky nanbar ====================
const observer=new IntersectionObserver((entries)=>{
    let ent=entries[0];
    // console.log(ent)
    !ent.isIntersecting? document.body.classList.add('sticky'):document.body.classList.remove('sticky')



},{
    root:null,
    threshold:0
})

observer.observe(headerSection)







const p_btns=document.querySelector('.p-btns')
const p_btn=document.querySelectorAll('.p-btn')
const p_img_elem=document.querySelectorAll('.img-overlay')

p_btns.addEventListener('click',(e)=>{
    const p_btn_clicked=e.target
    console.log(p_btn_clicked);

    p_btn.forEach(currElem=>currElem.classList.remove('p-btn-active'))

    p_btn_clicked.classList.add('p-btn-active')

    // to find the number in data attribute 
    const btn_num=p_btn_clicked.dataset.btnNum;
    
    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`)

    // p_img_elem.classList.add('p-image-not-active')
    p_img_elem.forEach(currElem=>currElem.classList.add('p-image-not-active'))
    img_active.forEach(currElem=>currElem.classList.remove('p-image-not-active'))

    
    console.log(btn_num);
    
   
})

// scroll to top button 

const footerSection=document.querySelector('.footer')
const scrollElement=document.createElement("div");
scrollElement.classList.add("scrollToTop-style");
scrollElement.innerHTML=`<ion-icon class="scroll-top" name="arrow-up-outline"></ion-icon> `


footerSection.after(scrollElement);

const scrollTop=()=>{
headerSection.scrollIntoView({behavior:"smooth"})

}
scrollElement.addEventListener('click',scrollTop);




// smooth scrolling behavior 
const contactSec=document.querySelector('#contact-section')
const portfolioSec=document.querySelector('#portfolio-section')
const portfolioLink=document.querySelector('.portfolio-link')
const contactLink=document.querySelector('.contact-link')
const hireMe=document.querySelector('.hireme-btn')

portfolioLink.addEventListener('click',()=>{
    portfolioSec.scrollIntoView({behavior:"smooth"})
})
hireMe.addEventListener('click',(e)=>{
    e.preventDefault();
    contactSec.scrollIntoView({behavior:"smooth"})
})
// contactLink.addEventListener('click',(e)=>{
//     e.preventDefault();
//     contactSec.scrollIntoView({behavior:"smooth"})
// })


// animated text 
// const counterNum=document.querySelectorAll('.counter-numbers')
// const speed=200;
// counterNum.forEach((currElem)=>{

// const updateNumber=()=>{
//     const targetNumber=parseInt(currElem.dataset.number)
//     // console.log(targetNumber)
//     const initialNum=parseInt(currElem.innerText)
//     // console.log(initialNum)
//     const incrementNumber=Math.trunc(targetNumber/speed);
//     if(initialNum<targetNumber){
//         currElem.innerText=`${initialNum+incrementNumber}+`;
//         setTimeout(updateNumber,10)
//         // setInterval(updateNumber,10)
//     }
// }

// updateNumber();
// })

// worksection animation when enter on this area 
const workSection=document.querySelector('.section-work-data')
const workObserver=new IntersectionObserver((entries,observer)=>{
    // let ent=entries[0];
    let [ent]=entries;
    console.log(ent)
    // !ent.isIntersecting? document.body.classList.add('sticky'):document.body.classList.remove('sticky')
// if(ent.isIntersecting==false) return;
if(!ent.isIntersecting) return;
// animated text 
const counterNum=document.querySelectorAll('.counter-numbers')
const speed=200;
counterNum.forEach((currElem)=>{

const updateNumber=()=>{
    const targetNumber=parseInt(currElem.dataset.number)
    // console.log(targetNumber)
    const initialNum=parseInt(currElem.innerText)
    // console.log(initialNum)
    const incrementNumber=Math.trunc(targetNumber/speed);
    if(initialNum<targetNumber){
        currElem.innerText=`${initialNum+incrementNumber}+`;
        setTimeout(updateNumber,10)
        // setInterval(updateNumber,10)
    }
}

updateNumber();
})
observer.unobserve(workSection)
},{
    root:null,
    threshold:0
})

workObserver.observe(workSection)



// lazy loading functionality 
const imgRef=document.querySelector('img[data-src]');
 
const lazyImg=(entries)=>{
    let [entry]=entries;
    console.log(entry)
    if(!entry.isIntersecting) return;
    entry.target.src=imgRef.dataset.src;
}

const imgObserver=new IntersectionObserver(lazyImg,{
    root:null,
    threshold:0,
})

imgObserver.observe(imgRef)


const myJsMedia=(widthSize)=>{
  if(widthSize.matches){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
         autoplay:{
          delay:2500,
          disableOnInteraction:fasle,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  }
  else{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        // autoplay:{
        //   delay:2500,
        //   // disableOnInteraction:fasle,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  }
}
const widthSize=window.matchMedia("(max:width:780px)");

myJsMedia(widthSize)
widthSize.addEventListener("change",myJsMedia)