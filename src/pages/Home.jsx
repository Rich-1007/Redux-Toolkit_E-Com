import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { Footer } from "../components/Footer";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error");
      setPosts([]);
      setLoading(false);
    }
  }

  const handleSearch = (e) => {
    const inputText = e.target.value;
    setSearchInput(inputText);
    searchProduct(inputText);
  };

  const searchProduct = (searchItem) => {
    const searchResults = posts.filter((item) =>
      item?.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(searchResults);
  };

  const sortLowToHigh = () => {
    const arr = [...posts];
    const res = arr.sort((item1, item2) => item1.price - item2.price);
    console.log(res);
    setFilteredProducts(res);
  };

  const sortHighToLow = () => {
    const arr = [...posts];
    const res = arr.sort((item1, item2) => item2.price - item1.price);

    console.log(res);
    setFilteredProducts(res);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="">
      <div className="max-w-6xl mx-auto flex justify-between pt-4">
        <div>
          <input
            className="border border-black rounded-l-lg py-1 px-2"
            type="text"
            value={searchInput}
            onChange={handleSearch}
          />

          <button
            className="border py-1 border-gray-800 px-2 rounded-r-lg border-l-0"
            onClick={searchProduct}
          >
            Search
          </button>
        </div>

        <div className="flex justify-between gap-2">
          <button
            className="border-2 px-2 py-1 text-sm font-bold border-gray-600 rounded-lg"
            onClick={sortLowToHigh}
          >
            Price : Low to High
          </button>
          <button
            className="border-2 px-2 py-1 text-sm font-bold border-gray-600 rounded-lg"
            onClick={sortHighToLow}
          >
            Price : High to Low
          </button>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : filteredProducts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl px-3 mx-auto space-y-5 space-x-5 min-h-[80vh]">
          {filteredProducts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
