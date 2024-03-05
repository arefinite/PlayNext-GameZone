
import placeholderImage from '/public/placeholder-image.jpg'
export const cropImageUrl = (url: string) => {
  if(!url) return placeholderImage
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
