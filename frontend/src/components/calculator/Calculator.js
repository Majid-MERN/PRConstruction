import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'


const Calculator = () => {
  return (
   
    <Fragment>
    <h1 className="my-5">Estimation Calculator</h1>
    <div className="row" >
    
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      
      <div className="card p-3 rounded">
        <Link to="/constructioncost">
        <img src="images/concc.jpg"  alt className="img-fluid h-95" id="vehicleReg" />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">
            <Link to="/constructioncost">Construction Cost </Link>
          </h5>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="/cementconcrete">
        <img src="images/cementc.jpg"  alt className="img-fluid" id="vehicleReg" />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">
            <Link to="/cementconcrete">Cement Concrete </Link>
          </h5>
         
        </div>
      </div>
    </div>

  

   


 
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="/steel">
        <img src="images/steelcc.jpg"  alt className="img-fluid" id="vehicleReg" />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">
            <Link to="/steel">Steel Quantity</Link>
          </h5>
          
        </div>
      </div>
    </div>
 

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="/plaster">
        <img src="images/plaster.jpg"  alt className="img-fluid" id="vehicleReg" />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">
            <Link to="/plaster">Plaster</Link>
          </h5>
        </div>
      </div>
    </div>

  




                </div>
               


            

        </Fragment>
      
        


      
  )
}

export default Calculator