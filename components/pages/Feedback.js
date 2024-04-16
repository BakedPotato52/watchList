// Feedback.js
import React from 'react';
import './pages.css'


import { CardTitle, CardDescription, CardHeader, CardFooter, CardContent, Card } from "../ui/Card"

export default function Component() {
    return (
        <Card className="Card">
            <CardHeader>
                <CardTitle className="title">We Value Your Feedback</CardTitle>
                <CardDescription>
                    Your feedback is essential for us to continue to provide you with the best possible experience
                </CardDescription>
            </CardHeader>
            <CardContent className="Rating">
                <div className="content">
                    <div className="head">Overall Rating</div>
                    <div className="label">
                        <label className="sronly" htmlFor="overall-experience-1">
                            1 star
                        </label>
                        <input className="sronly" id="overall-experience-1" name="overall-experience" type="radio" />
                        <StarIcon className="w-5 h-5 rounded-lg stroke-current peer-group-0/checked:~peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/peer-group:0/label/cursor-pointer" />
                        <label
                            className="absolute -top-[-1000px] right-[-1000px] pointer-events-none"
                            htmlFor="overall-experience-1"
                        >
                            1 star
                        </label>
                    </div>
                </div>
                <div className="content">
                    <div className="head">Overall Rating</div>
                    <div className="label">
                        <label className="sronly" htmlFor="overall-experience-2">
                            2 stars
                        </label>
                        <input className="sronly" id="overall-experience-2" name="overall-experience" type="radio" />
                    </div>
                </div>
            </CardContent>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="text-sm leading-none w-20">Overall Rating</div>
                    <div className="flex items-center space-x-2">
                        <label>
                            <div />
                            <span className="sr-only">1</span>
                        </label>
                        <label>
                            <div />
                            <span className="sr-only">2</span>
                        </label>
                        <label>
                            <div />
                            <span className="sr-only">3</span>
                        </label>
                        <label>
                            <div />
                            <span className="sr-only">4</span>
                        </label>
                        <label>
                            <div />
                            <span className="sr-only">5</span>
                        </label>
                    </div>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm leading-none" htmlFor="feedback">
                        Additional Comments
                    </label>
                    <textarea className="min-h-[100px]" id="feedback" placeholder="Enter your feedback" />
                </div>
            </CardContent>
            <CardFooter>
                <button className="ml-auto">Submit Feedback</button>
            </CardFooter>
        </Card>
    )
}

function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
