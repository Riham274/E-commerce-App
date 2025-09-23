function ProductList() {
  return (
    <>
      <h2 className="text-center">Our Products</h2>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <button href="#" className="btn btn-primary">
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
