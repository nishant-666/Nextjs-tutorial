import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
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
        name,
        age,
      }),
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
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="age"
          placeholder="Enter your Age"
          onChange={(event) => setAge(Number(event.target.value))}
        />
        <button onClick={postUsers}>Post User</button>
        <button onClick={getUsers}>Get Users</button>

        {user.map((data) => {
          return (
            <div>
              {data.name} is {data.age} years old!
            </div>
          );
        })}
      </div>
    </>
  );
}
