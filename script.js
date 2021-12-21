console.log("Welcome to Spotify");


let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs= [

{songName: "NationalAnthem", filePath: "1.mp3", coverPath: "cover1.jpg"},
{songName: "Shabashiya-Mission Mangal____", filePath: "2.mp3", coverPath: "cover2.jpg"},
{songName: "Dil Me Marse Hai", filePath: "3.mp3", coverPath: "cover3.jpg"},
{songName: "Tota Udd", filePath: "4.mp3", coverPath: "cover4.jpg"},  
{songName: "Give me some Sunshine", filePath: "5.mp3", coverPath: "cover5.jpg"},
{songName: "All Is Well-Remix", filePath: "6.mp3", coverPath: "cover6.jpg"},
{songName: "Quetion Mark", filePath: "7.mp3", coverPath: "cover7.jpg"}

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


//handle paly,pouse clicks
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
       audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    } 
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //audioElement.src = '${songIndex+1}.mp3';
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
       
        masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');

    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
       
        masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');

    })

      document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
           
            masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
        })