import React from 'react';

import { Carousel } from 'react-bootstrap'
import '../Pages/Home-Customer/Style/MainPage.css'

const MainPage = () => {
    return (
        <div className="container main">
            <div className="row justify-content-md-center">
                <div className="col">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.idgesg.net/images/article/2019/07/customer-service_customer-experience_happy_rating_strategy_tablet_reviews_by-ipopba-getty-100806901-large.jpg"
                                alt="First slide"
                                style={{ width: '100%', height: '500px' }}
                            />
                            <Carousel.Caption>
                                <h3>Lorem Ipsum</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://bitfxdaily.com/wp-content/uploads/2018/11/forex-factory-review.jpeg"
                                alt="Third slide"
                                style={{ width: '100%', height: '500px' }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default MainPage;