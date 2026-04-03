export default defineCachedEventHandler(
  async (event) => {
    const id = getRouterParam(event, 'id')
    const post = await $fetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return {
      post,
      fetchedAt: new Date().toISOString(),
      requestId: crypto.randomUUID().slice(0, 8),
    }
  },
  {
    maxAge: 30,
    name: 'posts-by-id',
    getKey: (event) => getRouterParam(event, 'id') ?? 'unknown',
  },
)

interface Post {
  userId: number
  id: number
  title: string
  body: string
}
