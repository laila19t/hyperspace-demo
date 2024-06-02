const PEXELS_API_KEY = 'epKXRyjayq51uH0SVdNUgTDVRpeY9zqRYhCFweLbPegfpgQu511kecfg';
const PEXELS_API_URL = 'https://api.pexels.com/v1/search?query=colors&per_page=7';

export async function fetchImageURL() {
    const response = await fetch(PEXELS_API_URL, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });
      const data = await response.json();
return(
    data
)
  }