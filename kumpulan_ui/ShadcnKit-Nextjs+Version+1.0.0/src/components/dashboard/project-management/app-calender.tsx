"use client";

import moment from "moment";
import { cn } from "@/lib/utils";
import events from "@/lib/events";
import { Card } from "@/components/ui/card";
import { HTMLAttributes, useCallback, useMemo, useState } from "react";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

type Props = HTMLAttributes<HTMLDivElement>;

const AppCalender = ({ className, ...props }: Props) => {
  const localizer = momentLocalizer(moment);
  const [myEvents, setMyEvents] = useState(events);

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }: any) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setMyEvents((prev: any) => {
        const existing = prev.find((ev: any) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: any) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents]
  );

  const resizeEvent = useCallback(
    ({ event, start, end }: any) => {
      setMyEvents((prev: any) => {
        const existing = prev.find((ev: any) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: any) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setMyEvents]
  );

  const defaultDate = useMemo(() => new Date(2015, 3, 12), []);

  return (
    <Card className={cn("h-[500px] overflow-hidden p-6", className)} {...props}>
      <DragAndDropCalendar
        defaultDate={defaultDate}
        defaultView={Views.MONTH}
        events={myEvents}
        localizer={localizer}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        popup
        resizable
      />
    </Card>
  );
};

export default AppCalender;
