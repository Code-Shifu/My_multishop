import './includes/navbar.css'
import './includes/style.min.css'
import './includes/bootstrap.css'
import './includes/bootstrap.min.css'
import './includes/bootstrap-grid.css'
import './includes/bootstrap-grid.min.css'
import './includes/bootstrap-reboot.css'
import './includes/bootstrap-reboot.min.css'
import './includes/style.scss'
import './includes/animate.min.css'
import Phones from '../Pages/Phones'
import Footer from './Footer'
function Phone() {
  return (
    <div>
                      {/* <!-- Carousel Start --> */}
    <div className="container-fluid mb-3" style={{ backgroundColor:'rgb(254,216,177)' }}>
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" style={{ height: '430px' }}>
                            <img className="position-absolute w-100 h-100" src="https://www.zdnet.com/a/img/resize/8b5a12b9b5fd58fd1943604699993f1e6469be19/2023/08/22/71f6e0b9-3405-43ea-972c-202a7c8bf615/best-phones-zdnet-thumb-image.jpg?auto=webp&fit=crop&height=675&width=1200" style={{objectFit: 'cover'}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Smart Phones</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ height: '430px' }}>
                            <img className="position-absolute w-100 h-100" src="https://s3b.cashify.in/gpro/uploads/2022/07/07020311/Best-Mobile-Phones-In-The-World.jpg" style={{objectFit: 'cover'}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Andriods</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ height: '430px' }}>
                            <img className="position-absolute w-100 h-100" src="https://www.91-cdn.com/hub/wp-content/uploads/2023/09/phones-launching-in-September.png" style={{objectFit: 'cover'}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Mobile Gadgets</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="product-offer mb-30" style={{ height: '200px' }}>
                    <img className="img-fluid" src="https://www.stuff.tv/wp-content/uploads/sites/2/2020/10/Stuff-Affordable-Cheap-Smartphones-LEAD.png?w=1080" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
                <div className="product-offer mb-30" style={{ height: '200px' }}>
                    <img className="img-fluid" src="https://i.ytimg.com/vi/XBDp8r20wog/sddefault.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Carousel End --> */}
    {/* <!-- Featured Start --> */}
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fa fa-check text-warning m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fa fa-shipping-fast text-warning m-0 mr-2"></h1>
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fas fa-exchange-alt text-warning m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fa fa-phone-volume text-warning m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Featured End --> */}
      {/* <!-- Products Start --> */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-light pr-3">Mobile Gadgets</span></h2>
    </div>
    {/* api fetching */}
    <Phones/>
    <Footer/>
    </div>
  )
}

export default Phone