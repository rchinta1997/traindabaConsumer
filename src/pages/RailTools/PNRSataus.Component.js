
import React from 'react';





const PnrStaus = () => {
    return (
        <>

            <div className="page-title-section">
                <div className="container"><h2>PNR Status</h2></div>
            </div>

            <div className="page-main-container">
                <div className="container">
                        <div className='row'>
                            <div className='col-md-8 offset-md-2'>
                                <div class="card shadow">
                                    <div class="card-body">
                                        <h4 class="card-title mb-5">Check PNR Current Status</h4>
                                        <form>
                                            <div className='row align-items-center'>
                                                <div className='form-group col-md-6'>
                                                    <input className="form-control input-fields" type="number" placeholder='Enter 10 digit PNR number' />
                                                </div>
                                                <div className='form-group col-md-6'>
                                                    <button type="submit" className="btn btn-primary">Check Status</button>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </>
    )
}

export default PnrStaus
