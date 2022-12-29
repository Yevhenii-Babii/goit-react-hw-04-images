import axios from 'axios';
const fetchPicture = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '31524014-10d0b39f5b957f1cdac0cb3f9',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export async function fetchPictures(query, page) {
  try {
    const {
      data: { hits },
    } = await fetchPicture.get('', { params: { q: query, page } });
    return hits;
  } catch (error) {
    return error.message;
  }
}
