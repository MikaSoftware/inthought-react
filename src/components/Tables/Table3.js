import React from 'react'
import { DataTable } from 'react-data-components'
import './table-twbs.css';

const data = [
    { id: '1,001', fname: 'Susan', lname: 'Fairley', phone: '(519)438-1111', email: 'susan@Inthoughtlondon.ca' },
    { id: '1,002', fname: 'Rodolfo', lname: 'Martinez', phone: '(519)521-3135', email: 'rodolfo@Inthoughtlondon.ca' },
    { id: '1,003', fname: 'So', lname: 'Yong', phone: '(519)428-2314', email: 'soyong@Inthoughtlondon.ca' },
    { id: '1,004', fname: 'Bartłomiej', lname: 'Mika', phone: '(519)435-1782', email: 'bartłomiej@Inthoughtlondon.ca' },
    { id: '1,005', fname: 'John', lname: 'Son', phone: '(519)425-2782', email: 'john@Inthoughtlondon.ca' },
    { id: '1,006', fname: 'Jack', lname: 'Son', phone: '(519)478-2019', email: 'jack@Inthoughtlondon.ca' }
];

const columns = [
    { title: 'Id', prop: 'id'  },
    { title: 'First Name', prop: 'fname' },
    { title: 'Last Name', prop: 'lname' },
    { title: 'Phone', prop: 'phone' },
    { title: 'E-Mail', prop: 'email' }
];

class Table3 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Table 3</h1>
                    <div className="col-sm-12 mx-auto mt-4 pt-4">
                        <h2>Recent Clients</h2>
                        <DataTable
                            keys="id"
                            columns={columns}
                            initialData={data}
                            initialPageLength={5}
                            initialSortBy={{ prop: 'id', order: 'ascending' }}
                            pageLengthOptions={[ 5, 10, 15 ]}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default Table3