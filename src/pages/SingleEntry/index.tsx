//react libraries
import * as React from "react";

//third-party libraries
import { connect } from "react-redux";

//interfaces
import { SingleEntryProps, SingleEntryState } from "./interface";

//thunks
import { getEntry, deleteEntry } from "../../store/modules/entries";

//components
import { Header } from "../../components/common/Navbar";
import Footer from "../../components/common/Footer/footer";
import { Button } from "../../components/Form/common";

//styles
import "./SingleEntry.scss";

export class SingleEntry extends React.Component<
  SingleEntryProps,
  SingleEntryState
> {
  DefaultState = {
    Entry: {
      diaryTitle: "",
      date: "",
      diaryEntryBody: "",
      entry_id: 0
    }
  };
  state = { ...this.DefaultState };
  componentDidMount() {
    const { entry_id } = this.props.match.params;
    if (entry_id !== undefined) {
      this.props.getEntryAction(entry_id).then(() => {
        const { entry } = this.props.fetchedEntry;
        this.setState({
          Entry: { ...entry }
        });
      });
    }
  }

  /**
   * This method deletes an entry
   * @param {entry_id}
   * @returns {void}
   */
  deleteEntry = entry_id => {
    this.props.deleteEntryAction(entry_id);
    this.props.history.push("/home");
  };

  /**
   * This method redirects to edit an entry page
   * @param {entry_id}
   * @returns {void}
   */
  editRoute = (id: number) => {
    let path = `/editEntry/${id}`;
    this.props.history.push(path);
  };
  render() {
    let { diaryTitle, date, diaryEntryBody, entry_id } = this.state.Entry;
    return (
      <React.Fragment>
        <Header />
        <div className="SingleEntry">
          <div className="EntryDetails">
            <div className="Diaryheader">
              <h1>{diaryTitle}</h1>
              <h3>{date}</h3>
            </div>
            <div className="diarybody">
              <h1>{diaryEntryBody}</h1>
            </div>
            <div className="actionButtons">
              <Button
                label="Edit"
                className="button"
                onClick={() => {
                  this.editRoute(entry_id);
                }}
              />
              <Button
                label="Delete"
                className="button"
                onClick={() => {
                  this.deleteEntry(entry_id);
                }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  getEntryAction: id => dispatch(getEntry(id)),
  deleteEntryAction: id => dispatch(deleteEntry(id))
});
export const mapStateToProps = state => ({
  fetchedEntry: state.entries.entry
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleEntry);
