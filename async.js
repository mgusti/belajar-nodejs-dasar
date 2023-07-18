function samplePromise() {
  return Promise.resolve("Saya");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
