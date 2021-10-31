import React from 'react';

const Blog = () => {
    return (
        <div className="m-5 border border-1 rounded">
            <h1 className="text-danger pt-3 text-decoration-underline">Our Travelling Blogs</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                <div className="col">
                    <div className="card h-100 rounded">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/Hl-krXRFMRo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Paris Tour Travelling Blog</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/DEJx0CYrDHk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Rome Tour Travelling Blog</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/399iiDRtdOU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Saint Martin Travelling Blog</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;