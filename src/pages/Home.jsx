import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Products from "../components/Products";

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, SetPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      SetPosts(data);
    } catch (error) {
      console.log(error);
      SetPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Products key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div>
            <p>No Data Found</p>
          </div>
        )}
      </div>
    </>
  );
}
