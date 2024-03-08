import React from 'react';
import Product from './products';
import Login from './login';
 function home() {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="/photo/p1.jpg" class="card-img" alt="..." height="550px" />
                <div class="card-img-overlay d-flex flex-colum  ">
                    <div className="contener ">
                        <h5 class="card-title display-3 fw-bolder mb-0">The Best Products</h5>
                        <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Product/>
            <Login/>
                    </div>
    );
};

export default home;
