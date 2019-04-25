import React from 'react'
// import Select from 'react-select'
import SingleSelect from './react-select-practices/SingleSelect';
import Multi from './react-select-practices/Multi';
import Grouped from './react-select-practices/Grouped';
import AnimatedMulti from './react-select-practices/AnimatedMulti';
import ColoredSingle from './react-select-practices/ColoredSingle';
import ColoredMulti from './react-select-practices/ColoredMulti';
import WithCallbacks from './react-select-practices/WithCallbacks';
import WithPromises from './react-select-practices/WithPromises';
import AsyncMulti from './react-select-practices/AsyncMulti';
import CreatableSingle from './react-select-practices/CreatableSingle';
import FixedOptions from './react-select-practices/FixedOptions';

// import SingleSelect

class Dropdown extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex align-items-stretch">
                    <main id="main" role="main">
                        <h1>Dropdown - Select samples</h1>

                        <div className="col-md-5 mx-auto mt-2">
                            <h3 className="pt-4 pb-2 text-center">Single</h3>
                            <SingleSelect></SingleSelect>
                            <h3 className="pt-4 pb-2 text-center">Multi</h3>
                            <Multi></Multi>
                            <h3 className="pt-4 pb-2 text-center">Grouped</h3>
                            <Grouped></Grouped>
                            <h3 className="pt-4 pb-2 text-center">AnimatedMulti</h3>
                            <AnimatedMulti></AnimatedMulti>
                            <h3 className="pt-4 pb-2 text-center">Colored Single</h3>
                            <ColoredSingle></ColoredSingle>
                            <h3 className="pt-4 pb-2 text-center">Colored Multi</h3>
                            <ColoredMulti></ColoredMulti>
                            <h3 className="pt-4 pb-2 text-center">Async</h3>
                            <h5 className="pt-4 pb-2 text-center">Callbacks</h5>
                            <WithCallbacks></WithCallbacks>
                            <h5 className="pt-4 pb-2 text-center">Promises</h5>
                            <WithPromises></WithPromises>
                            <h5 className="pt-4 pb-2 text-center">Async MultiSelect</h5>
                            <AsyncMulti></AsyncMulti>
                            <h3 className="pt-4 pb-2 text-center">Creatable</h3>
                            <CreatableSingle></CreatableSingle>
                            <h3 className="pt-4 pb-2 text-center">Fixed Options</h3>
                            <FixedOptions></FixedOptions>
                        </div>
                        
                    </main>
                </div>
            </div>
        )
    }
}
export default Dropdown