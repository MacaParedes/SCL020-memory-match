import App from './components/App.js';

let namePlayer = "";
// console.log(window.location);
if (window.location.pathname=="/"){
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

if (window.location.pathname!="/"){
    let audio = new Audio('audios/main-theme.mp3');
    audio.play();
    audio.volume = 0.6;
    audio.loop=true; 
    let cardList = App.createCardList();
    let duplicatedList = App.duplicateList(cardList);
    let shuffled = App.shuffle(duplicatedList);
    let bigDiv = App.createBoardElements(shuffled);
    document.getElementById('gameContainer').appendChild(bigDiv);
}