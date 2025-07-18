"use client";
import React, { useState } from "react";
import InputForm from "./InputForm";
import PromptButtons from "./PromptButtons";
import Recommendations from "./Recommendations";

function MainContentSection() {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const questionSubmitHandler = async (inputQuery) => {
    if (inputQuery.trim() == "") {
      setError("Type what you want to search");
      return;
    }
    try {
      setloading(true);
      setError(null);
      setRecommendations([]);

      const response = await fetch("http://localhost:8000/api/recommend/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: inputQuery }),
      });
      if (!response.ok) {
        setError("Sorry,something went wrong");
        return;
      }

      const data = await response.json();
      if (Array.isArray(data.recommendations)) {
        setRecommendations(data.recommendations);
      } else if (typeof data.recommendations === "string") {
        setRecommendations([data.recommendations]);
      } else {
        setError("Invalid format from server");
      }
    } catch (error) {
      console.error(" Fetch failed:", error.message);
      setError("Failed to perform the search");
    } finally {
      setloading(false);
    }
  };

  return (
    <section className="text-center">
      <InputForm
        questionSubmitHandler={questionSubmitHandler}
        error={error}
        loading={loading}
      />

      <Recommendations recommendations={recommendations} />
    </section>
  );
}

export default MainContentSection;
