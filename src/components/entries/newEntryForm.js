import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import NewEntryForm from "../../views/newEntryView";
import { connect } from "react-redux";
import { addEntry } from "../../actions/entries/entriesActions";

export class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        date: "",
        diaryBody: "",
        diaryTitle: ""
      }
    };
  }

  createNewEntry = (event, values) => {
    const data = { ...values, diaryEntryBody: this.state.entry.diaryBody };
    this.props.addEntry(data);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.response.Message) {
      this.props.history.push(`/home`);
    }
  }
  getInput = value => {
    this.setState(prevState => {
      return {
        entry: {
          ...prevState.entry,
          diaryBody: value
        }
      };
    });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          <NewEntryForm
            createEntry={this.createNewEntry}
            entry={this.state.entry}
            title={"Add Diary Entry"}
            handleChange={this.getInput}
            error={this.props.error}
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  response: state.entriesReducer.new,
  error: state.entriesReducer.error
});

export default connect(
  mapStateToProps,
  { addEntry }
)(NewEntry);
