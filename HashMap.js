class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.size++;
    if (this.size / this.buckets.length > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length);
    this.size = 0;
  }

  keys() {
    const keysArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const pair of bucket) {
          keysArray.push(pair[0]);
        }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const pair of bucket) {
          valuesArray.push(pair[1]);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const pair of bucket) {
          entriesArray.push(pair);
        }
      }
    }
    return entriesArray;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(this.buckets.length * 2);
    this.size = 0;
    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const pair of bucket) {
          this.set(pair[0], pair[1]);
        }
      }
    }
  }
}


