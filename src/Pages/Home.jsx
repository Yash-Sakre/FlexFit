import { useState } from "react";
import Hero from "../Components/Hero";
import AllExercises from "../Components/AllExercises";
import SearchExercise from "../Components/SearchExercise";

const Home = () => {
  const [exercises, setexercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [search, setSearch] = useState("");
  return (
    <>
      <Hero />
      <SearchExercise
        search={search}
        setSearch={setSearch}
        setexercises={setexercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <AllExercises
        search={search}
        setexercises={setexercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Home;
