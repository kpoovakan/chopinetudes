"use strict";
const appContent = document.getElementById("content");
const appMusic = document.getElementById("music");
window.addEventListener("load", mainMenu());
var musicSources = `{
    "op10no1":"https://commons.wikimedia.org/wiki/File:Chopin_-_Etude_Op._10,_No._1.mid?embedplayer=yes"
}`;
var musicSources = JSON.parse(musicSources);
var musicData = `{
    "op10no1":"Bernd Krueger"
}`;
var musicData = JSON.parse(musicData);

function mainMenu() {
    const newContent = `
    <p>Chopin organized his études into three groups; please select a group to find an étude.</p><br>
    <div class="opusMenu">
        <a href="javascript:void(0);" onclick="opus10()"><img src="indexfiles/opus10.svg" alt="Opus 10" /></a>
        <a href="javascript:void(0);" onclick="opus25()"><img src="indexfiles/opus25.svg" alt="Opus 25" /></a>
        <a href="javascript:void(0);" onclick="troisNouvelles()"><img src="indexfiles/troisNouvelles.svg" alt="Trois Nouvelles Etudes" /></a>
    </div>
    `;
    appContent.innerHTML = newContent;
    appMusic.innerHTML = "";
}

function opus10() {
    const newContent = `<p class="listing">
    <a href="javascript:void(0);" onclick="music('op10no1')">Op. 10 No. 1, C major, "Waterfall"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no2')">Op. 10 No. 2, A minor, "Chromatique"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no3')">Op. 10 No. 3, E major, "Tristesse"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no4')">Op. 10 No. 4, C♯ minor, "Torrent"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no5')">Op. 10 No. 5, G♭ minor, "Black Keys"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no6')">Op. 10 No. 6, E♭ minor, "Lament"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no7')">Op. 10 No. 7, C major, "Toccata"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no8')">Op. 10 No. 8, F major, "Sunshine"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no9')">Op. 10 No. 9, F minor, no nickname</a><br>
    <a href="javascript:void(0);" onclick="music('op10no10')">Op. 10 No. 10, A♭ major, no nickname</a><br>
    <a href="javascript:void(0);" onclick="music('op10no11')">Op. 10 No. 11, E♭ major, "Arpeggio"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no12')">Op. 10 No. 12, C minor, "Revolutionary"</a><br>
    </p><a href="javascript:void(0);" onclick="mainMenu()">main menu</a>`;
    appContent.innerHTML = newContent;
}

function opus25() {
    const newContent = `<p class="listing">
    <a href="javascript:void(0);" onclick="music('op25no1')">Op. 25 No. 1, A♭ major, "Aeolian Harp"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no2')">Op. 25 No. 2, F minor, "The Bees"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no3')">Op. 25 No. 3, F major, "The Horseman"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no4')">Op. 25 No. 4, A minor, "Paganini"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no5')">Op. 25 No. 5, E minor, "Wrong Note"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no6')">Op. 25 No. 6, G♯ minor, "Double Thirds"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no7')">Op. 25 No. 7, C♯ minor, "Cello"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no8')">Op. 25 No. 8, D♭ major, "Sixths"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no9')">Op. 25 No. 9, G♭ major, "Butterfly"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no10')">Op. 25 No. 10, B minor, "Octaves"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no11')">Op. 25 No. 11, A minor, "Winter Wind"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no12')">Op. 25 No. 12, C minor, "Ocean"</a><br>
    </p><a href="javascript:void(0);" onclick="mainMenu()">main menu</a>`;
    appContent.innerHTML = newContent;
}

function troisNouvelles() {
    const newContent = `<p class="listing">
    <a href="javascript:void(0);" onclick="music('troisNouvelles1')">Étude in F minor, adantino</a><br>
    <a href="javascript:void(0);" onclick="music('troisNouvelles2')">Étude in A♭ major, allegretto</a><br>
    <a href="javascript:void(0);" onclick="music('troisNouvelles3')">Étude in D♭ major, allegreto</a><br>
    </p><a href="javascript:void(0);" onclick="mainMenu()">main menu</a>`;
    appContent.innerHTML = newContent;
}

function music(findMusic) {
    const thisSource = musicSources[findMusic];
    appMusic.innerHTML = `<iframe src="`+thisSource+`" width="100%" height="100%">`;
    const thisData = musicData[findMusic];
    appMusic.innerHTML = appMusic.innerHTML + "<p>this piece was played by "+thisData+"</p>";
}