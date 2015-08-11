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
"Butt,"
"Bob",
"Devil",
"Ugly",
"Dark",
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



);

$lastname1 = array(
"Gold",
"Darker",
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

);

printRandomItem($firstname1);
printRandomItem($firstname2);
echo ' ';
printRandomItem($lastname1);
printRandomItem($lastname2);

echo PHP_EOL;

?>
