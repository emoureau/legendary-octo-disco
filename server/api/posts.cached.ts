export default defineCachedEventHandler(
  async () => {
    const posts = await $fetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
    return {
      posts,
      fetchedAt: new Date().toISOString(),
      requestId: crypto.randomUUID().slice(0, 8),
    }
  },
  {
    maxAge: 10,
    name: 'posts-cached',
  },
)

interface Post {
  userId: number
  id: number
  title: string
  body: string
}
