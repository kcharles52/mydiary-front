import React, { Fragment } from "react";
import FormBox from "../components/user/formBox";
const IndexPage = (props) => {
  let {login, signup} = props
  return (
    <Fragment>
      <div id="home" className="pg-content">
        <section>
          <div className="clearfix">
            <div className="home-col">
              <div id="home-msg">
                <h2>Memories Memories, sweet memories</h2>
                <h2>You can easily record your memories online now </h2>
                <ul>
                  <li className="color1">To do list</li>
                  <li className="color2">Aniverseries</li>
                  <li className="color4">And many more</li>
                </ul>
              </div>
            </div>
            <div className="home-col">
              <div className="form">
                <div className="tab-group">
                  <div className="tab">
                    <a href="#login" onClick={login }>Log In</a>
                  </div>
                  <div className="tab">
                    <a href="#signup" onClick={signup}>Register</a>
                  </div>
                </div>

                <div className="tab-content">
                  <FormBox {...props}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default IndexPage;
