import React from "react";


const LiveStation = () => {
    return (
        <>
            <div className="page-title-section">
                <div className="container"><h2>Live Station</h2></div>
            </div>
            <div className="page-main-container">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-8 offset-md-2'>
                            <div class="card shadow">
                                <div class="card-body">
                                    <h4 class="card-title mb-5">Live Upcoming Trains at Station</h4>
                                    <form>
                                        <div className='row'>
                                            <div className='form-group col-md-4'>
                                                <input className="form-control" type="text" placeholder='From Station*' />
                                            </div>
                                            <div className='form-group col-md-4'>
                                                <input class="form-control" type="text" placeholder='To Station' />
                                            </div>
                                            <div className='form-group col-md-4'>
                                                <select name="boarding_station" className="form-control">
                                                    <option>2 Hour</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='form-group col-md-4'>
                                                <button type="submit" className="btn btn-primary ">Check Upcoming Trains</button>
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

export default LiveStation