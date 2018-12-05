import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import NewEntryForm from "../../views/newEntryView";
import { connect } from "react-redux";
import { addEntry } from "../../actions/entries/entriesActions";

export class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  componentWillMount() {
    if (this.props.edit === true) {
      
    }
  }

  createNewEntry = (event, values) => {
    const data = { ...values, diaryEntryBody: this.state.entry };
    this.props.addEntry(data);
  };
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.response.Message) {
      this.props.history.push(`/home`);
    }
  }
  getInput = value => {
    this.setState({ entry: value });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          <NewEntryForm
            createEntry={this.createNewEntry}
            entry={this.state.entry}
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
  { addEntry}
)(NewEntry);
