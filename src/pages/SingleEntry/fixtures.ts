export const props = {
  getEntryAction: (id: string) => Promise.resolve(),
  deleteEntryAction: (id: string) => Promise.resolve(),
  fetchedEntry: { entry: {} },
  match: { params: { entry_id: "1" } },
  history: { push: jest.fn() },
  location: { pathname: "/Entry/1" }
};

export const fetchedEntry = {
  entry_id: 1,
  diaryTitle: "Title 1",
  diaryEntryBody:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
  date: "12/12/2018",
  delete: jest.fn()
};
