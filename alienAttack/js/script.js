
class Ship {
	constructor (spaceId, hull, firepower, accuracy) {
    	this.spaceId = spaceId;
    	this.hull = hull;
        this.remainingHull = hull;
        this.firepower = firepower;
        this.remainingFirepower = firepower;
        this.accuracy = accuracy;
    }
	
	//Getter
	get hullNow() {
		return this.remainingHull;
	}
	
	tryToFire() {
		let myOdds = this.accuracy;
		let didIhit = Math.random();	
		
		// if the random number is less than my accuracy, then it's a hit, else it is not
		if (didIhit < myOdds) {
			return this.firepower;
		} else {
			return 0;
		}
	}

	assessDamage (hit) {
		this.remainingHull -= hit;
	}
}


// function delay(time) {
//  return new Promise(resolve => setTimeout(resolve, time));
//}


function doWeContinue(myShip, numEnemyRemaining) {
  var txt;
  var keepGoing;
  if (confirm("You won that battle.  You have " + myShip.hullNow + " hull.  There are " + numEnemyRemaining + " ships remaining.  Press okay to battle next ship. Press Cancel to retreat.")) {
    txt = "You pressed OK! We will Continue";
	keepGoing = true;
  } else {
    txt = "You pressed Cancel! We will retreat - FOR NOW";
	keepGoing = false;
  }
	return keepGoing;
}



// below here should all be a function - but start with a function that represents a game turn
function playGame() {
    console.log('The game has started')
    //function runGame
    runGame();
}

function attackShip(myShip, shipAttacking) {

	while (myShip.remainingHull > 0 && shipAttacking.remainingHull > 0) {
		let damage = myShip.tryToFire();
		console.log("damage is: " + damage);
		let iwon = true;


		// if damage is not 0 - so greater than 0
		if (damage) {
			console.log("I got a hit")
			console.log('their hull was at ' + shipAttacking.remainingHull);
			shipAttacking.assessDamage(damage);
			console.log('their hull is now at ' + shipAttacking.remainingHull);
			if (shipAttacking.remainingHull <= 0) {
				console.log('they are defeated!!');
				let theirString = 'I Hit! AND they are defeated: ' + shipAttacking.remainingHull;
				document.getElementById("demo5").innerHTML =  theirString ;
				return iwon;
				// numEnemyRemaining--;
			}
			else {
				console.log('it is now their turn');
				let theirString = 'I Hit! BUT their hull is still at: ' + shipAttacking.remainingHull;
				document.getElementById("demo5").innerHTML =  theirString ;
				// STILL NEED TO CONTINUE
			}
		} else {
			// console.log ('I missed! and now it"s their turn')
			let theirString = 'I missed! Their hull is still at: ' + shipAttacking.remainingHull;
			console.log(theirString);
			document.getElementById("demo5").innerHTML =  theirString ;
		}
	
		//They return the attack
		// what are their attack odds and attack score

		// they can only attack if they were not defeated
		// the first if should be extraneous because function should exit when their hull is less than or equal to 0
		if (shipAttacking.remainingHull > 0) {
			let damage = shipAttacking.tryToFire();
			console.log("damage is: " + damage);
			if (damage) {
				console.log("THEY got a hit")
				console.log('my hull was at ' + myShip.remainingHull);
				myShip.assessDamage(damage);
				console.log('my hull is now at ' + myShip.remainingHull);
				if (myShip.remainingHull <= 0) {
					console.log('I am defeated!! :-(');
					let myString = 'They Hit :-( AND I am defeated: ' + myShip.remainingHull;
					document.getElementById("demo4").innerHTML =  myString ;
    	        	iAmDefeated = true;
					iwon = false;
					return iwon;
				}
				else {
					console.log('This round is over');
					let myString = 'They Hit :-( but I am not defeated: ' + myShip.remainingHull;
					document.getElementById("demo4").innerHTML =  myString ;
				}
			} else {
				console.log ('They missed! and now this round is over')
				let myString = 'They Missed!  and this round is over: ' + myShip.remainingHull;
				document.getElementById("demo4").innerHTML =  myString ;
			}
		} else {
			//should never get in here
		// they can't attack because that ship was defeated
			let myString = 'They were defeated and not attacking and my hull is at: ' + myShip.remainingHull;
			document.getElementById("demo4").innerHTML =  myString;
		}
	}

}


function runGame() {
	// defining my ship
	// my ship has the following traits: hull = 20, firepower = 5, accuracy = .7
	const myShip = new Ship('USS Hello World!', 20, 5, .7);
	// According to mdn this should output the name - myShip but it is not
	// console.log(myShip.name);
	console.log(myShip);


	// displaying my ship
	document.getElementById("demo2").innerHTML =  myShip.spaceId ;
	document.getElementById("demo1").innerHTML = 'my ship has an initial hull of ' + myShip.hull + ' and remaining of: ' + myShip.remainingHull;


	// defining the alien ships
	// The alien ships should each have the following ranged properties determined randomly:
	// hull - between 3 and 6
	// firepower - between 2 and 4
	// accuracy - between .6 and .8
	// You could be battling six alien ships each with unique values.
	// i need 6 new alien ships, and i'll put them in an array for easier access and tracking

	// for 1 to 6 (or really 0 to 5) i'm going to define the alien ship values, create an object, and push that onto the array
	const alienShipArr = [];
	for (let i = 0; i < 6; i++) {
		let newAlienShipName = 'Scary Alien Ship ' + (i+1);
    	//console.log('hi');
	    //console.log(newAlienShipName);
    
    	// the description says between 3 and 6, which i am interpreting as 3, 4, 5, 6
    	let newAlienShipHull = 3 + Math.floor(Math.random() * 4);
    	// similarly, the description says between 2 and 4
    	let newAlienShipFirepower = 2 +  Math.floor(Math.random() * 3);
    	// to get 0-1 to be between .6 and .8, i'm going to divide by 5 to get it from 0-.2 and then add .6
    	let newAlienShipAccuracy = .6 + (Math.random() / 5);
    
    
		//console.log(newAlienShipName, newAlienShipHull, newAlienShipFirepower, newAlienShipAccuracy);
    
    	const newAlienShip = new Ship(newAlienShipName, newAlienShipHull, newAlienShipFirepower, newAlienShipAccuracy);
       	//console.log(newAlienShip);
		
    	alienShipArr.push(newAlienShip);
	}

	// console.log(alienShipArr)

	let displayString = '';
	// for (let i = 0; i < 6; i ++) {
	//	displayString += alienShipArr[i].spaceId + ' has an initial hull of ' + alienShipArr[i].hull + ', an initial firepower of ' + alienShipArr[i].firepower + ', and an accuracy of ' + alienShipArr[i].accuracy + '----------\n' ; 
	// }
	for (let i = 0; i < 6; i ++) {
		displayString += alienShipArr[i].spaceId + '   ' + '----------\n' ; 
	}
	// console.log(alienShipArr[0].spaceId)
	console.log(displayString);

	// displaying my ship
	document.getElementById("demo3").innerHTML =  displayString ;


	// Now that my ship and the alien ships are constructed, attack a ship
	// until it is defeated (its reamining hull is 0) or i am defeated (my remaining hull is 0)

	//start with one attack
	// what is my hull and what is theirs?
	let theirHull = alienShipArr[0].hullNow;
	console.log('my hull is : ' + myShip.hullNow + ' and theirs is : ' + theirHull);
	// what are my attack odds and attack score

	// add a method tryToFire()
	// and assessDamage
	//start with one battle, against one ship
	//while both ships are not defeated (both hulls > 0), battle

	let iAmDefeated = false;
	let numEnemyRemaining = 6;
	let index = 0
	var keepGoing = true;

	while (!iAmDefeated && keepGoing && numEnemyRemaining > 0) {
		let iwon = attackShip(myShip, alienShipArr[index]);
		//return something that shows who won, if I won, I can continue if I choose, but also decriment the number of enemies
		if (iwon) {
			numEnemyRemaining--;
			let myString = 'They were defeated and not attacking and my hull is at: ' + myShip.remainingHull;
			document.getElementById("demo4").innerHTML =  myString;
			index++;
		} else {
		//if i lost, the game is done
			iAmDefeated = true;
		}

	// if i am defeated, i lose, if it is defeated and there are more, check what to do next
	// probably display remaining ships and stats
	// 
		if (!iAmDefeated && numEnemyRemaining) {
			keepGoing = doWeContinue(myShip, numEnemyRemaining);
			console.log(keepGoing);
		}
		console.log('number of enemies left is: '+ numEnemyRemaining);
		console.log('index is: ' + index);
		console.log('i am defeated is: ' + iAmDefeated);
	}

	if (!iAmDefeated && keepGoing) {
		let myString = 'They were defeated and not attacking and my hull is at: ' + myShip.remainingHull;
		document.getElementById("demo4").innerHTML =  myString;
		let theirString = 'I defeated all of them.  There are : ' + numEnemyRemaining + ' enemies remaining';
		document.getElementById("demo5").innerHTML =  theirString ;
	}
	else if (iAmDefeated) {
		let myString = 'Oh no! I was defeated! My hull is at: ' + myShip.remainingHull;
		document.getElementById("demo4").innerHTML =  myString;
		let theirString = 'They defeated me and there are : ' + numEnemyRemaining + ' enemies remaining';
		document.getElementById("demo5").innerHTML =  theirString ;
	} else {
		let myString = 'I chose to leave this battle. My hull is at: ' + myShip.remainingHull;
		document.getElementById("demo4").innerHTML =  myString;
		let theirString = 'There are : ' + numEnemyRemaining + ' enemies remaining';
		document.getElementById("demo5").innerHTML =  theirString ;

	}
}