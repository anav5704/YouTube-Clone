import axios from "axios"

const URL = "https://youtube-v31.p.rapidapi.com"

const options = {
   params: {
    maxResults: "25"
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

async function ftechAPI(url){
        const { data } = await axios.get(`${URL}/${url}`, options)
        return data
}

export default ftechAPI