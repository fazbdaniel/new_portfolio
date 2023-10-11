import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My qualifications</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Certificate</h3>
                <span className="qualification__subtitle">FreeCode Camp</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor</h3>
                <span className="qualification__subtitle">Cavendish University Uganda</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">Inst. Himbi</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2009 - 2015
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Primary School</h3>
                <span className="qualification__subtitle">E.P. Nyalukemba</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2003 - 2009
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Html, Css, Javascript</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Front End Development</h3>
                <span className="qualification__subtitle">React Js, Next Js, Tailwind</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Backend Development</h3>
                <span className="qualification__subtitle">Node Js, Firebase</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
