"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function DepartmentCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card className="hover:border-primary transition-all">
        <CardHeader>
          <CardTitle>Total Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl">50</div>
        </CardContent>
      </Card>
      <Card className="hover:border-primary transition-all">
        <CardHeader>
          <CardTitle>Total Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl">50</div>
        </CardContent>
      </Card>
    </div>
  );
}
