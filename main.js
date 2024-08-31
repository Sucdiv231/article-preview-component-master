const socialContainer = document.querySelector('.socialContainer');
const share = document.querySelector('.share');
share.addEventListener("click", (e)=>{
    socialContainer.classList.toggle('show')
});
