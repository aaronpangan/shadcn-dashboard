"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import EmployeeTable from "./EmployeeTable";

interface EmployeeDialogProps {
  trigger?: ReactNode;
}

export function EmployeeDialog({ trigger }: EmployeeDialogProps) {
  return (
    <Dialog>
      {trigger}
      <DialogContent className="max-h-[80vh] min-h-[500px] overflow-y-auto">
        <DialogHeader className="mb-6">
          <DialogTitle>Employee List</DialogTitle>
        </DialogHeader>
        <EmployeeTable />
      </DialogContent>
    </Dialog>
  );
}

// Export a trigger component for convenience
export function EmployeeDialogTrigger() {
  return (
    <EmployeeDialog
      trigger={
        <DialogTrigger asChild>
          <Button size="sm" variant="outline">View</Button>
        </DialogTrigger>
      }
    />
  );
}
