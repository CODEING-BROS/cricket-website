import React from 'react'

const TournamentCard = ({tournament}) => {
  
  return (
    <div key={tournament.id} className="border p-4 rounded-lg shadow-sm tournament-card">
        <div className="badge bg-blue-500 text-white px-2  rounded">
          {tournament.type.charAt(0).toUpperCase() + tournament.type.slice(1)}
        </div>
        {tournament.premium && (
          <div className="premium-badge bg-yellow-400 text-white px-2  rounded mt-2">
            Premium
          </div>
        )}
        <h3 className="text-lg font-semibold mt-4">{tournament.name}</h3>
        <p className="text-sm text-gray-600">{tournament.date}</p>
        <p className="text-sm text-gray-600">{tournament.location}</p>
    </div>
  )
}

export default TournamentCard
