import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7abbaO8DHh3LxAhgmgUkMFQ7XS0NaZmXSpnqEVG6leQ",
  },
});
