const fetchImages = () =>
  fetch('http://www.mocky.io/v2/5ae6fcc12f00001100f0593c', {
    method: 'get',
  }).then(response => response.json());

export default fetchImages;
