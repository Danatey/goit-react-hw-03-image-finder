const BASE_URL = 'https://pixabay.com/api';
const KEY = '21923762-625ed23d6fd96f8b8b3fcd755';

const getAPI = (search, currPage) => {
    fetch(`${BASE_URL}/?q=${search}&page=${currPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(console.log)
}

export default getAPI

