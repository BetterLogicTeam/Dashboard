import React from 'react';
import "./Lar_history.css";

function Lar_history() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">LAR Token History</h1>
                           
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
                                <th>S.Number</th>
                                <th>User Id</th>
                                <th>Date &amp; Time </th>
                                <th>Withdrawal Amount</th>
                                <th>Withdrawal Share Pool</th>
                                <th>Withdrawal Fees</th>
                                <th>Net Amount</th>
                                <th>Withdrawal Token</th>
                                <th>TXN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>778899</td>
                                <td>01/11/2022, 05:08 PM </td>
                                <td>10</td>
                                <td>0.5</td>
                                <td>0.5</td>
                                <td>10</td>
                                <td>1851.7318 </td>
                                <td><a href="#" className="viewTxn">View txn</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagination_item">
                        <ul className="pagination">
                            <li><a href="#" className="active"> &lt;&lt; </a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"> &gt;&gt; </a></li>
                        </ul>
                    </div>
                </div>
              <br/>
              </div>
              </div>
            </div>
        </div></section>
    </div>
  )
}

export default Lar_history