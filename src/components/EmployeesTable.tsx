import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const employees = [
    {
        id: 111,
        name: "Gayan",
        position: "BA",
    },
];

export function EmployeesTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Employee Id</TableHead>
                    <TableHead>Employee Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {employees.map((employee) => (
                    <TableRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell className="text-right">
                            <div className="flex justify-end space-x-4">
                                <h1>Edit button</h1>
                                <h1>Delete button</h1>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
