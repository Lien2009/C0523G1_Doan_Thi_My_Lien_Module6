import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SkeletonLoader from "../../components/Loading";
import {
  DOMAIN,
  search,
  API_KEY,
  limit,
  offset,
  rating,
  bundle,
} from "../../util/setting";
import "./Search.css";
const Search = () => {
  const [isLoading, setIsLoading] = React.useState(null);
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = React.useState([]);

  const fetchData = async (keyword) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${DOMAIN}/${search}?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en&bundle=${bundle}`
      );
      setSearchResults(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData(keyword);
  }, [keyword]);
  return (
    <>
      {isLoading && (
        <div className="row">
          {[...Array(9)].map((_, index) => (
            <div className="col-lg-4 col-md-6 mb-3" key={index}>
              <SkeletonLoader />
            </div>
          ))}
        </div>
      )}
      {!isLoading && searchResults.length > 0 && (
        <div className="row">
          {searchResults.map((searchItem, index) => (
            <div className="col-lg-4 col-md-6 mb-3" key={index}>
              <div className="product-item">
                <img
                  src={searchItem.images.original.url}
                  className="product-image"
                  alt={searchItem.slug}
                />
                <h3 className="product-name">{searchItem.title}</h3>
                <p className="product-description">{searchItem.username}</p>
                <div className="product-actions">
                  <button className="btn btn-primary">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
