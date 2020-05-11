import React from 'react';

const Header = () => {
    return (
        <div className="bg-dark">
            <header className="container">
            <nav className="navbar navbar-expand-lg navbar-dark default-color">
                <a className="navbar-brand" href="#"><strong>User-Data</strong></a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <form action="" className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Users" aria-label="Search" type="text"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            </header>
        </div>
    );
};

export default Header;