const fetchListItems = () =>
  fetch('https://www.mocky.io/v2/5ae70c532f00004a00f05968', {
    method: 'get',
  }).then(response => response.json());

export default fetchListItems;
