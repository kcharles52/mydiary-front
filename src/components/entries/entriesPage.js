import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import EntryCard from "../../views/entriesView";
import { connect } from "react-redux";
import { getEntries } from "../../actions/entries/entriesActions";

class HomeLogedIn extends Component {
  state = { header: "Diary Entries" };
  componentDidMount() {
    this.props.getEntries();
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.entries.length === 0) {
      this.setState({ header: "You have no entries " });
    }
  }
  render() {
    const response = this.props.entries;
    const Entries = response.map(item => {
      return <EntryCard {...item} key={item.entry_id} />;
    });
    return (
      <Fragment>
        <NavBar />
        <div className="entries">
          <h1>{this.state.header}</h1>
          <div className="entryCards">{Entries}</div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entriesReducer.entries
});
export default connect(
  mapStateToProps,
  { getEntries }
)(HomeLogedIn);
