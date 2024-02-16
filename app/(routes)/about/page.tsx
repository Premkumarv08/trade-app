import React from "react";

interface User {
  id: number;
  name: string;
}
const AboutPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <h1>About</h1>
  );
};

export default AboutPage;
