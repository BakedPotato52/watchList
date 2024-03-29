// eslint-disable-next-line
import React from 'react'
import './feed.css'
import { CardContent, CardFooter, Card } from "../ui/Card"


//import { Link } from "react-router-dom";
import T1 from '../images/t1.png'
import T2 from '../images/t2.png'
import T3 from '../images/t3.png'

export default function Feed() {
    return (
        <div className="grid">
            <div className="content">
                <h1 className="title">Featured</h1>
                <div className="cards">
                    <Card>
                        <a className="link" href={<components />} >
                            <CardContent className="thumbnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T1}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">Vercel Ship Keynote: Introducing the frontend cloud</div>
                            <div className="views">70K views • 3 days ago</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <a className="link" href="https://youtu.be/fufw56-W0oE?si=ltEdpYgykpq7YI0n" >
                            <CardContent className="thubnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T2}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">The Future of Web3: Decentralized Applications</div>
                            <div className="views">12K views • 1 week ago</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <a className="link" href="https://youtu.be/fufw56-W0oE?si=ltEdpYgykpq7YI0n" >
                            <CardContent className="thubnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T3}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">Mastering the Jamstack: Best Practices for Performance</div>
                            <div className="views">25K views • 2 weeks ago</div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="cards">
                    <Card>
                        <a className="link" href={<components />} >
                            <CardContent className="thumbnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T1}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">Vercel Ship Keynote: Introducing the frontend cloud</div>
                            <div className="views">70K views • 3 days ago</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <a className="link" href="https://youtu.be/fufw56-W0oE?si=ltEdpYgykpq7YI0n" >
                            <CardContent className="thubnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T2}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">The Future of Web3: Decentralized Applications</div>
                            <div className="views">12K views • 1 week ago</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <a className="link" href="https://youtu.be/fufw56-W0oE?si=ltEdpYgykpq7YI0n" >
                            <CardContent className="thubnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T3}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">Mastering the Jamstack: Best Practices for Performance</div>
                            <div className="views">25K views • 2 weeks ago</div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="cards">
                    <Card>
                        <a className="link" href={<components />} >
                            <CardContent className="thumbnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T1}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">Vercel Ship Keynote: Introducing the frontend cloud</div>
                            <div className="views">70K views • 3 days ago</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <a className="link" href="https://youtu.be/fufw56-W0oE?si=ltEdpYgykpq7YI0n" >
                            <CardContent className="thubnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T2}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">The Future of Web3: Decentralized Applications</div>
                            <div className="views">12K views • 1 week ago</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <a className="link" href="https://youtu.be/fufw56-W0oE?si=ltEdpYgykpq7YI0n" >
                            <CardContent className="thubnail">
                                <img
                                    alt="Thumbnail"
                                    className="vedio"
                                    height={225}
                                    src={T3}
                                    width={400}
                                />
                            </CardContent>
                        </a>
                        <CardFooter className="description">
                            <div className="vedio-title">Mastering the Jamstack: Best Practices for Performance</div>
                            <div className="views">25K views • 2 weeks ago</div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
