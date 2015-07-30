<?php

include("analyticstracking.php"); 

function printRandomItem($array) {
    echo $array[array_rand($array)]; 
}

$firstname1 = array(
"Twinkle",
"Sparkle",
"Glitter",
"Little",
"Ginger",
"Bartle",
"Bob",
"Tiny",
"Green",
"Blue",
"Orange",
"Purple",
"Rainbow",
"Peach",
"Elbow",
"Tingle",
"Polar",
"Doodle",
"Brownie",
"Thimble",
"Funky",
"Fun",
"Rumple",
);

$firstname2 = array(
"face",
"foot",
"toot",
"root",
"bell",
"dog",
"cat",
"small",
"peach",
"bee",
"bear",
"butt",
"feather",
);

$lastname1 = array(
"Cod",
"Tree",
"Sting",
"Soy",
"Window",
"Winter",
"Green",
"Blue",
"Orange",
"Purple",
"Rainbow",
"Gold",
"Ten",
"Eleven",
"Tickle",
"Curry",
"Pan",
"Oven",
"Stinker",
"Snicker",
"Salty",
"Turtle",
"Un",
"Fun",
"Leg",
"Rumple",
"Monkey",
"Rude",
"Hairy",
);


$lastname2 = array(
"melon",
"fence",
"fart",
"by",
"metal",
"paste",
"thwait",
"tree",
"doodle",
"salmon",
"fish",
"bottom",
"poodle",
"caper",
"muscle",
"asaurus",
"skeleton",
"draxx",
"sklounst",
"chunk",
"armpit",
"piece",
);

printRandomItem($firstname1);
printRandomItem($firstname2);
echo ' ';
printRandomItem($lastname1);
printRandomItem($lastname2);

echo PHP_EOL;

?>
