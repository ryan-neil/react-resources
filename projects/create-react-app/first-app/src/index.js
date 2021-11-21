// import the fruits and both array functions from helpers.js then:
import fruits from './fruits';
import { choice, remove } from './helpers';

// 1. Randomly draw a fruit from the array
let randomFruit = choice(fruits);
// 2. Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I’d like one ${randomFruit}, please.`);
// 3. Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${randomFruit}`);
// 4. Log the message “Delicious! May I have another?”
console.log('Delicious! May I have another?');
// 5. Remove the fruit from the array of fruits
let remaining = remove(fruits, randomFruit);
// 6. Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(
	`I’m sorry, we’re all out. We have ${remaining.length} other foods left.`
);
