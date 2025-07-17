import { getEmployees } from "@/actions/employee.action";
import { EmployeesTable } from "@/components/EmployeesTable";
import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";
import React from "react";

async function page() {
    const user = await stackServerApp.getUser();
    //const app = stackServerApp.urls;

    const employees = await getEmployees();
    return (
        <>
            {user ? (
                <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
                    <div className="lg:col-span-full">
                        <EmployeesTable employees={employees} />
                    </div>
                </div>
            ) : (
                <div className="flex justify-center mt-20 items-center">
                    <SignUp />
                </div>
            )}
        </>
    );
}

export default page;
