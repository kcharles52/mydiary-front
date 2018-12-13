//react libraries
import * as React from "react";

//third-party libraries
import { connect } from "react-redux";

//interfaces
import { CreatEditEntryProps, EntriesState } from "./interface";

//thunks (action creators)
import { addEntry, editEntry, getEntry } from "../../store/modules/entries";

//components
import { EntryForm } from "../../components/Form/EntryForm/EntryForm";
import Footer from "../../components/common/Footer/footer";
import { Header } from "../../components/common/Navbar";

export class CreatEditEntry extends React.Component<
  CreatEditEntryProps,
  EntriesState
> {
  DefaultState = {
    Edit: false,
    isLoading: true,
    Entry: {
      diaryTitle: "",
      date: "",
      diaryEntryBody: ""
    }
  };

  state = {
    ...this.DefaultState
  };

  componentDidMount() {
    const { entry_id } = this.props.match.params;
    if (entry_id !== undefined) {
      this.props.getEntryAction(entry_id).then(() => {
        const { entry } = this.props.editEntry;
        this.setState({
          Edit: true,
          isLoading: false,
          Entry: { ...entry }
        });
      });
    }
  }

  /**
   * This method handles what happens when the name value changes in the input field.
   *
   * @param {Event} event
   * @returns {void}
   */
  HandleInputChange = (event): void => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    this.setState(prevState => {
      return { Entry: { ...prevState.Entry, [name]: value } };
    });
  };

  /**
   * This method handles what happensform data is submited
   *
   * @param {Event} event
   * @returns {void}
   */
  HandleSubmit = () => {
    this.state.Edit ? this.editDiaryEntry() : this.createNewEntry();
  };

  /**
   * This method handles creation of a new diary entry
   *
   * @param {data} Entry to add
   * @returns {void}
   */
  createNewEntry = () => {
    const data = { ...this.state.Entry };
    this.props.addEntryAction(data);
    this.props.history.push("/home");
  };

  /**
   * This method handles creation of a new diary entry
   *
   * @param {data} Entry to edit
   * @param {id} EntryId
   * @returns {void}
   */
  editDiaryEntry = () => {
    const data = { ...this.state.Entry };
    const { entry_id } = this.props.match.params;
    this.props.editEntryAction(data, entry_id);
    this.props.history.push("/home");
  };

  render() {
    let { diaryTitle, date, diaryEntryBody } = this.state.Entry;
    let title = this.state.Edit
      ? "Edit your entry and submit"
      : "Create diary Entry";

    return (
      <React.Fragment>
        <Header />

        <div className="CreateEntryForm">
          <EntryForm
            onChange={this.HandleInputChange}
            diaryTitle={diaryTitle}
            date={date}
            diaryBody={diaryEntryBody}
            onSubmit={this.HandleSubmit}
            onCancel={() => {}}
            title={title}
            {...this.props}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  addEntryAction: data => dispatch(addEntry(data)),
  editEntryAction: (data, id) => dispatch(editEntry(data, id)),
  getEntryAction: id => dispatch(getEntry(id))
});
export const mapStateToProps = state => ({
  editEntry: state.entries.entry,
  newEntry: state.entries.new
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatEditEntry);
