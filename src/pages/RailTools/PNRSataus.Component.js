
import React from 'react';





const PnrStaus = () => {
    return (
        <>

        <div className='card-container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div class="card shadow">
                                        <div class="card-body stc_body">
                                            <h4 class="card-title mb-3 ml-2">Check PNR Current Status</h4>
                                            <form>
                                                <div className='row align-items-center'>
                                                    <div className='form-group  col-md-6'>
                                                        <input className="form-control input-fields" type="number" placeholder='Enter 10 digit PNR number' />
                                                    </div>
                                                    <div className='form-group  col-md-6'>
                                                        <button type="submit" className="btn btn-primary">Check Status</button>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
           

        </>
    )
}

export default PnrStaus
