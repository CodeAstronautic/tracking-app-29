import { v4 as uuid } from "uuid";

const newTimer = (attrs = {}) => {
  const timer = {
    title: attrs.title || "Timer",
    project: attrs.project || "Project",
    id: uuid, 
    elapsed: 0,
  };

  return timer;
};

const padSize = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
};

const millisecondsToHuman = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    padSize(hours.toString(), 2),
    padSize(minutes.toString(), 2),
    padSize(seconds.toString(), 2),
  ].join(":");

  return humanized;
};

const renderElapsedString = (elapsed, runningSince) => {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
};

export { millisecondsToHuman, newTimer, renderElapsedString };
