import axios from "axios"

const URL = "https://youtube-v31.p.rapidapi.com/search"

const options = {
   params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
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
    try{
        const { data } = await axios.get(`${URL}/` + url, options)
         return data
    }
    catch(err){
        console.log("Fecth error", err)
    }
}

export default ftechAPI