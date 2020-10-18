import React from "react";

const ProjectList = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card" >
        <div className="card-body" style={{ backgroundImage: `url(${props.backgroundImage })`}}>
          <h5 className="card-title"></h5>
          <p className="card-text"></p>
          <a
            href={props.href}
            
            className="btn bg-primary text-white"
          >
            {props.title}
          </a>
        </div>
        {console.log(props)}
        <a href={props.repoUrl} className="btn bg-primary text-white">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
