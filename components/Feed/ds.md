/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vLkcV47pqhI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2">
      <header className="bg-gray-100 dark:bg-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center h-14 gap-4">
            <Link className="flex gap-2 font-semibold items-center" href="#">
              <YoutubeIcon className="w-8 h-8 text-red-500" />
              YouTube
            </Link>
            <nav className="flex-1">
              <ul className="flex items-center gap-4 text-sm font-medium">
                <li className="text-gray-900 dark:text-gray-100">
                  <Link href="#">Home</Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100">
                  <Link href="#">Trending</Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100">
                  <Link href="#">Subscriptions</Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100">
                  <Link href="#">Library</Link>
                </li>
              </ul>
            </nav>
            <form className="flex items-center gap-2">
              <Input className="rounded-full" placeholder="Search" type="search" />
              <Button className="h-8 w-8" type="submit" variant="outline">
                <SearchIcon className="w-4 h-4" />
              </Button>
            </form>
            <div className="flex items-center gap-4 ml-auto">
              <Button className="h-8 w-8" variant="outline">
                <VideoIcon className="w-4 h-4" />
                <span className="sr-only">Upload</span>
              </Button>
              <Button className="h-8 w-8" variant="outline">
                <LayoutGridIcon className="w-4 h-4" />
                <span className="sr-only">Apps</span>
              </Button>
              <Button className="h-8 w-8" variant="outline">
                <BellIcon className="w-4 h-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Avatar className="border" size="sm">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-gray-100 py-6 flex-1 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-10 px-4">
          <div className="grid gap-2">
            <div className="rounded-xl overflow-hidden">
              <span className="w-full aspect-video rounded-md bg-muted" />
            </div>
            <div className="py-2 grid gap-2">
              <h1 className="text-xl font-semibold line-clamp-2">
                Vercel Ship Keynote: Introducing the frontend cloud
              </h1>
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <img
                    alt="Thumbnail"
                    className="rounded-full object-cover aspect-square"
                    height={40}
                    src="/placeholder.svg"
                    width={40}
                  />
                  <div className="text-sm">
                    <div className="font-semibold">Vercel</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">70K subscribers</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <Button variant="outline">Subscribe</Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-sm dark:bg-gray-800">
              <p>
                Today, we're introducing the frontend cloud, where frontend developers build, test, and deploy
                high-quality web applications efficiently and quickly, all on Vercel.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <h2 className="font-semibold text-xl">110 Comments</h2>
            <div className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">@iamwillpursell</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">5 months ago</div>
                </div>
                <div>
                  I really love the ecosystem Vercel is creating. The way each component can be added and modified with
                  ease really makes these tools attractive.
                </div>
              </div>
            </div>
            <div className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">@HackSoft</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">2 months ago</div>
                </div>
                <div>
                  We are more than excited to leverage all the new stuff, building better products for our clients ✨
                </div>
              </div>
            </div>
            <div className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">@greed7513</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">6 days ago</div>
                </div>
                <div>does anyone know which monospace are they using when showing code?</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function VideoIcon(props) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}


function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

import { CardContent, CardFooter, Card } from "../ui/Card"
import { Link } from "react-router-dom";
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
                        <Link className="link" to="#" />
                        <CardContent className="thumbnail">
                            <img
                                alt="Thumbnail"
                                className="vedio"
                                height={225}
                                src={T1}
                                width={400}
                            />
                        </CardContent>
                        <CardFooter className="description">
                            <div className="vedio-title">Vercel Ship Keynote: Introducing the frontend cloud</div>
                            <div className="views">70K views • 3 days ago</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <Link className="link" to="#" />
                        <CardContent className="thubnail">
                            <img
                                alt="Thumbnail"
                                className="vedio"
                                height={225}
                                src={T2}
                                width={400}
                            />
                        </CardContent>
                        <CardFooter className="description">
                            <div className="vedio-title">The Future of Web3: Decentralized Applications</div>
                            <div className="views">12K views • 1 week ago</divThe issue you're facing is due to the incorrect usage of the 'Link' component from 'react-router-dom'. The 'The issue youLink'' component isre used facing is to navigate due between different to the routes within your incorrect application. usage of the ' It should be used with theLink' 'to component from' 'react prop instead- of therouter- 'hrefdom'.' prop. The '

HereLink''s component is used the corrected code to navigate between:

``` different routes withinjavascript
import { your application. CardContent, Card It shouldFoot be useder, with Card } the from " 'to../ui/' propCard instead of"
 theimport { 'href Link' prop. } from "react-

router-dom";Here'
imports the T1 from corrected '../ code:images/t

1.```javascriptpng'
import {
import T CardContent2 from '../,The issue you' CardFootimages/re facingt2 is due.png to the'
 incorrect usageimport T3er,The issue you of the from ' 'Link're Card }../images' component facing is from/t from ' "../ui3.png due to the incorrect/Card'

export default function"
 usage ofreact-router- the 'import { Feeddom'.Link'() { Link } The 'The issue you'
    component from from "Link' component is return (
re facing 'reactreact-The issue you is due to-routerrouter- used to        <div className=" navigate between different-domdom"; the incorrect're facing is duegrid">
 to the incorrect'. The
import usage of the routes within 'Link            <div T1 your application usage of the 'Link. It' component from '../ className="content' component 'Link should be used with is used toThe issue you're facing is due to the incorrect usage of the 'Link' component from 'react-router-dom'. The 'Link' component is used to navigate between different routes from 'react' component from">
images/                <h the ' navigate between 'react-routert1.1 className="to' prop-dom different routespng''. The 'title instead of the within-router-dom'. The">Featured</ your application. 'hrefLink' 'Link'
import component is usedh1>' prop. It should component is used to be used

Here
                to navigate with <div className=" between different routes navigate between's the correctedcards">
 within your application code:

 the 'to                    <. It should```javascript
Card>
' prop instead be used withimport { CardContent                        < the 'to of theLink className="link 'href'' prop, CardFoot within your application. It should be used with the 'to' prop instead of the 'href' prop.
 instead of the" to="#er, Card prop.
Here's 'href' prop" />
                

Here } from " the corrected code T2 from '../images/t2.png'
import T3 from '../images/t../ui/'s        <Card.

 theCard"
:
Content className="thHere'simport { Link
```javascriptumbnail">
 the corrected code } from "                            <
import:
 corrected code:react-router-
```javascript different routes within your application. It should be used with the 'to' prop instead of the 'href' prop.

Here's the corrected code:
 { CardContentimg
                
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vdFaszJeAK0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Button, Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid grid-rows-[auto 1fr] w-full min-h-screen gap-4">
      <header className="p-4">
        <div className="container flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <PlayCircleIcon className="w-8 h-8" />
            <span className="text-lg font-bold">shadcn</span>
          </Link>
          <div className="w-full max-w-lg rounded-lg border border-gray-300 bg-white flex items-center gap-2 p-2">
            <SearchIcon className="h-4 w-4 text-gray-500" />
            <Input className="flex-1 w-0" placeholder="Search" type="search" />
          </div>
          <div>
            <div className="rounded-full overflow-hidden flex items-center justify-center w-10 h-10">
              <Avatar className="w-8 h-8">A</Avatar>
            </div>
            <div className="mt-2 w-48 rounded-lg border shadow-lg">
              <div>
                <UserIcon className="w-4 h-4 mr-2" />
                Profile
              </div>
              <div>
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </div>
              <div />
              <div>
                <LogOutIcon className="w-4 h-4 mr-2" />
                Logout
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="p-4 flex flex-col gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">How to make the perfect pancake</h3>
                <p className="text-sm text-gray-500">5:20</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">Cooking with Jamie</span>
                  <span className="text-xs text-gray-500">2.3M subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">The art of coffee making</h3>
                <p className="text-sm text-gray-500">8:45</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">Coffee Lovers</span>
                  <span className="text-xs text-gray-500">1.2M subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">Hiking the Pacific Crest Trail</h3>
                <p className="text-sm text-gray-500">12:10</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">Adventure Seeker</span>
                  <span className="text-xs text-gray-500">750K subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">The science of baking bread</h3>
                <p className="text-sm text-gray-500">6:30</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">Kitchen Chemist</span>
                  <span className="text-xs text-gray-500">1.5M subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">The art of watercolor painting</h3>
                <p className="text-sm text-gray-500">9:15</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">Artistic Inspiration</span>
                  <span className="text-xs text-gray-500">920K subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">The history of ancient civilizations</h3>
                <p className="text-sm text-gray-500">7:20</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">History Uncovered</span>
                  <span className="text-xs text-gray-500">1.1M subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">The world of cryptocurrency</h3>
                <p className="text-sm text-gray-500">11:50</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">Crypto Insights</span>
                  <span className="text-xs text-gray-500">820K subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border overflow-hidden aspect-[16/9]">
            <Link className="absolute inset-0" href="#">
              <img
                alt="Video thumbnail"
                height="225"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <span className="sr-only">Watch</span>
            </Link>
            <div className="p-4 flex flex-col h-full gap-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-none truncate">The zen of gardening</h3>
                <p className="text-sm text-gray-500">4:40</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <img
                    alt="Avatar"
                    height="24"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                </Avatar>
                <div className="flex flex-col leading-tight text-sm">
                  <span className="font-medium">Green Thumb</span>
                  <span className="text-xs text-gray-500">1.8M subscribers</span>
                </div>
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gap-2 w-full">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to videos
          </div>
          <div className="p-0">
            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="rounded-lg border aspect-[16/9] overflow-hidden">
                <div />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <img
                      alt="Avatar"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </Avatar>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold leading-none">How to make the perfect pancake</h3>
                    <Button className="rounded-full" size="sm" variant="outline">
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-start gap-4">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-gray-500 leading-none">2.3M subscribers</p>
                    <p className="text-sm text-gray-500 leading-none">1.2K views · 2 hours ago</p>
                  </div>
                  <div className="flex justify-end items-center gap-2">
                    <Button className="rounded-full" size="sm" variant="outline">
                      <ThumbsUpIcon className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button className="rounded-full" size="sm" variant="outline">
                      <ThumbsDownIcon className="w-4 h-4 mr-2" />
                      Dislike
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="rounded-full">
                  <PlayIcon className="w-4 h-4 mr-2 -translate-y-0.5" />
                  Play video
                </Button>
                <div className="border-t pt-4 grid gap-2">
                  <div className="flex items-center gap-4 py-4">
                    <Avatar className="w-10 h-10">
                      <img
                        alt="Avatar"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                    </Avatar>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Video Viewer</span>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-sm">This was a great video! I really enjoyed it.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 py-4">
                    <Avatar className="w-10 h-10">
                      <img
                        alt="Avatar"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                    </Avatar>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Cooking with Jamie</span>
                        <span className="text-sm text-gray-500">1 hour ago</span>
                      </div>
                      <p className="text-sm">
                        Thanks for watching! We hope you subscribe and join our cooking community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function PlayCircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  )
}


function PlayIcon(props) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
