"use client";

import { EmployeeDialogTrigger } from "./EmployeeDialog";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function EmployeeCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <Card className="hover:border-primary transition-all">
        <CardHeader>
          <CardTitle>Total Employees</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <div className="text-5xl">50</div>
          <EmployeeDialogTrigger />
        </CardContent>
      </Card>

      <Card className="hover:border-primary transition-all">
        <CardHeader>
          <CardTitle>Sick Leaves</CardTitle>
        </CardHeader>
        <CardContent className="text-center sm:text-left">
          <div className="text-5xl">4</div>
        </CardContent>
      </Card>

      <Card className="hover:border-primary transition-all">
        <CardHeader>
          <CardTitle>Pending Approvals </CardTitle>
        </CardHeader>
        <CardContent className="text-center sm:text-left">
          <div className="text-5xl">6</div>
        </CardContent>
      </Card>
    </div>
  );
}
