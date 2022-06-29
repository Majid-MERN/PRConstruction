import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

import MetaData from './layout/MetaData'

import Loader from './layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions'

import Display from './product/Display'
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = ({ match }) => {

    // const [currentPage, setCurrentPage] = useState(1)
    // const [price, setPrice] = useState([1, 100000])
    // const [category, setCategory] = useState('')
    // const [rating, setRating] = useState(0)

    // const categories = [
    //     'Cement',
    //             'Aggregate',
    //             'Sand',
    //             'Steel',
    //             'Paint',
    //             'Tiles',
    //             'Bricks',
    //             'Window',
    //             'Doors',
    //             'Plumbing',
    //             'Electrical',
    //             'Sanitary'
       
    // ]

    // const alert = useAlert();
    // const dispatch = useDispatch();

     const { loading } = useSelector(state => state.products)

    // const keyword = match.params.keyword

    // useEffect(() => {
    //     if (error) {
    //         return alert.error(error)
    //     }

    //     dispatch(getProducts(keyword, currentPage, price, category, rating));

    // }, [dispatch, alert, error, keyword, currentPage, price, category, rating])

    // function setCurrentPageNo(pageNumber) {
    //     setCurrentPage(pageNumber)
    // }

    // let count = productsCount;
    // if (keyword) {
    //     count = filteredProductsCount
    // }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Buy Best Products Online'} />

                   
                    
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div id="slider-all" className="carousel-caption ">
          <h5><b className="color-slider">Pak Real Construction</b></h5>
        <p >"We Provide Outstanding Construction Services"</p>
        <p>"We will be happy to take care of your construction works"</p>  
      </div>
      <img className="d-block w-100" src="images/slider2.jpg" alt="First slide" />
      
      </div>
    <div className="carousel-item">
    <div id="slider-all1" className="carousel-caption ">
          <h5><b className="color-slider">Pak Real Construction</b></h5>
        <p >"We Provide Outstanding Construction Services"</p>
        <p>"We will be happy to take care of your construction works"</p>  
      </div>
      <img className="d-block w-100" src="images/slider3.jpg" alt="Second slide" />
     
    </div>
    <div className="carousel-item">
    <div id="slider-all2" className="carousel-caption ">
          <h5><b className="color-slider">Pak Real Construction</b></h5>
        <p >"We Provide Outstanding Construction Services"</p>
        <p>"We will be happy to take care of your construction works"</p>  
      </div>
      <img className="d-block w-100" src="/images/slider1.jpg" alt="Third slide" />
      
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

<section className="section service gray-bg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
        <div className="section-title">
        
          <div className="divider mx-auto " />
          <p id="section-paragraph">We Serve all of your Construction Services</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6">
      <Link to="/package">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center ">
            <i className="fa fa-envelope-square text-lg"  />
            <h4 className="mt-3 mb-3">Packages</h4>
          </div>
          <div className="content">
            <p className="mb-4">Multiple Home packages  provided for customers</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
      <Link to="/vehicles">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
            <i className="fa fa-truck text-lg" />
            <h4 className="mt-3 mb-3">Vehicle</h4>
          </div>
          <div className="content">
            <p className="mb-4">Available all the vehicle needed for construction</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
      <Link to="/labors">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
            <i className="fa fa-male text-lg" />
            <h4 className="mt-3 mb-3">Labor</h4>
          </div>
          <div className="content">
            <p className="mb-4">We provided best and Experienced Labor  24/7</p>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
      <Link to="/video">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
            <i className="fa fa-play text-lg" />
            <h4 className="mt-3 mb-3">Videos</h4>
          </div>
          <div className="content">
            <p className="mb-4"> We provided daily basis project videos for customer</p>
          </div>
        </div>
        </Link>
      </div>
      
    </div>
  </div>
</section>





<section id="project-area" className="project-area solid-bg">
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-12">
        <h2 className="section-title">Discover the most fascinating projects for our clients</h2>
        
      </div>
    </div>
    {/*/ Title row end */}
    <div className="row">
      <div className="col-12">
        
        <div className="row shuffle-wrapper ">
          <div className="col-12 shuffle-sizer" />
          <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
            <div className="project-img-container">
              
                <img className="img-fluid" src="images/pro4.jpg" alt="project-img" />
                <span className="gallery-icon"><i className="fa fa-plus" /></span>
              
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                   <a> <Link to="/project1">Mianwali Discount Motels Building</Link></a>
                  </h3>
                  
                </div>
              </div>
            </div>
          </div>{/* shuffle item 1 end */}
          <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;healthcare&quot;]">
            <div className="project-img-container">
              
                <img className="img-fluid" src="images/pro5.jpg" alt="project-img" />
                <span className="gallery-icon"><i className="fa fa-plus" /></span>
             
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                  <a> <Link to="/project2">Mianwali Luxury Resorts</Link></a>
                  </h3>
                  
                </div>
              </div>
            </div>
          </div>{/* shuffle item 2 end */}
          <div className="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div className="project-img-container">
              
                <img className="img-fluid" src="images/pro6.jpg" alt="project-img" />
                <span className="gallery-icon"><i className="fa fa-plus" /></span>
             
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                  <a> <Link to="/project3">DHQ Hospital Mianwali</Link></a>
                  </h3>
                  
                </div>
              </div>
            </div>
          </div>{/* shuffle item 3 end */}
          </div>{/* shuffle end */}
      </div>
    
    </div>{/* Content row end */}
  </div>
  {/*/ Container end */}
</section>{/* Project area end */}






<section id="ts-service-area" className="ts-service-area">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h2 className="section-titl" >We Are Specialists In</h2>
      </div>
    </div>
    {/*/ Title row end */}
    <div className="row">
      <div className="col-lg-4 mt-5">
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img loading="lazy" src="images/service-icon1.png" className="homecon" alt="service-icon"/>
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title"  >Home Construction</h3>
            <p > constructing a house, generally referred to as a 'home'</p>
          </div>
        </div>{/* Service 1 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img loading="lazy" src="images/service-icon2.png" alt="service-icon" />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">Building Remodels</h3>
            <p>completely transforming the layout and structure of a building</p>
          </div>
        </div>{/* Service 2 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img loading="lazy" src="images/service-icon3.png" alt="service-icon" />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">Interior Design</h3>
            <p>everything inside your home, from the bedrooms to the kitchen etc.</p>
          </div>
        </div>{/* Service 3 end */}
      </div>{/* Col end */}
      <div className="col-lg-4 text-center">
        <img loading="lazy" className="img-fluid" src="images/hh3.png"  />
      </div>{/* Col end */}
      <div className="col-lg-4 mt-5  mb-4 mb-lg-0">
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img loading="lazy" src="images/service-icon4.png" alt="service-icon" />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">Exterior Design</h3>
            <p>the design of your garden, deck and patio</p>
          </div>
        </div>{/* Service 4 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img loading="lazy" src="images/service-icon5.png" alt="service-icon" />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">Renovation</h3>
            <p>improving or modernising an old, damaged or defective building.</p>
          </div>
        </div>{/* Service 5 end */}
        <div className="ts-service-box d-flex">
          <div className="ts-service-box-img">
            <img loading="lazy" src="images/service-icon6.png" alt="service-icon" />
          </div>
          <div className="ts-service-box-info">
            <h3 className="service-box-title">Safety Management</h3>
            <p>ensure a safe working environment in the construction site.</p>
          </div>
        </div>{/* Service 6 end */}
      </div>{/* Col end */}
    </div>{/* Content row end */}
  </div>
  {/*/ Container end */}
</section>{/* Service end */}








                </Fragment>
            )}

        </Fragment>
    )
}

export default Home