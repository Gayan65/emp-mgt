"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { useState } from "react";
import { getEmployees } from "@/actions/employee.action";
import { useRouter } from "next/navigation";

type Employee = Awaited<ReturnType<typeof getEmployees>>;

interface EmployeeTableProps {
    employees: Employee;
}

export function EmployeesTable({ employees }: EmployeeTableProps) {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    //filter employees based on the filter
    const filteredEmployees = employees?.userEmployees?.filter(
        (employee) =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === "" || employee.position === selectedCategory)
    );
    return (
        <div className="w-full">
            <div className="flex items-center gap-2 py-4">
                <div className="relative max-w--sm w-full">
                    <Input
                        placeholder="Filter employees"
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(employees.target.value)}
                    />
                    <Search className="absolute h-4 left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <Combobox
                    value={selectedCategory}
                    onChange={(val) => setSelectedCategory(val)}
                />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Employee Id</TableHead>
                        <TableHead>Employee Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredEmployees?.map((employee) => {
                        const slugfieldName = employee.name
                            .toLowerCase()
                            .replace(/\s+/g, "-");
                        const slug = `${employee.id}--${slugfieldName}`;
                        const employeeURL = `/employees/${slug}`;

                        return (
                            <TableRow
                                key={employee.id}
                                onClick={() => router.push(employeeURL)}
                            >
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.position}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end space-x-4">
                                        <h1>Edit button</h1>
                                        <h1>Delete button</h1>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
