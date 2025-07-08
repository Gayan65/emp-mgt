import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HomeIcon, Users } from "lucide-react";
import ModeToggle from "./ModeToggle";

function NavBar() {
    return (
        <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16 justify-between">
                    {/*LOGO*/}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary font-mono tracking-wider"
                        >
                            EmpWin
                        </Link>
                    </div>

                    {/*NAVBAR COMPONENTS*/}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2"
                            asChild
                        >
                            <Link href="/employee">
                                <Users className="w-4 h-4" />
                                <span className="hidden lg:inline">
                                    Employee
                                </span>
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            className="flex items-center gap-2"
                            asChild
                        >
                            <Link href="/">
                                <HomeIcon className="w-4 h-4" />
                                <span className="hidden lg:inline">Home</span>
                            </Link>
                        </Button>

                        {/*MODE TOGGLE*/}
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
