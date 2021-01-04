import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
const { PORT } = process.env;
class CharactersService {
  constructor({ url = `http://localhost:${PORT}`, timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
