"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DepartmentCards from "../../components/DepartmentCards";
import EmployeeCards from "../../components/EmployeeCards";

export default function DashboardPage() {
  return (
    <div className="">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <Tabs defaultValue="employee">
        <TabsList className="grid grid-cols-2 sm:w-[400px]">
          <TabsTrigger value="employee">Employee</TabsTrigger>
          <TabsTrigger value="department">Department</TabsTrigger>
        </TabsList>
        <TabsContent value="employee">
          <EmployeeCards />
        </TabsContent>

        <TabsContent value="department">
          <DepartmentCards />
        </TabsContent>
      </Tabs>
    </div>
  );
}
