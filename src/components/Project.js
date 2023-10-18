function Project(props) {
    return (
      <div className="App">
          <div className="card" style={{"width": "500px", "height": "400px", "margin": "40px" }}>
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a target="blank" href={props.github} className="btn btn-primary">Go to Github repo</a>
    <a target="blank" href={props.url} className="btn btn-primary">Go to live app</a>
  </div>
</div>
        
      </div>
    );
  }
  
  export default Project;
  