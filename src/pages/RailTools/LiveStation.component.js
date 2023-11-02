import React from "react";


const LiveStation=()=>{
    return(
        <>
        <div className='card-container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div class="card shadow">
                                        <div class="card-body stc_body">
                                            <h4 class="card-title mb-3 ml-2">Live Upcoming Trains at Station</h4>
                                            <form>
                                                <div className='row align-items-center'>
                                                    <div className='form-group  col-md-4'>
                                                        <input className="form-control input-fields" type="text" placeholder='From Station*' />
                                                    </div>
                                                    <div className='form-group  col-md-4'>
                                                        <input class="form-control input-fields" type="text" placeholder='To Station' />
                                                    </div>
                                                    <div className='form-group  col-md-4'>
                                                        <select name="boarding_station" className="form-control input-fields">
                                                               <option>2 Hour</option>                 
                                                        </select>
                                                    </div>
                                                    <div className='form-group  col-md-6'>
                                                        <button type="submit" className="btn btn-primary ml-2">Check Upcoming Trains</button>
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

export default LiveStation