"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/data", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setText(data);
    };

    getData();
  }, []);

  return <h1>{text}</h1>;
};

export default Home;
