"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Department distribution data derived from employees in EmployeeTable.tsx
const departmentData = [
  { department: "Engineering", count: 3 },
  { department: "Marketing", count: 2 },
  { department: "Finance", count: 1 },
  { department: "Human Resources", count: 1 },
  { department: "Product", count: 1 },
  { department: "Customer Support", count: 1 },
  { department: "Sales", count: 1 },
];

const chartConfig = {
  count: {
    label: "Employees",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function DepartmentDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Distribution</CardTitle>
        <CardDescription>Employee count by department</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart 
            accessibilityLayer 
            data={departmentData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="department"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--primary)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Engineering department has the most employees{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Displaying employee distribution across 7 departments
        </div>
      </CardFooter>
    </Card>
  );
}
