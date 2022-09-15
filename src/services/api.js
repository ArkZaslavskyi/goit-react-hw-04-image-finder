import axios from 'axios';

const getImage = async ({ query, page, per_page }) => {
    const API_KEY = '28406971-da9ac527785fed0c52df2227a';
    const baseURL = 'https://pixabay.com/api/';

    const axiosConfig = {
        params: {
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            q: query,
            page,
            per_page,
        }
    };

    const response = await axios.get(baseURL, axiosConfig);
    return response.data;
};

export default getImage;
