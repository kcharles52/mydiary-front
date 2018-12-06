import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import NewEntryForm from "../../views/newEntryView";
import { connect } from "react-redux";
import { EditEntry, getEntry } from "../../actions/entries/entriesActions";

export class EditMyEntry extends Component {
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

  componentDidMount() {
    const { entry_id } = this.props.match.params;
    this.props.getEntry(entry_id);

  }

  editDirayEntry = (event, values) => {
    const data = { ...values, diaryEntryBody: this.state.entry.diaryBody };
    const { entry_id } = this.props.match.params;
    this.props.EditEntry(data, entry_id);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.response.Message) {
      const { entry_id } = this.props.match.params;
      this.props.history.push(`/entry/${entry_id}`);
    }
    this.setState({
      entry: {
        date: nextProps.response.entry.date,
        diaryBody: nextProps.response.entry.diaryBody,
        diaryTitle: nextProps.response.entry.title
      }
    });
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
            createEntry={this.editDirayEntry}
            entry={this.state.entry}
            title={"Edit Entry"}
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
  response: state.entriesReducer.entry,
  error: state.entriesReducer.error
});

export default connect(
  mapStateToProps,
  { EditEntry, getEntry }
)(EditMyEntry);
