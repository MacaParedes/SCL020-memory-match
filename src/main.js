import App from './components/App.js';

let namePlayer = "";

if (window.location.pathname=="/SCL020-memory-match/"){
    document.getElementById("text").addEventListener('change',function(){
        namePlayer = document.getElementById("text").value;
        const saveToLocalStorage = () => {
            localStorage.setItem("PlayerName", namePlayer);
        }
        saveToLocalStorage();
        if (namePlayer!=""){
            let str = "Se escaparon mis Pokemones y dicen que solo regresarán si encontramos a sus parejas... ¿me ayudas a atraparlos?";
            let arr = Array.from(str);
            for (let i=0;i<arr.length;i++){
                setTimeout(function(){
                    document.getElementById('p').innerHTML+=arr[i];
                },80 * i);
            }
            setTimeout(function(){
                document.getElementById('start').style.visibility='visible';
            },9500);
        } 
    });   
}

if (window.location.pathname!="/SCL020-memory-match/"){
    let audio = new Audio('audios/main-theme.mp3');
    audio.play();
    audio.volume = 0.2;
    audio.loop=true; 
    let cardList = App.createCardList();
    let duplicatedList = App.duplicateList(cardList);
    let shuffled = App.shuffle(duplicatedList);
    let bigDiv = App.createBoardElements(shuffled);
    document.getElementById('gameContainer').appendChild(bigDiv);
}

//"/SCL020-memory-match/"