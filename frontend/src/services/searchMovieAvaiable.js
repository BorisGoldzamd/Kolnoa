import url from './url.js';
async function searchMovieAvaiable(title) {
try {
    const response = await fetch(`${url}/search/available/${encodeURIComponent(title)}`);
    if (!response.ok) {
        throw new Error('Failed to fetch streaming info');
    }
    const data = await response.json();
    return data[0] ?? [];
    
} catch (error) {
    console.error("Error fetching streaming info:", error);
}
}

export default searchMovieAvaiable;