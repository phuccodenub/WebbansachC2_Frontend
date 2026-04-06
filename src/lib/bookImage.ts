const PLACEHOLDER_HOSTS = ['placehold.co', 'via.placeholder.com', 'picsum.photos']

// Real book cover URLs from Open Library Covers API (free, no API key)
const KNOWN_COVERS: Record<string, string> = {
  'Dế Mèn Phiêu Lưu Ký': 'https://covers.openlibrary.org/b/id/15204917-L.jpg',
  'Nhà Giả Kim': 'https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg',
  'Đắc Nhân Tâm': 'https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg',
  'Clean Code': 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
  'Sapiens: Lược Sử Loài Người': 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
  'Doraemon Tập 1': 'https://covers.openlibrary.org/b/id/8433064-L.jpg',
  'Tư Duy Nhanh Và Chậm': 'https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg',
  'Lịch Sử Việt Nam Bằng Tranh': 'https://covers.openlibrary.org/b/isbn/9786045839195-L.jpg',
  'Padre Rico Padre Pobre': 'https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg',
  'Hoàng Tử Bé': 'https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg',
  'JavaScript: The Good Parts': 'https://covers.openlibrary.org/b/isbn/9780596517748-L.jpg',
  'Tuổi Trẻ Đáng Giá Bao Nhiêu': 'https://covers.openlibrary.org/b/isbn/9786049412493-L.jpg',
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const buildBookImageUrl = (title: string) => {
  if (KNOWN_COVERS[title]) return KNOWN_COVERS[title]

  const seed = slugify(title) || 'book-cover'
  return `https://picsum.photos/seed/book-${seed}/420/620`
}

export const resolveBookImage = (
  image: string | null | undefined,
  title: string,
) => {
  if (!image) return buildBookImageUrl(title)

  try {
    const parsed = new URL(image)
    if (PLACEHOLDER_HOSTS.includes(parsed.hostname)) {
      return buildBookImageUrl(title)
    }
    return image
  } catch {
    return buildBookImageUrl(title)
  }
}
