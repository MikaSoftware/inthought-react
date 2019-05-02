import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class CountryProvince extends Component {
    constructor (props) {
      super(props);
      this.state = { country: '', region: '' };
    }
  
    selectCountry (val) {
      this.setState({ country: val });
    }
  
    selectRegion (val) {
      this.setState({ region: val });
    }
  
    render () {
      const { country, region } = this.state;
      return (
            <div className="container-fluid">
                <div className="d-flex align-items-stretch">
                    <main id="main" role="main">
                        <h1>Country Province Selector</h1>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">1. Simple, no-frills example.</h5>
                            <div className="row">
                                <div className="col-sm-6">
                                    <CountryDropdown
                                    value={country}
                                    onChange={(val) => this.selectCountry(val)} 
                                    classes = "custom-select form-control-lg border-primary" />
                                </div>
                                <div className="col-sm-6">
                                    <RegionDropdown
                                    country={country}
                                    value={region}
                                    onChange={(val) => this.selectRegion(val)} 
                                    classes = "custom-select form-control-lg border-primary"/>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">2. Region field disabled until a country is selected.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value={country}
                                            onChange={(val) => this.selectCountry(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>                                    
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            disableWhenEmpty={true}
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.selectRegion(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">3. No country or region dropdown default option.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            showDefaultOption={false}
                                            value={country}
                                            onChange={(val) => this.selectCountry(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            showDefaultOption={false}
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.selectRegion(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">4. Custom default option texts for both the country and region dropdowns.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            defaultOptionLabel="Select a country, man."
                                            value={country}
                                            onChange={(val) => this.selectCountry(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            blankOptionLabel="No country selected, man."
                                            defaultOptionLabel="Now select a region, pal."
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.selectRegion(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">5. Custom name, class and ID attributes for both dropdowns.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value={country}
                                            id="my-country-field-id"
                                            name="my-country-field"
                                            classes="my-custom-class second-class custom-select form-control-lg border-primary"
                                            onChange={(val) => this.selectCountry(val)} />
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            country={country}
                                            value={region}
                                            name="my-region-field-name"
                                            id="my-region-field-id"
                                            classes="another-custom-class custom-select form-control-lg border-primary"
                                            onChange={(val) => this.selectRegion(val)} />
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">6. Abbreviated country and region names.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value={country}
                                            labelType="short"
                                            valueType="short"
                                            onChange={(val) => this.selectCountry(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>                                    
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            country={country}
                                            value={region}
                                            countryValueType="short"
                                            labelType="short"
                                            valueType="short"
                                            onChange={(val) => this.selectRegion(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">7. Specify which countries should appear. This just shows the UK, United States and Canada. See the countryShortCode property in the source data for the country shortcodes you need to pass here.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value={country}
                                            labelType="short"
                                            valueType="short"
                                            onChange={(val) => this.selectCountry(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            country={country}
                                            value={region}
                                            countryValueType="short"
                                            labelType="short"
                                            valueType="short"
                                            onChange={(val) => this.selectRegion(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">8. Specify which countries should NOT appear. This omits all countries that start with "A".</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value={country}
                                            onChange={(val) => this.selectCountry(val)}
                                            blacklist={['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG']} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.selectRegion(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">9. Explicitly disabling the country and region dropdowns (with defaults).</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value="United States"
                                            onChange={(val) => this.selectCountry(val)}
                                            disabled={true} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            country={country}
                                            value="Washington"
                                            onChange={(val) => this.selectRegion(val)}
                                            disabled={true} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">10. Arbitrary attributes (style, tabindex) passed to Country and Region dropdown</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value="United States"
                                            onChange={(val) => this.selectCountry(val)}
                                            style={{
                                            backgroundColor: 'blue',
                                            color: 'white',
                                            fontSize: 20
                                            }}
                                            tabIndex={1000}
                                            disabled={false} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            value="Washington"
                                            country="United States"
                                            onChange={(val) => this.selectRegion(val)}
                                            style={{
                                            backgroundColor: 'green',
                                            color: 'white'
                                            }}
                                            tabIndex={1001}
                                            disabled={false} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">11. With custom options in the RegionDropdown.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value={country}
                                            onChange={(val) => this.selectCountry(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.selectRegion(val)}
                                            customOptions={['-- Custom option 1', '-- Custom option 2']} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                        <div className="col-md-8 mx-auto mt-2 text-center">
                            <h5 className="pt-4 pb-2">12. Make Canada, United States and the UK appear first in the dropdown list.</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <CountryDropdown
                                            value={country}
                                            onChange={(val) => this.selectCountry(val)}
                                            priorityOptions={["CA", "US", "GB"]} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <RegionDropdown
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.selectRegion(val)} 
                                            classes = "custom-select form-control-lg border-primary"/>
                                    </div>
                                </div>
                            <hr />
                        </div>
                    </main>
                </div>
            </div>
      );
    }
  }
export default CountryProvince