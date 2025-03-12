import React from "react";
import img from '../../images/project_img/1.jpg'
import img2 from '../../images/project_img/2.jpg'
import img3 from '../../images/project_img/3.jpg'
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="projects_section">
      <div className="container projects_container">
        <div className="short_about_h2">
          <div
            className="short_about_uzor_before"
            style={{ zIndex: "999" }}
          ></div>

          <h2 className="projects_section_h2">Lahiyələr</h2>
          <div
            className="short_about_uzor_after"
            style={{ zIndex: "999" }}
          ></div>
        </div>
        <div className="projects_grid_container">
            <div className="projects_grid_card">
                <img src={img} alt="" />
            </div>
            <div className="projects_grid_card">
                <img src={img2} alt="" />
            </div>
            <div className="projects_grid_card">
                <img src={img3} alt="" />
            </div>
            <div className="projects_grid_card">
                <img src={img3} alt="" />
            </div>
        </div>
        <div className="more_projects_btn">
            <Link to='/projects' className='go_to_project_page'>DAHA ÇOXU</Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
