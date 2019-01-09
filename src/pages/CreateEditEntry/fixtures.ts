export const props = {
  Edit: false,
  title: "Form title",
  diaryTitle: "Test Diary Title",
  date: "20-2-19",
  diaryBody: "Test Diary body",
  onSubmit: jest.fn(),
  onChange: jest.fn(),
  addEntryAction: jest.fn(),
  editEntryAction: jest.fn(),
  getEntryAction: jest.fn(() =>
    Promise.resolve({
      entry: {
        entry_id: 1,
        diaryTitle: "Title 1",
        diaryEntryBody:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
        date: "12/12/2018",
        delete: jest.fn()
      }
    })
  ),
  match: { params: { entry_id: "1" } },
  editEntry: {
    entry: {
      entry_id: 1,
      diaryTitle: "Title 1",
      diaryEntryBody:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
      date: "12/12/2018",
      delete: jest.fn()
    }
  },
  newEntry: {},
  history: { push: () => {} },
  location: { pathname: "/addEntry" }
};

export const entry = {
  entry_id: 1,
  diaryTitle: "Title 1",
  diaryEntryBody:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
  date: "12/12/2018",
  delete: jest.fn()
};
