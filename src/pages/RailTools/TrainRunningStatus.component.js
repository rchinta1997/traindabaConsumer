import React from 'react'

const TrainRunningStatus=()=>{
    return(
        <>
        <div className="page-title-section">
                <div className="container"><h2>Train Running Status</h2></div>
            </div>
            <div className="page-main-container">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-8 offset-md-2'>
                            <div class="card shadow">
                                <div class="card-body">
                                    <h4 class="card-title mb-5">Train Live Running Status</h4>
                                    <form>
                                        <div className='row'>
                                            <div className='form-group col-md-6'>
                                                <input class="form-control input-fields" type="number" placeholder='Enter Train Name or Number' />
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

export default TrainRunningStatus