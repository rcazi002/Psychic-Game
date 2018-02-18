

function GetKey(e)
{
	var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var rndnumber = Math.floor((Math.random() * 25) + 0);
    

	if(e == letter[rndnumber].toLowerCase())
	{
		//reset guesses 
		// increment wins
		AddWin();
		resetGuesses();
		//alert(rndnumber + letter[rndnumber]);
	}
	else
	{
		//show letter
		$("#guessofar").append(e + " , ");
		
		//decrement  gueses left 
		decreaseGuesses();

	}
	
}
function AddWin()
{
    var wintext = document.getElementById("wins");
    var x = $("#wins").text();
    var newvalue = parseInt(x) + 1;
    wintext.textContent = newvalue;
    $("#guessofar").text("");

}
function resetGuesses()
{
	var guesstext = document.getElementById("guesses");
	guesstext.textContent = 9;
}

function decreaseGuesses()
{
    var loosetext = document.getElementById("guesses");
    var guessleft = $("#guesses").text();
    var newvalue = parseInt(guessleft) - 1;
    if(newvalue == 0)
    {
    	loosetext.textContent = 9;
    	addLosses();
    }
    else
    {
    	loosetext.textContent = newvalue;
    }

}

function addLosses()
{
	var losses = document.getElementById("losses");
    var lossnumber = $("#losses").text();
    var newvalue = parseInt(lossnumber) + 1;
    losses.textContent = newvalue;
    $("#guessofar").text("");
}