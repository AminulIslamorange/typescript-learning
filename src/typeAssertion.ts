let anything:any;
anything='aminul';

(anything as string)

const kgToGmConverter = (input: string | number): string | number => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `converted output is ${Number(value) * 1000}`;
    }

    throw new Error("Invalid input"); // safety
}

const result1 = kgToGmConverter(2);
const result2 = kgToGmConverter('10 kg');

console.log(result1); // 2000
console.log(result2); // converted output is 10000