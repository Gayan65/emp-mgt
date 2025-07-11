import { EmployeesTable } from "@/components/EmployeesTable";
import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";
import React from "react";

async function page() {
    const user = await stackServerApp.getUser();
    const app = stackServerApp.urls;
    return (
        <>
            {user ? (
                <EmployeesTable />
            ) : (
                <div className="flex justify-center mt-20 items-center">
                    <SignUp />
                </div>
            )}
        </>
    );
}

export default page;
