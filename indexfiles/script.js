"use strict";
const appContent = document.getElementById("content");
const appMusic = document.getElementById("music");
window.addEventListener("load", mainMenu());
var musicSources = `{
    "op10no1":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._1_in_C_major_%27Waterfall%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no2":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._2_in_A_minor_%27Chromatique%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no3":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._3_in_E_major_%27Tristesse%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no4":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._4_in_C-Sharp_minor_%27Torrent%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no5":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._5_in_G-Flat_major_%27Black_Keys%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no6":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._6_in_E-Flat_minor_%27Lament%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no7":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._7_in_C_major_%27Toccata%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no8":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._8_in_F_major_%27Sunshine%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no9":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._9_in_F_minor_(Edward_Neeman).flac?embedplayer=yes",
    "op10no10":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._10_in_A-Flat_major_(Edward_Neeman).flac?embedplayer=yes",
    "op10no11":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._11_in_E-Flat_major_%27Arpeggio%27_(Edward_Neeman).flac?embedplayer=yes",
    "op10no12":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._10_-_No._12_in_C_minor_%27Revolutionary%27_(Edward_Neeman).flac?embedplayer=yes",
    "troisNouvelles1":"https://commons.wikimedia.org/wiki/File:Frederic_Chopin_-_Etude,_F_minor_no_opus.ogg?embedplayer=yes",
    "troisNouvelles2":"https://commons.wikimedia.org/wiki/File:Frederic_Chopin_-_Etude,_Ab_major_no_opus.ogg?embedplayer=yes",
    "troisNouvelles3":"https://commons.wikimedia.org/wiki/File:Frederic_Chopin_-_Etude,_Db_major_no_opus.ogg?embedplayer=yes",
    "op25no1":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._1_in_A-Flat_major_%27Harp_Study%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no2":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._2_in_F_minor_%27The_Bees%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no3":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._3_in_F_major_%27The_Horseman%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no4":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._4_in_A_minor_%27Paganini%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no5":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._5_in_E_minor_%27Wrong_Note%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no6":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._6_in_G-Sharp_minor_%27Thirds%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no7":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._7_in_C-Sharp_minor_%27Cello%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no8":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._8_in_D-Flat_major_%27Sixths%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no9":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._9_in_G-Flat_major_%27Butterfly_Wings%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no10":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._10_in_B_minor_%27Octave%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no11":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._11_in_A_minor_%27Winter_Wind%27_(Edward_Neeman).flac?embedplayer=yes",
    "op25no12":"https://commons.wikimedia.org/wiki/File:Chopin_-_12_%C3%89tudes,_Op._25_-_No._12_in_C_minor_%27Ocean%27_(Edward_Neeman).flac?embedplayer=yes"
}`;
var musicSources = JSON.parse(musicSources);
var musicData = `{
    "op10no1":"Edward Neeman",
    "op10no2":"Edward Neeman",
    "op10no3":"Edward Neeman",
    "op10no4":"Edward Neeman",
    "op10no5":"Edward Neeman",
    "op10no6":"Edward Neeman",
    "op10no7":"Edward Neeman",
    "op10no8":"Edward Neeman",
    "op10no9":"Edward Neeman",
    "op10no10":"Edward Neeman",
    "op10no11":"Edward Neeman",
    "op10no12":"Edward Neeman",
    "troisNouvelles1":"Martha Goldstein",
    "troisNouvelles2":"Martha Goldstein",
    "troisNouvelles3":"Martha Goldstein",
    "op25no1":"Edward Neeman",
    "op25no2":"Edward Neeman",
    "op25no3":"Edward Neeman",
    "op25no4":"Edward Neeman",
    "op25no5":"Edward Neeman",
    "op25no6":"Edward Neeman",
    "op25no7":"Edward Neeman",
    "op25no8":"Edward Neeman",
    "op25no9":"Edward Neeman",
    "op25no10":"Edward Neeman",
    "op25no11":"Edward Neeman",
    "op25no12":"Edward Neeman"
}`;
var musicData = JSON.parse(musicData);

function mainMenu() {
    const newContent = `
    <h2>find an étude</h2>
    <p>Chopin's études are organized into three groups; please select a group to find an étude.</p><br>
    <div class="opusMenu">
        <a href="javascript:void(0);" onclick="opus10()"><img src="indexfiles/opus10.svg" alt="Opus 10" /></a>
        <a href="javascript:void(0);" onclick="opus25()"><img src="indexfiles/opus25.svg" alt="Opus 25" /></a>
        <a href="javascript:void(0);" onclick="troisNouvelles()"><img src="indexfiles/troisNouvelles.svg" alt="Trois Nouvelles Etudes" /></a>
    </div>
    <br><h2>recommendations</h2><p>
        four of kpoovakan's favorite Chopin études.
    </p><p class="listing">
    <a href="javascript:void(0);" onclick="music('op10no2'); removeMenu()">Op. 10 No. 2, A minor, "Chromatique"</a><br>
    <a href="javascript:void(0);" onclick="music('op10no8'); removeMenu()">Op. 10 No. 8, F major, "Sunshine"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no9'); removeMenu()">Op. 25 No. 9, G♭ major, "Butterfly"</a><br>
    <a href="javascript:void(0);" onclick="music('op25no11'); removeMenu()">Op. 25 No. 11, A minor, "Winter Wind"</a><br>
    </p><br><h2>about Chopin</h2><p>
        Frédéric François Chopin, also known as Fryderyk Franciszek Chopin, was born on 1 March 1820. He grew up in Warsaw, which was part of Poland at the time. He was an extremely talented composer of piano pieces, writing primarily for solo piano. Chopin died when he was only 39 years old, in 1849.
        </p><p>"Chopin" is pronounced "show-pan", not "chop-ehn".</p><p>
        Some of Chopin's compositions from early childhood are lost, but currently, more than 230 of his works survive. Like many piano pieces, most of Chopin's works are grouped into Opuses ("Op" for short) and individualized by numbers ("No" for short), like his Étude Opus 25 Number 9, or Étude Op. 25 No. 9. Chopin didn't give his Études names, but many modern people have nicknamed most of his études. For example, Étude Op. 25 No. 9 is commonly known as the Butterfly Étude.
        </p><p>Chopin's Opus 10 and Opus 25 are collections of études; each of those opuses have 12 études each. Chopin also had a collection called Trois Nouvelles Études (meaning "three new études") which do not have an opus.
        </p><p>The Royal Conservatory of Music (RCM) sorts piano pieces into grade levels. Only a small number of Chopin's études are RCM Grade 10; most of Chopin's études are RCM's ARCT level. ARCT is a piano grade level that is considered the equivalent of a bachelor's degree in music. If you can play one of Chopin's ARCT-level études, consider it an accomplishment!
    </p><br><h2>about the app developer</h2><p>
        This web app was created by <a href="/">kpoovakan</a>. She is a computer programmer, pi (and math) enthusiast, and pianist. She is currently capable of playing two of her favorite Chopin études: Étude Op. 25 No. 9 ("Butterfly") and Étude Op. 25 No. 11 ("Winter Wind"). Someday she will learn the others... (or maybe not?)
    </p>
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
    var thisData = musicData[findMusic];
    if (thisData == "Edward Neeman") {
        var thisData = thisData + " and the audio is public domain.";
    } else if (thisData == "Martha Goldstein") {
        var thisData = thisData + " and the audio is <a href='https://creativecommons.org/licenses/by-sa/2.0/'>Creative Commons Attribution Share-Alike</a>.";
    }
    appMusic.innerHTML = appMusic.innerHTML + "<p>this piece is performed by "+thisData+"</p>";
}

function removeMenu() {
    appContent.innerHTML = `<p><a href="javascript:void(0);" onclick="mainMenu()">main menu</a></p>`;
}