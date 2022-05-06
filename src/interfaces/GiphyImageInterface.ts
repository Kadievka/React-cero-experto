export interface GiphyImageInterface {
  id: string,
  title: string,
  images: {
    downsized_medium: {
      url: string
    },
  },
}