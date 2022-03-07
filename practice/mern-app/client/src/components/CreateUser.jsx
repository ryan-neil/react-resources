import { useState } from 'react';

const CreateUser = ({ list, setList }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');

  if (!list) {
    return null;
  }

  // handle creating a new user
  const handleCreateUser = () => {
    // POST to backend API
    const postData = async () => {
      try {
        const BASE_URL = 'http://localhost:3001';
        await fetch(`${BASE_URL}/api/createUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, age, username }),
        });

        // update our users list with the new user added in
        setList([...list, { name, age, username }]);
        setName(null);
        setAge(null);
        setUsername(null);
      } catch (err) {
        console.log(err);
      }
    };
    postData();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default CreateUser;
