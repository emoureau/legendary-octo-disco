export default defineCachedEventHandler(
  async (event) => {
    console.log(event.toString())
    const photos = await $fetch<Photo[]>('https://jsonplaceholder.typicode.com/photos')
    return {
      photos,
      fetchedAt: new Date().toISOString(),
      requestId: crypto.randomUUID().slice(0, 8),
    }
  },
  {
    maxAge: 10,
  },
)

interface Photo {
  allbumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
