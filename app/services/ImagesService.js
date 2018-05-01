const fetchImages = () =>
  fetch('https://www.mocky.io/v2/5ae89f4c2d0000d4077b4981', {
    method: 'get',
  }).then(response => response.json());

export default fetchImages;
