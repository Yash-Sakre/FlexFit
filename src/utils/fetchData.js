export const Exerciseoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const Youtubeoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {

    const reponse = await fetch(url,options);

    const data = await reponse.json();

    return data;

}