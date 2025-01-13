import axios from 'axios';
import { Category } from '../interface/category';

export const fetchCategories = async (): Promise<Category[]> => {
    try {
      const response = await axios.get('https://api.gooway.co/api/categories/listar');
      return response.data as Category[];
    } catch (error: any) {
      console.error('Error fetching categories:', error.response || error.message);
      throw new Error(
        `Error al obtener las categorías: ${error.response?.status || 'desconocido'} - ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };
  
