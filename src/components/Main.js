import React, { Component } from 'react';
import Identicon from 'identicon.js';
import bgrounddd from '../3rCL.gif'
class Main extends Component {

  render() {
    return (
    <>
      <img style={{position: "relative",width:"100%"}} src={ bgrounddd} alt="img"/>
      <div style={{zIndex: "111",position: "absolute",top:"0px"}}  className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto">
            <div className="content mr-auto ml-auto mt-5">
              <p>&nbsp;</p>
              <h2 style={{color:"white"}}>UPLOAD YOUR NFT</h2>
             <div style={{padding:"30px", width:"400px",backgroundColor:"#007bff80"}} className='card'>
             <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Image description..."
                        required />
                  </div>
                <button style={{backgroundColor: "orange",color:"black"}}type="submit" class="btn btn-primary btn-block btn-lg">Upload!</button>
              </form>
             </div>
              <p>&nbsp;</p>
              { this.props.images.map((image, key) => {
                return(
                  <div className='row' >
                  <div style={{borderRadius:"30px" , width: "200px", backgroundColor: "#00000000"}} className="card col-lg-4" key={key}>
                    {/* <div className="card-header">
                      <img
                        className='mr-2'
                        width='10'
                        height='10'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                    </div> */}
                    <ul style={{borderRadius:"30px", backgroundColor: "#b5a4a461"}}  id="imageList" className="list-group list-group-flush">
                      <li style={{borderRadius:"30px", backgroundColor: "#00000000"}} className="list-group-item">
                        <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '400px'}}/></p>
                        <p style={{color:"white"}}>Image discreption: {image.description}</p>
                      </li>
                      <li style={{borderRadius:"30px", backgroundColor: "#154e21b0",color:"white"}} key={key} className="list-group-item py-2">
                        {/* <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(image.tipAmount.toString()-.298, 'Ether')} ETH
                        </small> */}
                        {/* <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        > */}
                          <h1 style={{color:"white"}}>Your Addres</h1>
                <strong style={{fontSize:"25px",color:"white"}}><small style={{color:"white"}} >{image.author}</small></strong> <br/>

                           0.0998 ETH
                        {/* </button> */}
                      </li>
                    </ul>
                  </div>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </div>
      </>
    );
  }
}

export default Main;