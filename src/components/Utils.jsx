import React from "react";

export const parseEvents = (eventString) => {
  const events = [];
  const lines = eventString.trim().split("\n");

  lines.forEach((line) => {
    const match = line.match(/(\d+\s[^\s]+)\s(.+)/); // Regex to match date and location
    if (match) {
      const date = match[1].trim();
      const location = match[2].trim();
      events.push({ date, location });
    }
  });

  return events;
};

export const mapEventsToCoordinates = (events, coordinates) => {
  return events
    .map((evt, index) => {
      const coord = coordinates[index]; // Assuming the order matches
      return coord ? { ...evt, coord } : null;
    })
    .filter((evt) => evt !== null); // Filter out events without coordinates
};
