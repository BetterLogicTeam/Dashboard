import React from 'react'

function Mint_history() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">Minting History</h1>
                           
                        </div>

                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">

                              <div className="table-responsive">
                                    <table cellpadding="0" cellspacing="0" className="table align-middle mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>#</th>
                                                <th>Package Amount</th>
                                                <th>Remark </th>
                                                <th>Txn</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>100 USD</td>
                                                <td>Activate</td>
                                                <td> <a href="#">View txn</a></td>
                                                <td>20-05-2022</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>100 USD</td>
                                                <td>Upgrade</td>
                                                <td> <a href="#">View txn</a></td>
                                                <td>20-05-2022</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>100 USD</td>
                                                <td>Upgrade</td>
                                                <td> <a href="#">View txn</a></td>
                                                <td>20-05-2022</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                              <br/>

                              
                </div>
              </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Mint_history