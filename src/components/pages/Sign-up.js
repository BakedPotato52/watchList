import { Button, PopoverContent, PopoverTrigger, Label } from '../ui/buttons_inputs_popover'
import Popover from 'react-bootstrap/Popover'
import React from 'react'


export default function Component() {

    return (
        <Popover>
            <PopoverTrigger as="div" className="inline-block">
                <Button className="mx-auto" size="sm" variant="outline">
                    Sign in
                </Button>
            </PopoverTrigger>
            <div className="w-72">
                <PopoverContent>
                    <div />
                    <div className="p-4 grid gap-4">
                        <h2 className="text-lg font-semibold">Sign in to your account</h2>
                        <form className="grid gap-4">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                <input className="w-full" id="email" placeholder="Email" type="email" />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <input className="w-full" id="password" placeholder="Password" type="password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <a
                                    className="text-sm underline"
                                    href="/"
                                    style={{
                                        lineHeight: "1.5",
                                    }}
                                >
                                    Forgot your password?
                                </a>
                                <Button type="submit">Sign in</Button>
                            </div>
                        </form>
                    </div>
                </PopoverContent>
            </div>
        </Popover>

    )
}

