import React, { useState, useEffect } from 'react';
const Prodacts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (componentMounted) {
          const jsonData = await response.json();
          setData(jsonData);
          setFilter(jsonData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () =>
  
  <p>Loading...</p>;

  const ShowProduct = () => (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <div className="btn btn-outline-dark me-2">ALL</div>
        <div className="btn btn-outline-dark me-2">LAPTOP</div>
        <div className="btn btn-outline-dark me-2">PHONE</div>
      </div>

      <div className="row justify-content-center">
        {filter.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4"key={product.id}>
              <img src={product.image} className="card-img-top" alt={product.title}
              height="250px" />
              <div className="card-body">
                <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                <p className="card-text lead fw-bolder">
                  ${product.price}</p>
                <a href="#" className="btn btn-outline-dark">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-border text-center'>Latest products</h1>
            <hr/>
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodacts;
