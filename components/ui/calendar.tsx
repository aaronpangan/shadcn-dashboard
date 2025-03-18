"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium hidden",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",

        // Designing the dropdowns
        caption_dropdowns: "flex gap-3 items-center",

        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
        CaptionLabel: () => null,
        Dropdown: (props) => {
          const { fromYear, fromMonth, fromDate, toYear, toMonth, toDate } =
            useDayPicker();

          const { currentMonth, goToMonth } = useNavigation();

          let values: { values: string; label: string }[] = [];

          if (props.name === "months") {
            values = Array.from({ length: 12 }, (_, index) => {
              return {
                values: index.toString(),
                label: format(
                  new Date(new Date().getFullYear(), index, 1),
                  "MMM",
                ),
              };
            });
          }

          if (props.name === "years") {
            const earliestYear =
              fromYear || fromMonth?.getFullYear() || fromDate?.getFullYear();
            const latestYear =
              toYear || toMonth?.getFullYear() || toDate?.getFullYear();

            if (earliestYear && latestYear) {
              const yearsLength = latestYear - earliestYear;

              values = Array.from({ length: yearsLength + 1 }, (_, index) => {
                return {
                  values: (earliestYear + index).toString(),
                  label: (earliestYear + index).toString(),
                };
              });
            }
          }

          const captionContent = format(
            currentMonth,
            props.name === "months" ? "MMM" : "yyyy",
          );

          return (
            <Select
              value={props.value?.toString()}
              onValueChange={(value) => {
                if (props.name === "months") {
                  const newMonth = new Date(currentMonth);
                  newMonth.setMonth(parseInt(value));
                  goToMonth(newMonth);
                }

                if (props.name === "years") {
                  const newYear = new Date(currentMonth);
                  newYear.setFullYear(parseInt(value));
                  goToMonth(newYear);
                }
              }}
            >
              <SelectTrigger className="h-7 px-2 py-1 font-normal">
                {captionContent}
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {values.map((value) => (
                  <SelectItem key={value.values} value={value.values}>
                    {value.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        },
      }}
      {...props}
    />
  );
}

export { Calendar };
