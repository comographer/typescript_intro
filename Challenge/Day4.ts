// Last

type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(lastItem);

// Prepend

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) => [item, ...items];

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items, 0);

console.log(newItems);
