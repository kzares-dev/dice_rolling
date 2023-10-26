export function generateRandomNumber() {
    const numbers = [0, 1, -1];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}

