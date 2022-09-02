import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchData: null,
      noData: false,
      prodt: null,
    }
  }
  search(key) {
    console.warn(key)
    fetch("http://localhost:9000/api/v1/products/src/search?query="+key).then((data) => {
      data.json().then((resp) => {
        console.warn("resp",resp)
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: false, prodt: null })
        }
        else {
          this.setState({ noData: true, searchData: null, prodt: null })
        }

      })
    })

  }
  pro() {
    fetch("http://localhost:9000/api/v1/products/prd/prducts").then((da) => {
      da.json().then((p) => {
        console.warn("p", p)
        if (this.state.prodt == null && this.state.searchData == null && this.state.noData == false) {
          this.setState({ prodt: p, searchData: null, noData: true })
        }
      })
    })
  }

  render() {
    return (
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Enter Product Name..."
            onChange={(event) => this.search(event.target.value)
            } />
          {
            this.pro()
          }

        </div>
        <div>
          {
            this.state.prodt ?
              <div>

                <div className="template_Container">
                  {
                    this.state.prodt.map((i) =>
                      <div className="template" key={i.id}>
                        <img src={i.imageurl} alt="" />
                        <Link to={'/products/' + i.id} className="read-more-link">  <h3>{i.name}</h3></Link>
                        <p className="price">₹{i.price}</p>
                        <p className="extra-content">{i.description}</p>
                      </div>
                    )
                  }
                </div>

              </div>
              :
              <div>
                {
                  this.state.searchData ?
                    <div className="template_Container">
                      {
                        this.state.searchData.map((item) =>

                          <div className="template" key={item.id}>
                            <img src={item.imageurl} alt="" />
                            <Link to={'/products/' + item.id} className="read-more-link">  <h3>{item.name}</h3></Link>
                            <p className="price">₹{item.price}</p>
                            <p className="extra-content">{item.description}</p>


                          </div>

                        )
                      }
                    </div>
                    : ""
                }
                <div className="template_Container">
                  {
                    this.state.noData ? <h3>No Data Found</h3> : null
                  }
                </div>
              </div>


          }
        </div>

      </div>
    )
  }
}

export default App;