# M08W20 - Unit & Integration Testing

### To Do

- [ ] Tools for testing React
- [ ] Coverage Reports
- [ ] Add Features/Test to our Apps
- [ ] `debug()` and `prettyDom()`
- [ ] Mock AJAX Requests and Functions

## Types of testing

- Static Tseting - testing code as it's written

```js
const sum = (num1, num2) => {
  return num1 + num2;
};

sum(4, 6); // 10
```

- Manual - the dev is running the code with some help
- Unit testing - Step 0, Thinking about the outcomes we want, then writing a test for it. Then writing the code for it
- End to end testing - Testing the app like a user would
- A/B Testing - testing 2 versions of a website, so it can be something as simple as changing a button text from "Buy now" "Buy"
- Regression testing - When a bug comes up, we save a copy of the code and later when we make new functions, we test for this bug
