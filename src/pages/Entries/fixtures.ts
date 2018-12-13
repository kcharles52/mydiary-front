export const props = {
  getEntriesAction: jest.fn(),
  deleteEntryAction: jest.fn(),
  entries: [
    {
      entry_id: 1,
      diaryTitle: "Title 1",
      diaryEntryBody:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
      date: "12/12/2018",
      delete: jest.fn()
    },
    {
      entry_id: 2,
      diaryTitle: "Title 2",
      diaryEntryBody:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
      date: "12/12/2018",
      delete: jest.fn()
    }
  ],
  deleted: [],
  handlesDelete: jest.fn(),
  history: {push:jest.fn()},
  location: { pathname: "/home" },
  match: { url: "/home" }
};

export const fetchedEntries =[
  {
    entry_id: 1,
    diaryTitle: "Title 1",
    diaryEntryBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
    date: "12/12/2018",
    delete: jest.fn()
  },
  {
    entry_id: 2,
    diaryTitle: "Title 2",
    diaryEntryBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
    date: "12/12/2018",
    delete: jest.fn()
  }
]