import React, { Component } from "react";
import Dropzone from "react-dropzone";
import styles from './style.css'
export default class Basic extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  onCancel() {
    this.setState({
      files: []
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            onFileDialogCancel={this.onCancel.bind(this)}
          >
            <p>
              Drop some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}
