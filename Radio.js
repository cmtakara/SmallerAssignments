const radio = {
    stations: [ 
        {
        name: 'power123',
        songs: [
            {
            artist: 'Gil Scott Heron', 
            title: 'Peices of a Man'
            },
            {
                artist: 'ACDC',
                title: 'Back in Black'
            }, {
                artist: 'Bjork',
                title: 'Army of Me'
            }, {
                artist: 'Mobb Deep',
                title: 'Drink Away the Pain' 
            }
        ] 
        },
        {
            name: 'power124',
            songs: [
                {
                artist: 'Silk Sonic', 
                title: 'Smoking By the Window'
                },
                {
                    artist: 'Stevie Ray Vaughn',
                    title: 'Heavens Door'
                }, {
                    artist: 'Beyonce',
                    title: 'Single Ladies'
                }
            ] 
            }       
],
    changeStation () {
        // find random number, use that number to access a station, and then access a song in that station

        let stationNum = Math.floor(Math.random()*2);
//        console.log(stationNum);
//        console.log(this.stations[stationNum])
        return(this.stations[stationNum]);
    }
}


let newStation = radio.changeStation();
console.log(`\n changed station to ${newStation.name}`);


let nextInd = Math.floor(Math.random()*(newStation.songs.length));
// console.log(newStation.songs.length);
// console.log(nextInd);
let nextArtist = newStation.songs[nextInd].artist;
let nextSong = newStation.songs[nextInd].title;

console.log(`Now Playging: ${nextSong} by ${nextArtist}\n`);




// ========== The next part is to create an Animal class ==========
// The animal class has name, color, age, and legs
// and then create different methods

class animal {
    constructor(name, color, age, legs) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.legs = legs;
        this.isPet = false;
    }

    //method
    setSound(sound) {
        this.sound = sound;
        //console.log('This is a generic sound...');
        console.log('the animal is: ', this.name, 'and it says: ', this.sound)
    }

    //method
    getOwner(owner) {
        this.isPet = true;
        this.owner = owner;
    }

    goForWalk() {
        if (this.isPet) {
            console.log('I am ' + this.name + ' and I will go for a walk with you.');
        } else {
            console.log('I am ' + this.name + ' and I don"t do that.');
        }
    }
}

const dog = new animal('Spot', 'brown', 2, 4);
console.log(dog);
dog.setSound('woof');
const cat = new animal('Tigger', 'orange tabby', 1, 4);
cat.setSound('meow');
dog.getOwner('George');
dog.goForWalk();
cat.goForWalk();
