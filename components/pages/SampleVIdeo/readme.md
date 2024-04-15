/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hxofwZUyVGb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-[#202020] p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-white" />
          <YoutubeIcon className="text-red-600" />
        </div>
        <div className="flex-grow mx-4">
          <Input placeholder="Search" />
        </div>
        <div className="flex items-center space-x-4">
          <CameraIcon className="text-white" />
          <LayoutGridIcon className="text-white" />
          <BellIcon className="text-white" />
          <Avatar>
            <AvatarImage alt="user avatar" src="/placeholder.svg?height=32&width=32" />
          </Avatar>
        </div>
      </header>
      <main className="flex">
        <div className="w-[70%] p-8">
          <div className="relative">
            <img
              alt="video"
              className="w-full"
              height="480"
              src="/placeholder.svg"
              style={{
                aspectRatio: "854/480",
                objectFit: "cover",
              }}
              width="854"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
              <div className="flex space-x-4">
                <Button className="bg-transparent">
                  <PlayIcon className="text-white" />
                </Button>
                <div className="text-white">0:01 / 18:25</div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-transparent">
                  <SettingsIcon className="text-white" />
                </Button>
                <Button className="bg-transparent">
                  <MaximizeIcon className="text-white" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-bold">Modal in ReactJS - Code a React Modal Tutorial using Hooks</h1>
            <div className="flex justify-between items-center text-sm">
              <div>
                <span>199K views • 2 years ago</span>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-transparent text-white">4.2K</Button>
                <Button className="bg-transparent text-white">Share</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] p-8">
          <div className="space-y-4">
            <Card className="bg-[#202020]">
              <CardHeader>
                <CardTitle>React Popup Modal</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="React Popup Modal"
                  height="90"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "160/90",
                    objectFit: "cover",
                  }}
                  width="160"
                />
              </CardContent>
              <CardFooter>
                <div className="text-sm">Elisha Garg • 7.1K views • 4 months ago</div>
              </CardFooter>
            </Card>
            <Card className="bg-[#202020]">
              <CardHeader>
                <CardTitle>Build A Popup With Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Build A Popup With Portal"
                  height="90"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "160/90",
                    objectFit: "cover",
                  }}
                  width="160"
                />
              </CardContent>
              <CardFooter>
                <div className="text-sm">Web Dev Simplified • 225K views • 3 years ago</div>
              </CardFooter>
            </Card>
            <Card className="bg-[#202020]">
              <CardHeader>
                <CardTitle>Build a Modal Component purely in ReactJS and...</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Build a Modal Component"
                  height="90"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "160/90",
                    objectFit: "cover",
                  }}
                  width="160"
                />
              </CardContent>
              <CardFooter>
                <div className="text-sm">Your Code Lab • 14K views • 1 year ago</div>
              </CardFooter>
            </Card>
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


function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
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


function MaximizeIcon(props) {
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tLZqcGJek1S
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-[#202020] p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-white" />
          <YoutubeIcon className="text-red-600 w-28 h-10" />
        </div>
        <div className="flex items-center space-x-4">
          <input className="p-2 rounded bg-[#121212] text-white" placeholder="Search" type="text" />
          <SearchIcon className="text-white" />
        </div>
        <div className="flex items-center space-x-4">
          <CameraIcon className="text-white" />
          <LayoutGridIcon className="text-white" />
          <BellIcon className="text-white" />
          <Avatar>
            <AvatarImage alt="User Avatar" src="/placeholder.svg?height=32&width=32" />
          </Avatar>
        </div>
      </header>
      <div className="flex">
        <div className="w-3/4 p-8">
          <span className="w-full rounded-md bg-muted" />
          <div className="mt-4">
            <h1 className="text-xl font-bold">Modal in ReactJS - Code a React Modal Tutorial using Hooks</h1>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-sm">199K views • 2 years ago</p>
                <p className="text-sm">PedroTech React Tutorials</p>
              </div>
              <div className="flex space-x-2">
                <Button className="bg-transparent text-white">Subscribe</Button>
                <ThumbsUpIcon className="text-white" />
                <ShareIcon className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-[#181818] p-4">
          <h2 className="text-lg font-bold mb-4">Up next</h2>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <img
                alt="Video thumbnail"
                className="w-32"
                height="90"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/90",
                  objectFit: "cover",
                }}
                width="160"
              />
              <div>
                <p className="text-sm font-medium">How to make Popup Modal in React JS | React Hooks</p>
                <p className="text-xs">Elisha Garg • 7.1K views • 4 months ago</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <img
                alt="Video thumbnail"
                className="w-32"
                height="90"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/90",
                  objectFit: "cover",
                }}
                width="160"
              />
              <div>
                <p className="text-sm font-medium">Learn React Portal In 12 Minutes By Building A Modal</p>
                <p className="text-xs">Web Dev Simplified • 225K views • 3 years ago</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <img
                alt="Video thumbnail"
                className="w-32"
                height="90"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/90",
                  objectFit: "cover",
                }}
                width="160"
              />
              <div>
                <p className="text-sm font-medium">Build a Modal Component purely in ReactJS and...</p>
                <p className="text-xs">Your Code Lab • 14K views • 1 year ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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


function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
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


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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


function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
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