import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import EntryCard from "../../views/entriesView";
import { connect } from "react-redux";
import { getEntries, deleteEntry } from "../../actions/entries/entriesActions";

export class HomeLogedIn extends Component {
  state = { header: "Diary Entries" };
  componentDidMount() {
    this.props.getEntries();
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.entries.length === 0) {
      this.setState({ header: "You have no entries " });
    }
    if (nextprops.deleted.length > this.props.deleted.length) {
      this.props.getEntries();
    }
  }
  handlesDelete = entry_id => {
    this.props.deleteEntry(entry_id);
  };
  render() {
    const response = this.props.entries;
    const Entries = response.map(item => {
      return (
        <EntryCard
          {...item}
          key={item.entry_id}
          delete={this.props.deleteEntry}
        />
      );
    });
    return (
      <Fragment>
        <NavBar />
        <div className="entries">
          <div id="entriesPage" className="flex-container">
            <h1>{this.state.header} </h1>
            <h3>Date: {(new Date()).toLocaleString()}</h3>
          </div>
          <div className="entryCards">{Entries}</div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entriesReducer.entries,
  deleted: state.entriesReducer.delete
});
export default connect(
  mapStateToProps,
  { getEntries, deleteEntry }
)(HomeLogedIn);
