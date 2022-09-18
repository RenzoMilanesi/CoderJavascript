var reproductor = videojs('fm-video',{
fluid:true,
controls:true,
loop:false,
preload:true,
});

const videoini=document.querySelector("#video_inicio")
const btn_silenciar=document.getElementById("btn-silenciar")


  btn_silenciar.addEventListener('click',(e)=>{
    if(e.target === btn_silenciar){
        var videoini=document.getElementById("video_inicio");
        videoini.muted = !videoini.muted;
        
    }
})