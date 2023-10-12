document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})

document.querySelectorAll('.projects-btn,.contact-form>input').forEach(btn=>{btn.addEventListener('click',(e)=>{
    e.preventDefault()})
})