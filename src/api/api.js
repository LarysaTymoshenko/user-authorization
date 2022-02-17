import axios from 'axios';
import { onError } from '../utilits/toast';
const getImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,

  params: {
    key: '23833327-aee66bbf86a23c3fb1d188dcb',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export async function searchImages(name, page) {
  const params = { q: name, page };
  try {
    const { data } = await getImages('', { params });
    return data;
  } catch (error) {
    onError(`Sorry, please enter the name again `);
  }
}
