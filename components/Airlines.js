import React from 'react'

const Airlines = () => {
  return (
    <>
    <div className='container mt-5'>

          <div className="container airports-grid mb-5">
          <h2>
          Other Popular <span className="different-color">Airlines</span>
          </h2>
            <ul className='row airlines-list-order'>
         
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4  ">Lufthansa</li>
        
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4 ">British Airways</li>
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4 ">Westjet</li>
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4 ">Frontier airlines</li>
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4 ">Turkish airlines</li>
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4 ">Finnair</li>
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4 ">Iberia</li>
            <li className="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4 ">Klm royal dutch airlines</li>
            </ul>
            </div>
        

    </div>
    
    </>
  )
}

export default Airlines