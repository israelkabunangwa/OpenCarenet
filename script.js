(function(){
    var scrollY = function(){
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var element=document.querySelector('.navBar')
    var top=element.getBoundingClientRect().top + scrollY()
    var onscrolling=function(){
      if(scrollY()>top){element.classList.add('fixed')}
      else{element.classList.remove('fixed') }
    }
   window.addEventListener('scroll',onscrolling)
})();

const globe=document.querySelector('#globe')
globe.addEventListener('click',()=>{document.querySelector('.changeLanguage').classList.toggle('Language_change')})

const bars=document.querySelector('.bars')
bars.addEventListener('click',()=>{document.querySelector('.modale').classList.add('modaldisplay')})
const remove=document.querySelector('.remove')
remove.addEventListener('click',()=>{document.querySelector('.modale').classList.remove('modaldisplay')})


function textesObserver(){
    const textes=document.querySelectorAll('.textAnim')
    let textOptions={
        rootMargin:"-20% 0px",
        threshold:0
    }
    const observertext=new IntersectionObserver(manageTextesIntersection,textOptions)
    function manageTextesIntersection(alltextes){
        alltextes.forEach(oneText=>{
            if(oneText.isIntersecting){
                oneText.target.style.opacity=1;
                oneText.target.classList.add("textAnimation")
            }
        })
    }
    textes.forEach(text=>{
        observertext.observe(text)
    })
} textesObserver()


const formEl=document.querySelector('form')
formEl.addEventListener('submit', event =>{
    event.preventDefault();
    const formData=new FormData(formEl)
    const data=Object.fromEntries(formData)
   
    fetch('https://reqres.in/api/users',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
    .then(data=>console.log(data))
    .catch(error=> console.log(error))
})





