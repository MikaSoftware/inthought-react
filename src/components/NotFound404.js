import React from 'react'
import { Link} from "react-router-dom";
class NotFound404 extends React.Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-6 mx-auto p-4">
                    <h3 class="text-center text-secondary mb-3"><i class="far fa-frown fa-5x"></i></h3>
                    <h1 class="text-center display-2 text-secondary mb-3">404</h1>
                    <h2 class="text-center text-secondary mb-3">Page Not Found</h2>
                    <p class="text-center text-secondary lead mb-4">Unfortunately we are having trouble loading the page your
                        are looking for. You can return to your 
                        <Link href="http://inthought.pw/dashboard/">dashboard</Link>
                        . For immediate help, contact 
                        <Link href="http://inthought.pw/support.html">support.</Link></p>
                    <br/>
                    <h4>Phone: <Link href="tel:+15194381111">(519)438-1111</Link></h4>

                    <h4>E-Mail: <Link href="mailto:support@o55.ca">support@o55.ca</Link></h4>
                    <br/>
                    <br/>
                    <p class="text-center">
                    <Link class="btn btn-primary btn-lg" href="http://inthought.pw/dashboard" role="button">
                    Back to Dashboard
                    </Link>
                    </p>

                </div>
            </div>
        </div>
    )
  }
}
export default NotFound404