import EmployeesTable from "@/components/EmployeesTable";
import { stackServerApp } from "@/stack";
import { SignIn } from "@stackframe/stack";
import React from "react";

async function page() {
    const user = await stackServerApp.getUser();
    const app = stackServerApp.urls;
    return <div>{user ? <EmployeesTable /> : <SignIn />}</div>;
}

export default page;
