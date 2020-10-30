const btn =document.querySelector('.switchBtn');
const video = document.querySelector('.video-container')
const span=document.getElementById('span1')
// btn.forEach(button=>{
//     button.addEventListener('click', (e)=>{
//         console.log(e.currentTarget.className)
//     })
// })



btn.addEventListener('click',(e)=>{
    if(!span.classList.contains('list')){
        span.classList.add('list')
 video.pause()
    }
   else{
       span.classList.remove('list')
       video.play()
   }
})