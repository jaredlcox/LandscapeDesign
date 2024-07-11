function getMask(maskId) {
    const url = `https://api.reimaginehome.ai/v1/create_mask/${maskId}`;
    const headers = {
      'api-key': '668f34ce9b303a613cea8fbf'
    };
  
    return fetch(url, { method: 'GET', headers: headers })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

export default getMask;