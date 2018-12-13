export const headers = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `${token}` }
  };
};
