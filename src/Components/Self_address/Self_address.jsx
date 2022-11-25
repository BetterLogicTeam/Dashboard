import React from 'react'

function Self_address() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title">
                                <div className="pull-left">
                                    <h1 className="title">Self Address</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="self_address">
                                <h5 className="copydata">Self Address :</h5>
                                <input type="text" value="0x19b78f2f6c78A...AeE315b1cC54196" id="myInput"/>
                                
                                <div className="copy_btn" onclick="myFunction()">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="aliIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Self_address