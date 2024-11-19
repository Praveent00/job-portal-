import { Popover, PopoverContent } from "@radix-ui/react-popover";
import React from "react";
import { PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className="flex items-center justify-between h-16 mx-auto max-w-7xl">
                <div>
                    <h1 className="text-2xl font-bold">Job<span className="text-[#f83002]">Portal</span></h1>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex items-center gap-5 font-medium ">
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className="">
                                <div className="flex gap-2 space-y-2 ">
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>

                                    <div>
                                        <h4 className="font-medium ">Praveen Tailor</h4>
                                        <p className="text-sm text-muted-foreground">from nimbahera</p>
                                    </div>
                                    </div>
                                <div className="flex flex-col my-2 text-gray-600">
                                    <div className="flex items-center gap-2 text-gray-500 cursor-pointer w-fit ">
<User2/>
                                        <button variant="Link"> view profile</button>
                                    </div>
                                    <div className="flex gap-2 text-gray-500 cursor-pointer w-fit">
                                        <LogOut/>
                                        <button variant="Link"> logout</button>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )

}
export default Navbar