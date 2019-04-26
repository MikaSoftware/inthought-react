import React from 'react'
import { Link } from "react-router-dom";

class FileUpload extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>View Files</h1>
                    <div className="col-md-6 mx-auto mt-2">
                        <h3 className="pt-4 pb-2 mb-5 text-center">Upload Files</h3>
                        <div className="row flex-space-around">
                            <button className="btn btn-primary btn-lg mt-4 float-right pl-4 pr-4" type="submit">
                                <i className="fas fa-cloud-upload-alt"></i>
                                &nbsp;&nbsp;UPLOAD
                            </button>
                            <button className="btn btn-secondary btn-lg mt-4 float-right pl-4 pr-4" type="submit">
                                <i className="fas fa-save"></i>
                                &nbsp;&nbsp;SAVE
                            </button>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12 mx-auto mt-4 pt-4">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="#"><i className="fas fa-search color-primary"></i></Link></td>
                                        <td>ABC</td>
                                        <td>This is a description area</td>
                                        <td>File type</td>
                                        <td><Link to="#"><i className="fa fa-download color-primary"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="#"><i className="fas fa-search color-primary"></i></Link></td>
                                        <td>ABC</td>
                                        <td>This is a description area</td>
                                        <td>File type</td>
                                        <td><Link to="#"><i className="fa fa-download color-primary"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="#"><i className="fas fa-search color-primary"></i></Link></td>
                                        <td>ABC</td>
                                        <td>This is a description area</td>
                                        <td>File type</td>
                                        <td><Link to="#"><i className="fa fa-download color-primary"></i></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default FileUpload