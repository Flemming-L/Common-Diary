function changeSentence() {
    const sentenceElement = document.getElementById("strange");
    const sentences = [
        "Strange things for strange people.",
        "Unlink the world, unlock the more.",
        "Duck Beini is GOD!!!",
        "Stop clicking this useless button, OK?"
    ];
    let newSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceElement.innerHTML = newSentence;
}
function loadNavbar(){
const foundation = document.getElementById('navbar-foundation');
if(!foundation) {
    return;
}
foundation.innerHTML =
`
    <div class="navbar">
      <p class="navbarBtn" id="home" onclick="window.location='/index.html'">CommonDiary</p>
      <p class="navbarBtn" id="strange" onclick="changeSentence()">Strange things for strange people.</p>
      <p style="float:right;" class="navbarBtn" id="login" onclick="window.location='/login.html'">登录</p>
    </div>
`;
}