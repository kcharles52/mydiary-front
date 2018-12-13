export const intialState = {
  entries: [],
  entry: {},
  new: {},
  Message: "",
  deleted: []
};

export const fetchedEntries = {
  entries: [
    {
      entry_id: 1,
      title: "Title 1",
      diaryBody:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
      date: "12/12/2018",
      delete: jest.fn()
    },
    {
      entry_id: 2,
      title: "Title 2",
      diaryBody:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
      date: "12/12/2018",
      delete: jest.fn()
    }
  ],
  Message:"Successfully fetched entries"
};

export const editedEntry = {
    entry_id: 1,
      title: "Edited",
      diaryBody:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi, hic esse necessitatibus inventore illo debitis error nesciunt officia earum. Optio totam, sapiente ",
      date: "12/12/2018",
      delete: jest.fn()
}