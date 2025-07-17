"use server";

import { prisma } from "@/lib/prisma";
import { getUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function getEmployees(searchTerm?: string) {
    try {
        const currentUserId = await getUserId();

        const whereClause: any = {
            userId: currentUserId,
        };

        if (searchTerm) {
            whereClause.name = {
                contains: searchTerm,
                mode: "insensitive",
            };
        }

        const userEmployees = await prisma.employees.findMany({
            where: whereClause,
        });

        // revalidatePath("/");
        return {
            success: true,
            userEmployees,
        };
    } catch (error) {
        console.log("Error in getEmployees ", error);
        throw new Error("Failed to fetch employees");
    }
}
