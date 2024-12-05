import React, { useState, useEffect } from "react";

const AthleteComponent = () => {
  // Initial arrays of athletes
  const athletes1 = [
    { name: "John", sport: "Soccer", age: 22, medals: 15 },
    { name: "Alex", sport: "Tennis", age: 19, medals: 2 },
  ];

  const athletes2 = [
    { name: "Emma", sport: "Basketball", age: 25, medals: 7 },
    { name: "Michael", sport: "Soccer", age: 21, medals: 4 },
  ];

  const [mergedAthletes, setMergedAthletes] = useState([]);
  const [firstSoccerPlayer, setFirstSoccerPlayer] = useState(null);
  const [hasMoreThanTenMedals, setHasMoreThanTenMedals] = useState(false);

  useEffect(() => {
    // Merge the two arrays
    const allAthletes = [...athletes1, ...athletes2];

    // Filter out athletes who are younger than 20
    const filteredAthletes = allAthletes.filter((athlete) => athlete.age >= 20);

    // Increase the number of medals for each athlete by 1
    const updatedAthletes = filteredAthletes.map((athlete) => ({
      ...athlete,
      medals: athlete.medals + 1,
    }));

    // Find the first athlete who plays "Soccer"
    const soccerPlayer = updatedAthletes.find(
      (athlete) => athlete.sport === "Soccer"
    );

    // Check if any athlete has more than 10 medals
    const moreThanTenMedals = updatedAthletes.some(
      (athlete) => athlete.medals > 10
    );

    // Set the state with the processed data
    setMergedAthletes(updatedAthletes);
    setFirstSoccerPlayer(soccerPlayer);
    setHasMoreThanTenMedals(moreThanTenMedals);
  }, []);

  return (
    <div>
      <h1>Athletes</h1>
      <h2>Merged and Processed Athletes:</h2>
      <ul>
        {mergedAthletes.map((athlete, index) => (
          <li key={index}>
            {athlete.name} - {athlete.sport}, Age: {athlete.age}, Medals:{" "}
            {athlete.medals}
          </li>
        ))}
      </ul>

      <h2>First Soccer Player:</h2>
      {firstSoccerPlayer ? (
        <p>
          {firstSoccerPlayer.name} plays {firstSoccerPlayer.sport} and has{" "}
          {firstSoccerPlayer.medals} medals.
        </p>
      ) : (
        <p>No soccer player found.</p>
      )}

      <h2>Is there any athlete with more than 10 medals?</h2>
      <p>{hasMoreThanTenMedals ? "Yes" : "No"}</p>
    </div>
  );
};

export default AthleteComponent;
