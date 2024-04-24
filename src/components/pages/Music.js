import { Link } from "react-router-dom"
import music1 from '../images/music1.png'
import music2 from '../images/music2.png'
import music3 from '../images/music3.png'
import music4 from '../images/music4.png'
import music5 from '../images/music5.png'
import artist1 from '../images/artist1.png'
import artist2 from '../images/artist2.png'
import artist3 from '../images/artist3.png'
import artist4 from '../images/artist4.png'


export default function Music() {
    return (
        <div className="flex flex-col bg-gradient-to-br from-[#f16f66] to-[#00b0ff] overflow-hidden">
            <main className="flex-1 relative">
                <section className="w-full h-[80dvh] flex items-center justify-center">
                    <div className=" px-4 md:px-6 relative z-10">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="relative group">
                                <img
                                    alt="Music Discovery"
                                    className="mx-auto bg-blend-color aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-video z-[-1001]"
                                    height="500"
                                    src={music1}
                                    width="800"

                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#6be3f3]/60 to-[#f13e65]/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="grid gap-4">
                                        <button className="text-white" variant="outline">
                                            Upbeat Playlists
                                        </button>
                                        <button className="text-white" variant="outline">
                                            Soulful Tunes
                                        </button>
                                        <button className="text-white" variant="outline">
                                            Acoustic Vibes
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl xl:text-7xl/none">
                                        Discover the Joy of Music
                                    </h1>
                                    <p className="max-w-[600px] text-white/80 md:text-xl dark:text-white/60">
                                        Explore a world of diverse musical genres, from upbeat pop to soulful blues, and find your next
                                        favorite artist.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#00b0ff] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                                        href="#"
                                    >
                                        Explore Genres
                                    </Link>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                                        href="#"
                                    >
                                        Listen Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full animate-notes">
                            <div className="absolute top-[20%] left-[10%] w-[50px] h-[50px] bg-[#ff5b4f] rounded-full opacity-50 animate-pulse" />
                            <div className="absolute top-[50%] left-[30%] w-[30px] h-[30px] bg-[#00b0ff] rounded-full opacity-50 animate-pulse" />
                            <div className="absolute top-[70%] left-[60%] w-[40px] h-[40px] bg-[#ff6b6b] rounded-full opacity-50 animate-pulse" />
                            <div className="absolute top-[30%] left-[80%] w-[35px] h-[35px] bg-[#9b59b6] rounded-full opacity-50 animate-pulse" />
                            <div className="absolute top-[60%] left-[90%] w-[45px] h-[45px] bg-[#2ecc71] rounded-full opacity-50 animate-pulse" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full animate-waves">
                            <div className="absolute top-[10%] left-[5%] w-[80%] h-[80%] bg-gradient-to-r from-[#ffd54f]/50 to-[#00b0ff]/50 rounded-full opacity-50 animate-wave" />
                            <div className="absolute top-[30%] left-[25%] w-[60%] h-[60%] bg-gradient-to-r from-[#ff6b6b]/50 to-[#9b59b6]/50 rounded-full opacity-50 animate-wave" />
                            <div className="absolute top-[50%] left-[45%] w-[40%] h-[40%] bg-gradient-to-r from-[#2ecc71]/50 to-[#f1c40f]/50 rounded-full opacity-50 animate-wave" />
                        </div>
                    </div>
                </section>
                <section className="py-16 px-8 md:py-3 md:px-12">
                    <div className="mx-auto max-w-4xl text-center ">
                        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl z-[100]">Moods & Genres</h2>
                        <p className="mt-4 text-gray-700 sm:text-xl">
                            Explore a diverse range of musical styles and find your new favorite artists.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Pop Music"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={300}
                                src={music2}

                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">New Hindi Songs</h3>
                                <p className="mt-2 text-gray-300">Upbeat and energetic</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Rock Music"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={300}
                                src={music3}

                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">Party Songs</h3>
                                <p className="mt-2 text-gray-300">Powerful and rebellious</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Hip-Hop Music"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={300}
                                src={music4}

                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">90s Songs</h3>
                                <p className="mt-2 text-gray-300">Rhythmic and innovative</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Folk Music"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={300}
                                src={music5}

                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">Lofi</h3>
                                <p className="mt-2 text-gray-300">Authentic and soulful</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 px-8 md:py-24 md:px-12 bg-gradient-to-br from-purple-300 to-blue-300">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Featured Artists</h2>
                        <p className="mt-4 text-gray-700 sm:text-xl">Discover talented musicians across a variety of genres.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Arijit Singh"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={400}
                                src={artist1}

                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">Arijit All The Way</h3>

                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="KK"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={400}
                                src={artist2}

                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">KK</h3>

                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Artist 3"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={400}
                                src={artist3}
                                style={{
                                    aspectRatio: "400/400",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">Artist 3</h3>
                                <p className="mt-2 text-gray-300">Genre: Hip-Hop</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                alt="Artist 4"
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                height={400}
                                src={artist4}
                                style={{
                                    aspectRatio: "400/400",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 p-6 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-2xl font-bold text-white">Artist 4</h3>
                                <p className="mt-2 text-gray-300">Genre: Folk</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
