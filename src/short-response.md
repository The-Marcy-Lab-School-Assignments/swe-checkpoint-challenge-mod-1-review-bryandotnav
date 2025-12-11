# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The bug is occuring because we cannot use the `let` keyword inside of the `if else` statement in this context. This is because `let` creates a new **block-scoped** variable everytime that it is used and when we have the `return` statement outside of the if else statement it will refer to the globally assigned variable on line 18 `let letter;`. Because this variable does not have anything saved so it will automatically return `undefined` as that is the implicit return.

**Part B:**

I would fix it by removing the `let` keyword from every reassignment attempt in the if else statement. So that each time we write `letter = [insert string]` is refers to the global scope and changes the value of the globally defined variable in line 18, allowing us to change the value based off the condition met.

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

In the code above:

```js
{ volume: 75, brightness: 80 }
```

will be logged to the console because `newSettings` and `originalSettings` are **referencing** the same **object**. And Because they are referencing the same object, any changes made from one **variable** will affect the original object.

**Part B:**

You would need to create a **copy** of the `originalSettings` object and have it saved to `newSettings` to be able to create changes that would not affect `originalSettings.volume`. This would allow for both objects to exist and be changed. The best way to do this is by using the **spread operator**. This operator creates copies of arrays and objects so that the original cannot be **mutated**.

**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings };
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

In the first iteration of `filter`, we check through each value in `inStock` to see if they **equate** to `true`. If so, we add it into a new `array` that will soon be returned once the method has finished iterating through each value. The value of `product` in this code are the individual key value pairs in the object, for example `{ name: "Laptop", price: 1000, inStock: true }` itself is a product and so on. This means that `filter` is going through each `product` and checking specifically `product.inStock`, as that is what we're returning, to see if it is true or false.
