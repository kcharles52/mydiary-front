import * as React from "react";

//third-party libraries
import { connect } from "react-redux";

//interfaces
import { HomeLogedInProps } from "./interface";

//thunks (action creater)
import { getEntries, deleteEntry } from "../../store/modules/entries";

//components
import Footer from "../../components/common/Footer/footer";
import { Entry } from "../../components/Entry";
import { Header } from "../../components/common/Navbar";

export class HomeLogedIn extends React.Component<HomeLogedInProps> {
  state = { header: "Diary Entries" };
  componentDidMount() {
    this.props.getEntriesAction();
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.entries.length === 0) {
      this.setState({ header: "You have no entries " });
    }
    if (nextprops.deleted.length > this.props.deleted.length) {
      this.props.getEntriesAction();
    }
  }
  handlesDelete = entry_id => {
    this.props.deleteEntryAction(entry_id);
  };

  editRoute = (id: number) => {
    let path = `/editEntry/${id}`;
    this.props.history.push(path);
  };
  render() {
    const response = this.props.entries;
    let Entries,
      header = "You have no entries";
    if (response.length > 1) {
      Entries = response.map(item => {
        return (
          <Entry
            {...item}
            key={item.entry_id}
            delete={id => {
              this.handlesDelete(id);
            }}
            edit={id => this.editRoute(id)}
          />
        );
      });
      header = "Diary Entries";
    }

    return (
      <React.Fragment>
        <Header />
        <div>
          <div className="entries">
            <h1>{header}</h1>
            {Entries}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  entries: state.entries.entries,
  deleted: state.entries.deleted
});

export const mapDispatchToProps = dispatch => ({
  getEntriesAction: () => dispatch(getEntries()),
  deleteEntryAction: (id: number) => dispatch(deleteEntry(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLogedIn);
