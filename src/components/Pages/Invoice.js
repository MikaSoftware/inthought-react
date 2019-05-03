import React from 'react'
import ReactToPrint from 'react-to-print';

class InvoiceContent extends React.Component {
    render () {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h3 className="m-0">Invoice 00004879</h3>
                    </div>
                    <hr />
                    <div className="row mb-3">
                        <div className="col-sm-4 col-4 br py-2">
                            <div className="row flex-vertical-align-center">
                                <div className="col-lg-4 d-none text-center d-lg-block">
                                    <em className="fa fa-plane fa-3x text-muted"></em>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h4>Bill Mitchelle</h4>
                                    <address>Nowhere 1024<br />Happy St., 50487<br />Neverland</address>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-4 br py-2">
                            <div className="row flex-vertical-align-center">
                                <div className="col-lg-4 d-none text-center d-lg-block">
                                    <em className="fa fa-truck fa-3x text-muted"></em>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <h4>Lloyd Terrel</h4>
                                    <address>Basilisa 2145<br />Mate, Cliff., 20145<br />Moon</address>
                                </div>
                            </div>
                        </div>
                        {/* <hr className="d-sm-none" style={{ "width":"100%" }}/> */}
                        <div className="col-sm-4 col-4 py-2">
                            <div className="clearfix">
                                <h5 className="float-left">INVOICE NO.</h5>
                                <p className="float-right mr-2">00004879</p>
                            </div>
                            <div className="clearfix">
                                <h5 className="float-left">Date</h5>
                                <p className="float-right mr-2">25/08/2014</p>
                            </div>
                            <div className="clearfix">
                                <h5 className="float-left">Due Date</h5>
                                <p className="float-right mr-2">30/08/2014</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="table-responsive mb-3">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Item #</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1001</td>
                                <td>Iphone 5s - 64Gb</td>
                                <td>3</td>
                                <td>$ 200</td>
                                <td>$ 600</td>
                            </tr>
                            <tr>
                                <td>1002</td>
                                <td>Iphone 5s - 64Gb</td>
                                <td>3</td>
                                <td>$ 200</td>
                                <td>$ 600</td>
                            </tr>
                            <tr>
                                <td>1003</td>
                                <td>Iphone 5s - 64Gb</td>
                                <td>3</td>
                                <td>$ 200</td>
                                <td>$ 600</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-6 py-2">
                            <div className="row mb-3">
                                <div className="col-8">Subtotal</div>
                                <div className="col-4">
                                <div className="text-right">$ 10300</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">Tax (21%)</div>
                                <div className="col-4">
                                    <div className="text-right">$ 2700</div>
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <div className="col-7">
                                <div className="h3">GRAND TOTAL</div>
                                </div>
                                <div className="col-5">
                                    <div className="text-right h3">$ 13000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Invoice extends React.Component {
  render() {
    return (
        <main id="main" role="main">
            <div style={{ "display":"flex", "justifyContent" : "space-between", "flexWrap": "wrap"}}>
                <h1 style={{ "border": "none", "marginBottom": "none" }}>
                    Invoice
                </h1>
                <div>
                    <button className="m-1 btn btn-success btn-md float-right" type="button">
                        <i className="fas fa-copy"></i>
                        &nbsp;Copy this invoice
                    </button>
                    <button className="m-1 btn btn-success btn-md float-right " type="submit">
                        <i className="fas fa-plus"></i>
                        &nbsp;Add Invoice
                    </button>
                </div>
            </div>
            <InvoiceContent ref={el => (this.componentRef = el)} />

            {/* <hr className="d-print-none" /> */}
            <div className="clearfix">
                <button className="btn btn-primary float-left mr-2" type="button">Edit</button>
                <ReactToPrint
                    trigger={() => <button className="btn btn-orange float-left" type="button">Print</button>}
                    content={() => this.componentRef}
                    copyStyles='true'
                />
                <button className="btn btn-success float-right" type="button">Send Invoice</button>
            </div>
        </main>
    )
  }
}
export default Invoice