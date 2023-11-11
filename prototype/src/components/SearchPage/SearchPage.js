import React from 'react';
import './SearchPage.css'
const SearchPage = () => {
    return (
        <div className='search-page-container'>
            <h1>Kết quả tìm kiếm</h1>
            <div className='container'>
                <div className="list-cards">
                    {
                        data.map((item, key) => {
                            return (
                                <div key={key} className="cards">
                                    <div className="icon">
                                        <img className="cus-avatar"
                                             src={item.imagePath}
                                             alt=""/>
                                    </div>
                                    <p className="user-name">{item.userName}</p>
                                    <p className="text">
                                        <button className="btn btn-secondary border-0 py-2"
                                                type="submit">Xem trang cá nhân
                                        </button>
                                    </p>
                                    <span>Sống tại {item.address}</span>
                                </div>
                            )
                        })
                    }
                    <div className="cards">
                        <div className="icon">
                            <img className="cus-avatar"
                                 src="https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                 alt=""/>

                        </div>
                        <p className="user-name">Mỹ Liên</p>
                        <p className="text">
                            <button className="btn btn-secondary border-0 py-2"
                                    type="submit">Xem trang cá nhân
                            </button>
                        </p>
                        <span>Sống tại Đà Nẵng</span>
                    </div>
                </div>
            </div>
            <div className="search-advance">
                <button className="btn btn-secondary border-0 py-2"
                        type="submit">Tìm kiếm nâng cao
                </button>
            </div>
        </div>
    );
};
const data = [
    {
        imagePath: 'https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        userName: 'Mỹ Liên',
        address: 'Đà Nẵng'
    },
    {
        imagePath: 'https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        userName: 'Mỹ Liên',
        address: 'Đà Nẵng'
    },
    {
        imagePath: 'https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        userName: 'Mỹ Liên',
        address: 'Đà Nẵng'
    },
    {
        imagePath: 'https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        userName: 'Mỹ Liên',
        address: 'Đà Nẵng'
    },
    {
        imagePath: 'https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        userName: 'Mỹ Liên',
        address: 'Đà Nẵng'
    },
    {
        imagePath: 'https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        userName: 'Mỹ Liên',
        address: 'Đà Nẵng'
    },
    {
        imagePath: 'https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        userName: 'Mỹ Liên',
        address: 'Đà Nẵng'
    }
]

export default SearchPage;