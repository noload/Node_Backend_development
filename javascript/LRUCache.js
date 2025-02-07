class SimpleLRU {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.map = new Map();
  }

  getter(key) {
    if (!this.map.has(key)) return -1;
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  setter(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.capacity <= this.map.size) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
    this.map.set(key, value);
  }
}

const cache = new SimpleLRU(3);
cache.setter(1, "A");
cache.setter(2, "B");
cache.setter(3, "C");
cache.setter(4, "D");
console.log(cache.map);
console.log(cache.getter(1));
cache.setter(5, "F");
console.log(cache.map);

console.log(cache.getter(3));
console.log(cache.map);

console.log(cache.getter(3));

console.log(cache.map);
