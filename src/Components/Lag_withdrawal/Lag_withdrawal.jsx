import React from 'react'

function Lag_withdrawal() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-lg-6">
                            <div className="withdrawal_item">
                                <h4>LAG Token Withdrawal</h4>
                                <p> No Wallet Connected</p>
                                <form>
                                    <div className="form_col mt_2">
                                        <label>Total LAG Token Available</label>
                                        <input type="text" name="" value="0"/>
                                    </div>
                                    <div className="form_col">
                                        <label>Enter LAG Token</label>
                                        <input type="number" name=""/>
                                    </div>
                                    <div className="btn_success">
                                        <button type="button btn">Withdraw</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Lag_withdrawal