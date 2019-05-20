import React from 'react'
import ReactModal from 'react-modal'
import { Link} from "react-router-dom";
import './Styles.css';
ReactModal.setAppElement('#root');

class Modal1 extends React.Component {
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
      
    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex align-items-stretch">
            <main id="main" role="main">
              <h1>Modal(This modal won't be closed until a button in the modal is closed.)</h1>
              <div>
                <button onClick={this.handleOpenModal}  className="btn btn-primary">Trigger Modal</button>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={false}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">Your cart</h4>
                            <button type="button" className="close" onClick={this.handleCloseModal}>
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="modal-body">

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Product name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Product 1</td>
                                    <td>100$</td>
                                    <td><Link to="#"><i className="fas fa-times"></i></Link></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Product 2</td>
                                    <td>100$</td>
                                    <td><Link to="#"><i className="fas fa-times"></i></Link></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Product 3</td>
                                    <td>100$</td>
                                    <td><Link to="#"><i className="fas fa-times"></i></Link></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">4</th>
                                    <td>Product 4</td>
                                    <td>100$</td>
                                    <td><Link to="#"><i className="fas fa-times"></i></Link></td>
                                    </tr>
                                    <tr className="total">
                                    <th scope="row">5</th>
                                    <td>Total</td>
                                    <td>400$</td>
                                    <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" onClick={this.handleCloseModal}>Close</button>
                            <button className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </ReactModal>
                </div>
            </main>
        </div>
    </div>
    )
  }
}
export default Modal1


