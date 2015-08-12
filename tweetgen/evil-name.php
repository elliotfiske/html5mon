<?php

include("analyticstracking.php"); 

function printRandomItem($array) {
    echo $array[array_rand($array)]; 
}


$firstname1 = array(
"Evil",
"Nasty",
"Wicked",
"Unreasonable",
"Booty",
"Butt",
"Bob",
"Devil",
"Ugly",
"Twist",
"Foul",



);

$firstname2 = array(
"cat",
"bad",
"fang",
"knife",
"blade",
"face",
"mouth",
"skull",



);

$lastname1 = array(
"Gold",
"Mangle",
"Cruel",
"Horror",
"Stink",
"Fart",
"Mafia",

);

$lastname2 = array(
"thwait",
"fang",
"fart",
"asaurus",
"licker",
"eye",
"demon",
"catcher",
"gangster",
"death",

);

$friendWords = array(
"KING",
"QUEEN",
"LORD",
"FATHER",
"MOTHER",
"FRIEND",
"LEADER",
"SPAWN",
"SCOURGE",
"CHILD",

);

$badThings = array(
"DARKNESS",
"EVIL",
"SIN",
"HATRED",
"THE HIVE",
"DEMONS",
"THE DEEP",
"AWKWARD CONVERSATIONS",

);

$enemyWords = array(
"FOE",
"SCOURGE",
"TERROR",
"HORROR",
"DEMON",

);

$places = array(
"SPAIN",
"THE VILLAGE",
"THE KINGDOM",
"MY BUTT",
"TRANSYLVANIA",

);

$descriptiveAdjective = array(
"THE RED",
"THE ORANGE",
"CREEPING",
"THE BLUE",


);

$badNoun = array(
"MENACE",
"DEATH",
"TERROR",
"DEMON",
"DOOM",
"DARKNESS",

);

printRandomItem($firstname1);
printRandomItem($firstname2);
echo ' ';
printRandomItem($lastname1);
printRandomItem($lastname2);

echo ',';

echo PHP_EOL;

$whuh = rand(0, 2);
if ($whuh == 0) {
    // <Ally> of <Bad thing>    
    printRandomItem($friendWords);
    echo ' OF ';
    printRandomItem($badThings);
}
else if ($whuh == 1) {
    // <Noun> of <Place>
    printRandomItem($enemyWords);
    echo ' OF ';
    printRandomItem($places);
}
else {
    // The <Adjective> <Noun>
    printRandomItem($descriptiveAdjective);
    printRandomItem($badNoun);
}

echp PHP_EOL;

?>
