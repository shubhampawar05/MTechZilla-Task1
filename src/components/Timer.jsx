import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import dayjs from "dayjs";

const PomodoroTimer = () => {
  const [currentTime, setCurrentTime] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);
  const [timeremaing, setTimeremaing] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timerInterval;
    if (timeremaing) {
      timerInterval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [timeremaing]);

  useEffect(() => {
    if (currentTime === 0) {
      if (!breakTime) {
        setBreakTime(true);
        setCurrentTime(breakDuration);
      } else {
        setBreakTime(false);
        setCurrentTime(1500);
        setShowPopup(true);
      }
    }
  }, [currentTime, breakTime, breakDuration]);

  const startTimer = () => {
    setTimeremaing(true);
    setShowPopup(false);
  };

  const pauseTimer = () => {
    setTimeremaing(false);
  };

  const resetTimer = () => {
    setTimeremaing(false);
    setCurrentTime(1500);
    setBreakTime(false);
    setShowPopup(false);
  };

  const switchToBreak = () => {
    setTimeremaing(false);
    setBreakTime(true);
    setCurrentTime(breakDuration);
  };

  const switchToPomodoro = () => {
    setTimeremaing(false);
    setBreakTime(false);
    setCurrentTime(1500);
  };

  const formatTime = (seconds) => {
    return dayjs().startOf("day").second(seconds).format("mm:ss");
  };

  return (
    <div className="container mx-auto px-4 sm:px-12 w-full h-full">
      <div className="max-w-lg mx-auto text-center mt-4 sm:mt-12 sm:p-4 p-2 rounded-lg shadow-2xl shadow-slate-500 backdrop-blur-md bg-white">
        <p className="flex gap-4 items-center justify-center my-4">
          <div
            onClick={switchToPomodoro}
            className={`text-xl ${
              !breakTime
                ? "font-bold text-red-500 border-2 rounded py-1 px-2 bg-slate-300 "
                : "text-gray-500"
            } cursor-pointer font-semibold`}
          >
            Pomodoro
          </div>
          <div
            onClick={switchToBreak}
            className={`text-xl ${
              breakTime
                ? "font-bold text-red-500 border-2 rounded py-1 px-2 bg-slate-300"
                : "text-gray-500"
            } cursor-pointer font-semibold`}
          >
            Break
          </div>
        </p>
        <div className="text-8xl font-bold mt-5">{formatTime(currentTime)}</div>
        <div className="mt-8 mb-4 flex gap-4 justify-center items-center">
          <button
            className={`text-xl px-4 py-1 border rounded shadow-md ${
              timeremaing ? "text-gray-500" : "text-green-500"
            }`}
            onClick={startTimer}
            disabled={timeremaing}
          >
            <FaPlay />
          </button>
          <button
            className="text-xl px-4 py-1 border rounded shadow-md text-yellow-500"
            onClick={pauseTimer}
          >
            <FaPause />
          </button>
          <button
            className="text-xl px-4 py-1 border rounded shadow-md text-red-500"
            onClick={resetTimer}
          >
            <FaStop />
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold mb-4">Break is finished!</p>
            <p className="mb-4">Pomodoro session has ended. Take a break!</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
