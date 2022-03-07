const UsersList = ({ list, isLoading, error }) => {
  // show loading until we receive the data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // if we receive an error, render the error
  if (error) {
    return <p>Oops something went wrong ({error})</p>;
  }

  return (
    <div className="users-display">
      <h2>Users ({list.length}):</h2>
      {list.map((item) => (
        <div key={item._id}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Username: {item.username}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
