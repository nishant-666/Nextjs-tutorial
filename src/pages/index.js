import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    let response = await fetch("/api/users");
    setUser(await response.json());
  };

  const postUsers = async () => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.round(Math.random() * 100),
        name,
        age,
      }),
    }).then(() => {
      getUsers();
      setName("");
      setAge("");
    });
  };

  const populateFields = (data) => {
    setName(data.name);
    setAge(data.age);
    setId(data.id);
  };

  const updateUser = () => {
    fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        age,
      }),
    }).then(() => {
      getUsers();
    });
  };

  const deleteUser = (id) => {
    fetch("/api/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    }).then(() => {
      getUsers();
    });
  };

  return (
    <>
      <Head>
        <title>Next.js Tutorial</title>
        <meta name="description" content="This is a Next.js Tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input
          name="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="age"
          placeholder="Enter your Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <button onClick={postUsers}>Post User</button>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={updateUser}>Update User</button>

        {user.map((data) => {
          return (
            <div key={data.id}>
              {data.name} is {data.age} years old!
              <button onClick={() => deleteUser(data.id)}>
                Delete this user
              </button>
              <button onClick={() => populateFields(data)}>
                Populate this User
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
