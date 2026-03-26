// utils/mockApi.ts
export async function fetchMockData<T>(data: T, delayMs: number = 10000, errorRate: number = 0.01): Promise<T> {
  console.log('fetchMockData()', new Date(Date.now()).toLocaleTimeString())
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < errorRate) {
        reject(new Error('Failed to fetch data from the server.'))
      }
      else {
        resolve(data)
      }
    }, delayMs)
  })
}
