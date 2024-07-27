# JavaScript HashMap Implementation

This repository contains a simple implementation of a `HashMap` class in JavaScript along with a `HashSet` class that leverages the `HashMap` class for its functionality.

## HashMap Class

The `HashMap` class implements a hash map (or hash table), a data structure that maps keys to values for efficient data retrieval.

### Methods

1. **Constructor**:

   ```javascript
   constructor((initialCapacity = 16), (loadFactor = 0.75));
   ```

   - `initialCapacity`: The initial number of buckets in the hash map.
   - `loadFactor`: The maximum load factor before resizing occurs. Defaults to `0.75`.

2. **hash(key)**:

   ```javascript
   hash(key);
   ```

   - Computes a hash code for a given string `key` using a simple hashing algorithm.
   - The hash code is used to determine the bucket index.

3. **set(key, value)**:

   ```javascript
   set(key, value);
   ```

   - Adds a key-value pair to the hash map. If the key already exists, the value is updated.
   - Checks if the current load factor exceeds the defined limit and resizes the hash map if necessary.

4. **get(key)**:

   ```javascript
   get(key);
   ```

   - Retrieves the value associated with the given key.
   - Returns `null` if the key does not exist.

5. **has(key)**:

   ```javascript
   has(key);
   ```

   - Checks if the given key exists in the hash map.
   - Returns `true` if the key exists, otherwise `false`.

6. **remove(key)**:

   ```javascript
   remove(key);
   ```

   - Removes the key-value pair associated with the given key.
   - Returns `true` if the key was successfully removed, otherwise `false`.

7. **length()**:

   ```javascript
   length();
   ```

   - Returns the number of key-value pairs in the hash map.

8. **clear()**:

   ```javascript
   clear();
   ```

   - Clears all key-value pairs from the hash map.

9. **keys()**:

   ```javascript
   keys();
   ```

   - Returns an array of all keys in the hash map.

10. **values()**:

    ```javascript
    values();
    ```

    - Returns an array of all values in the hash map.

11. **entries()**:

    ```javascript
    entries();
    ```

    - Returns an array of all key-value pairs in the hash map.

12. **resize()**:
    ```javascript
    resize();
    ```
    - Doubles the size of the buckets array and rehashes all existing key-value pairs.

### Example Usage

```javascript
const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// Overwriting some nodes
test.set("apple", "green");
test.set("banana", "brown");

// Adding new node to trigger resize
test.set("moon", "silver");

console.log(test.get("apple")); // green
console.log(test.get("banana")); // brown
console.log(test.get("carrot")); // orange
console.log(test.get("moon")); // silver

console.log(test.has("dog")); // true
console.log(test.remove("dog")); // true
console.log(test.has("dog")); // false

console.log(test.length()); // 12

test.clear();
console.log(test.length()); // 0

test.set("apple", "red");
test.set("banana", "yellow");
console.log(test.keys()); // ['apple', 'banana']
console.log(test.values()); // ['red', 'yellow']
console.log(test.entries()); // [['apple', 'red'], ['banana', 'yellow']]
```
