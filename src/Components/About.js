import React ,{useState}from 'react'

const About = (props) => {
   
    let myStyle={
      color: props.mode=="dark"?"white":"black",
      backgroundColor:props.mode=="dark"?"rgb(36, 38, 85)":"white"
    }
 return (
   
    <>
    <div className="accordion " id="accordionExample" style={myStyle}>
    <div className="accordion-item">
      <h2 className="accordion-header" style={myStyle}>
        <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <h5>About CTO</h5>
        </button>
      </h2>
      <div id="collapseOne" style={myStyle}className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <i><strong>Naman Saini</strong>s is the Chief Technical Officer.</i></div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header"style={myStyle}>
        <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5>About Developer</h5>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
          <i><strong>Naman Saini</strong> is the Developer.</i>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header"style={myStyle}>
        <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>About Tester</h5>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" style={myStyle}data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <i><strong>Naman Saini </strong> is the well qualified Tester.</i> </div>
      </div>
    </div>
  </div>
 
  </>
  );
}


export default About