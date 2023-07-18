function samplePromise() {
  return Promise.resolve("Saya");
}

const name = await samplePromise();
console.info(name);
