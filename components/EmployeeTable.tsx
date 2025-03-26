"use client";

import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

// Sample employee dataset
const employees = [
  {
    id: "EMP001",
    name: "John Smith",
    department: "Engineering",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    department: "Marketing",
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    department: "Finance",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    department: "Human Resources",
  },
  {
    id: "EMP005",
    name: "David Wilson",
    department: "Engineering",
  },
  {
    id: "EMP006",
    name: "Jennifer Miller",
    department: "Product",
  },
  {
    id: "EMP007",
    name: "Robert Taylor",
    department: "Customer Support",
  },
  {
    id: "EMP008",
    name: "Lisa Anderson",
    department: "Sales",
  },
  {
    id: "EMP009",
    name: "James Thomas",
    department: "Engineering",
  },
  {
    id: "EMP010",
    name: "Jessica Martinez",
    department: "Marketing",
  },
];

export default function EmployeeTable() {
  const [filteredData, setFilteredData] = useState(employees);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [search, setSearch] = useState("");

  const applyFilters = (searchTerm: string, department: string) => {
    return employees.filter((employee) => {
      const matchesSearch =
        searchTerm === "" ||
        employee.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        department === "all" ||
        employee.department.toLowerCase() === department.toLowerCase();

      return matchesSearch && matchesDepartment;
    });
  };

  const filterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value.toLowerCase();
    setSearch(newSearch);
    setFilteredData(applyFilters(newSearch, selectedDepartment));
  };

  const filterDepartments = (department: string) => {
    setSelectedDepartment(department);
    setFilteredData(applyFilters(search, department));
  };

  return (
    <div>
      <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
        <div className="relative sm:w-[45%]">
          <Search className="text-muted-foreground absolute top-2.5 right-2.5 h-4 w-4" />
          <Input
            onChange={filterSearch}
            className="pr-8"
            type="text"
            placeholder="Search Employee"
          />
        </div>

        <Select onValueChange={filterDepartments}>
          <SelectTrigger className="sm:w-[35%]">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Departments</SelectLabel>
              <SelectItem value="all">All Departments</SelectItem>{" "}
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="product">Product</SelectItem>
              <SelectItem value="support">Customer Support</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableCaption>Employee Directory</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Emp. Id</TableHead>
            <TableHead className="font-bold">Employee Name</TableHead>
            <TableHead className="font-bold">Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
