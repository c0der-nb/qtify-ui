import axios from  "axios";

export const API_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
    try {
        const apiResponse = await axios.get(API_ENDPOINT+"/albums/top");
        return apiResponse.data;
      }
    catch (e) {
        console.error(e);
    }
}

export const fetchNewAlbums = async () => {
    try {
        const apiResponse = await axios.get(API_ENDPOINT+"/albums/new");
        return apiResponse.data;
    }
    catch (e) {
        console.error(e);
    }
}

export const fetchSongs = async () => {
    try {
        const apiResponse = await axios.get(API_ENDPOINT+"/songs");
        return apiResponse.data;
    }
    catch (e) {
        console.error(e);
    }
}

export const fetchFilters = async () => {
    try {
        const apiResponse = await axios.get(API_ENDPOINT+"/genres");
        return apiResponse.data;
    }
    catch (e) {
        console.error(e);
    }
}