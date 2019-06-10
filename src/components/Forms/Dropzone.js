import React, {useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

const Dropzone = () => {

    const [files, setFiles] = useState([]);
    const maxSize = 1048576;

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
        onDrop,
        accept: 'image/*',
        minSize: 0,
        maxSize
    });

    const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
              alt={img}
            />
          </div>
        </div>
      ));

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Dropzone</h1>

                    <div className="col-md-5 mx-auto mt-2">
                        <h3 className="pt-4 pb-2 text-center">Company Details</h3>
                        <form id="residential-form" method="post" className="needs-validation" action="" noValidate>
                            <div id="all-errors" className="alert alert-error fade show" role="alert">
                                <strong>There were errors during registration:</strong>

                                <div id="name-error" className="form-error"></div>
                                <div id="description-error" className="form-error"></div>
                                <div id="websiteurl-error" className="form-error"></div>

                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="name">Name(*)</label>
                                    <input type="text" className="form-control form-control-lg border border-primary" id="name"
                                        name="name" placeholder="Company Name" minLength="3" required />
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="description">Description(*)</label>
                                    <textarea className="form-control form-control-lg border border-primary" id="description"
                                        name="description" placeholder="Please set the district description" minLength="3" rows="4" required />
                                    <p style={{fontSize: 15, color: 'gray'}}>This is the description of the business district</p>
                                </div>
                        
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="websiteurl">Website URL</label>
                                    <input type="text" className="form-control form-control-lg border border-success" id="websiteurl"
                                        name="websiteurl" placeholder="" />
                                </div>

                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="Logo">Logo</label>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {!isDragActive && 'Click here or drop a file to upload!'}
                                        {isDragActive && !isDragReject && "Drop it like it's hot!"}
                                        {isDragReject && "File type not accepted, sorry!"}
                                        {isFileTooLarge && (
                                        <div className="text-danger mt-2">
                                            File is too large.
                                        </div>
                                        )}
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                    <ul className="list-group mt-2">
                                        {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                                            <li className="list-group-item list-group-item-success" key={acceptedFile.name}>
                                                {acceptedFile.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group col-md-12 mb-3 mx-auto text-center" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <button className="btn btn-secondary btn-lg mt-4" type="submit">
                                    <i className="fas fa-arrow-circle-left"></i>
                                    Back
                                </button>
                                <button className="btn btn-success btn-lg mt-4" type="submit">
                                    Next
                                    <i className="fas fa-arrow-circle-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};
export default Dropzone;