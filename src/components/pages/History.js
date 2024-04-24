import React from 'react';
import { FiMoreVertical } from "react-icons/fi";


const History = ({ searchHistory }) => {


    return (
        <div>
            <div className="max-w-4xl mx-auto p-8 bg-gray-100">
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-2">
                        <input className="flex-1 rounded-full p-6 h-8 w-auto border-black" placeholder="search history" />
                        <button variant="outline" className='bg-cyan-400 h-6 w-8 hover:bg-cyan-700 '>By date</button>
                        <button variant="outline" className='bg-cyan-400 h-6'>By group</button>
                    </div>
                    <h2 className="text-xl font-semibold">Today - Wednesday, April 17, 2024</h2>
                    <div className="space-y-2">
                        {/* Map through searchHistory and render each search query */}
                        {searchHistory.map((query, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input type='checkbox' id={`history-${index}`} />
                                <label className="flex-1" htmlFor={`history-${index}`}>
                                    {query}
                                </label>
                                <FiMoreVertical className="text-gray-400" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
