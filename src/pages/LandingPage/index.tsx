// react libraries
import * as React from "react";

//interfaces
import { LandingPageProps } from "./interface";

//components
import FormBox from "../../components/FormBox";

//styles
import "./LandingPage.scss";

export class LandingPage extends React.Component<LandingPageProps> {
  render() {
    return (
      <React.Fragment>
        <div id="home" className="pg-content">
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
              <div className="form">{<FormBox {...this.props} />}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
