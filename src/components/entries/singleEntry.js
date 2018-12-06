import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Entry from "../../views/singleEntryView";
import { connect } from "react-redux";
import { getEntry } from "../../actions/entries/entriesActions";

class SingleEntry extends Component {
  state = {};

  componentWillMount() {
    const { entry_id } = this.props.match.params;
    this.props.getEntry(entry_id);
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="dEntry">
          <Entry {...this.props.entry} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  entry: state.entriesReducer.entry.entry
});
export default connect(
  mapStateToProps,
  { getEntry }
)(SingleEntry);
