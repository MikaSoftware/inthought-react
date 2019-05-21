import React from 'react'
import { Link} from "react-router-dom";
import { ScaleLoader } from 'react-spinners';
import './Styles.css';

class PleaseWait extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex align-items-stretch">
          <main id="main" role="main">
            <div className="row">
              <div className="col-sm-6 mx-auto p-4 error-page">
                <h3 className="text-center text-secondary mb-3"><i className="fas fa-server fa-5x"></i></h3>
                <h1 className="text-center display-2 text-secondary mb-3">Submitting</h1>
                <div className="loader">
                  <ScaleLoader 
                    heightUnit={"px"}
                    widthUnit={"px"}
                    height={35}
                    width={4}
                    radius={2}
                    margin={'2px'}
                    color={'#6c757d'}
                  />
                  <h2 className="text-center text-secondary mb-3 loader-text" dangerouslySetInnerHTML={{ __html: '' }} />
                </div>
                <p className="text-center text-secondary lead mb-4">
                  We are currently submitting your purchase order to the payment merchant for processing.
                  If you are having trouble loading the page your are looking for.
                  For immediate help, contact 
                  <Link to="#">&nbsp;support.</Link>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}
export default PleaseWait


