import React from 'react'
class Invoice extends React.Component {
  render() {
    return (
        <main id="main" role="main">
            <h1>
                Invoice
                <button className="ml-auto btn btn-success btn-md float-right " type="submit">
                    <i className="fas fa-plus"></i>
                    Add Invoice
                </button>
            </h1>
            
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h3 className="m-0">Invoice 00004879</h3>
                        <button className="ml-auto btn btn-secondary btn-sm" type="button">
                            Copy this invoice
                        </button>
                    </div>
                    <hr />
                    <div className="row mb-3">
                        <div className="col-xl-4 col-6 br py-2">
                            <div className="row">
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    <em className="fa fa-plane fa-4x text-muted"></em>
                                </div>
                                <div className="col-lg-8">
                                    <h4>Bill Mitchelle</h4>
                                    <address></address>Nowhere 1024<br />Happy St., 50487<br />Neverland
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-6 br py-2">
                            <div className="row">
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    <em className="fa fa-truck fa-4x text-muted"></em>
                                </div>
                                <div className="col-lg-8">
                                    <h4>Lloyd Gonzales</h4>
                                    <address></address>Basilisa 2145<br />Mate, Cliff., 20145<br />Moon
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="col-xl-4 col-12 py-2">
                            <div className="clearfix">
                                <p className="float-left">INVOICE NO.</p>
                                <p className="float-right mr-2">00004879</p>
                            </div>
                            <div className="clearfix">
                                <p className="float-left">Date</p>
                                <p className="float-right mr-2">25/08/2014</p>
                            </div>
                            <div className="clearfix">
                                <p className="float-left">Due Date</p>
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
                    <hr className="d-print-none" />
                    <div className="clearfix">
                        <button className="btn btn-primary float-left mr-2" type="button">Edit</button>
                        <button className="btn btn-orange float-left" type="button">Print</button>
                        <button className="btn btn-success float-right" type="button">Send Invoice</button>
                    </div>
                </div>
            </div>
        </main>
    )
  }
}
export default Invoice