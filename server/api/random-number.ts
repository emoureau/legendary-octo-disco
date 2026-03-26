function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

export default defineEventHandler(async () => {
  await sleep(3000)
  return {
    number: Math.random(),
  }
})
