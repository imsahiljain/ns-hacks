import { Button, Input, useToast } from "@chakra-ui/react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 8, 11),
    end: new Date(2022, 8, 13),
  },
  {
    title: "Vacation",
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];

function Schedule() {
  const toast = useToast();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    toast({
      title: "Event added",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    // setNewEvent(" ");
  }
  //   setNewEvent(" ");

  return (
    <div mt="5">
      <Input
        type="text"
        placeholder="Add Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        h="45px"
        variant="filled"
        fontSize="lg"
        mr="10px"
        mt="10"
        mb="5px"
        w="17%"
        backgroundColor="#4d4d4d"
        color="#fff"
        _hover={{ bgColor: "#4d4d4d" }}
        _active={{
          bg: "#4d4d4d",
        }}
        _focus={{ bgColor: "#4d4d4d" }}
      />
      <style>
        {`.date-picker input {
          background-color: #4d4d4d;
            color: #fff !important;
            font-size: 1.1rem;
            padding: 7px;
            padding-left: 17px;
            border-radius: 5px;
            margin-bottom: 5px;
            width: 17%;
        
      }`}
      </style>
      <DatePicker
        wrapperClassName="date-picker"
        placeholderText="Start Date"
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        wrapperClassName="date-picker"
        placeholderText="End Date"
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <Button colorScheme="blue" mt="4" onClick={handleAddEvent}>
        Add Event
      </Button>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: "50px" }}
      />
    </div>
  );
}

export default Schedule;
