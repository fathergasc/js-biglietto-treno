const yearOfBirth = parseInt(prompt('Inserisci la tua data di nascita'));
console.log("yearOfBirth variable's type is " + typeof yearOfBirth);

const travelDistance = parseInt(prompt('Inserisci la distanza da percorrere in km'));
console.log("travelDistance variable's type is " + typeof yearOfBirth);

const priceForKm = 0.21;

const now = new Date();

const currentYear = now.getFullYear();
const age = currentYear - yearOfBirth;

let ticketPrice = priceForKm * travelDistance;

if (age <= 18) {
    ticketPrice = ticketPrice / 100 * 80;
} else if (age >= 65) {
    ticketPrice = ticketPrice / 100 * 60;
}

alert(`Il costo del tuo biglietto è: ${ticketPrice.toFixed(2)}€`);
