import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
 
class FileReader extends React.Component {
 
  render() {
    return (
      <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
    )
  }
}
 
ReactDOM.render(<FileReader />, document.getElementById('root'))

export default FileReader;