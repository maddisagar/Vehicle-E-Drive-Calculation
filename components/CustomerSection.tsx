"use client";

import React, { useState, useEffect, useRef } from "react";
import "./CustomerSection.css";

function generateCalendarDays(year: number, month: number) {
  const days = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayWeekday = firstDay.getDay(); // Sunday=0, Monday=1, ...
  const totalDays = lastDay.getDate();

  // Fill empty slots before first day
  for (let i = 0; i < firstDayWeekday; i++) {
    days.push(null);
  }
  // Fill days of the month
  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
  }
  return days;
}

export default function CustomerSection() {
  const [customer, setCustomer] = useState("3EV");
  const [application, setApplication] = useState("1");
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 24)); // June 24, 2025 (month 5 zero-based)
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarYear, setCalendarYear] = useState(selectedDate.getFullYear());
  const [calendarMonth, setCalendarMonth] = useState(selectedDate.getMonth());

  const calendarRef = useRef<HTMLDivElement>(null);

  // Close calendar if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    }
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const days = generateCalendarDays(calendarYear, calendarMonth);

  function handleDateClick(day: number | null) {
    if (day === null) return;
    const newDate = new Date(calendarYear, calendarMonth, day);
    setSelectedDate(newDate);
    setShowCalendar(false);
  }

  function formatDate(date: Date) {
    // Format as M-D-YY
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear() % 100;
    return `${d}-${m}-${y}`;
  }

  function handlePrevMonth() {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  }

  function handleNextMonth() {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  }

  return (
    <div className="customer-section-wrapper">
      <div className="customer-section">
        <div className="customer-field">
          <label className="field-label" htmlFor="customer-input">Customer</label>
          <input
            id="customer-input"
            className="field-value input-field"
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="customer-field">
          <label className="field-label" htmlFor="application-input">Application</label>
          <input
            id="application-input"
            className="field-value input-field"
            type="text"
            value={application}
            onChange={(e) => setApplication(e.target.value)}
          />
        </div>
        <div className="customer-field">
          <span className="field-label">Date</span>
          <button
            className="field-value date-section date-button"
            onClick={() => setShowCalendar(!showCalendar)}
            aria-label="Select date"
          >
            {formatDate(selectedDate)}
          </button>
          {showCalendar && (
            <div className="calendar-popup" ref={calendarRef}>
              <div className="calendar-header">
                <button className="month-nav-button" onClick={handlePrevMonth} aria-label="Previous month">{'<'}</button>
                <span>{new Date(calendarYear, calendarMonth).toLocaleString("default", { month: "long", year: "numeric" })}</span>
                <button className="month-nav-button" onClick={handleNextMonth} aria-label="Next month">{'>'}</button>
              </div>
              <div className="calendar-grid">
                <div className="calendar-weekday">Sun</div>
                <div className="calendar-weekday">Mon</div>
                <div className="calendar-weekday">Tue</div>
                <div className="calendar-weekday">Wed</div>
                <div className="calendar-weekday">Thu</div>
                <div className="calendar-weekday">Fri</div>
                <div className="calendar-weekday">Sat</div>
                {days.map((day, idx) => (
                  <button
                    key={idx}
                    className={`calendar-day ${
                      day === selectedDate.getDate() &&
                      calendarYear === selectedDate.getFullYear() &&
                      calendarMonth === selectedDate.getMonth()
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleDateClick(day)}
                    disabled={day === null}
                  >
                    {day || ""}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
