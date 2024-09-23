import React, { useState, useEffect } from 'react';
import Title from './Title';
import TournamentCard from './TournamentCard';

const tournamentData = [
  {
    id: 1,
    name: 'Dubbo Premier Cricket League',
    type: 'ongoing',
    ballType: 'leather',
    category: 'open',
    date: '03-May-24 to 10-Sep-24',
    location: 'Sydney (Australia)',
    premium: true,
  },
  {
    id: 2,
    name: 'FCL PRESENTS Z A TOYS BCT SEASON 1',
    type: 'ongoing',
    ballType: 'tennis',
    category: 'school',
    date: '11-Aug-24 to 15-Sep-24',
    location: 'New Delhi',
    premium: true,
  },
  {
    id: 3,
    name: 'Delhi Premier League 2024',
    type: 'upcoming',
    ballType: 'leather',
    category: 'corporate',
    date: '01-Oct-24 to 15-Oct-24',
    location: 'New Delhi',
    premium: false,
  },
  {
    id: 4,
    name: 'Mumbai T20 Blast',
    type: 'upcoming',
    ballType: 'tennis',
    category: 'community',
    date: '20-Oct-24 to 25-Oct-24',
    location: 'Mumbai',
    premium: true,
  },
  {
    id: 5,
    name: 'Chennai Super Kings Corporate Cup',
    type: 'past',
    ballType: 'leather',
    category: 'corporate',
    date: '15-Jun-24 to 30-Jun-24',
    location: 'Chennai',
    premium: true,
  },
  {
    id: 6,
    name: 'Pune Open Cricket Championship',
    type: 'past',
    ballType: 'tennis',
    category: 'open',
    date: '01-Jul-24 to 15-Jul-24',
    location: 'Pune',
    premium: false,
  },
  {
    id: 7,
    name: 'Kolkata Youth Cricket League',
    type: 'ongoing',
    ballType: 'leather',
    category: 'series',
    date: '05-Aug-24 to 10-Sep-24',
    location: 'Kolkata',
    premium: true,
  },
  {
    id: 8,
    name: 'Goa Cricket Festival',
    type: 'upcoming',
    ballType: 'tennis',
    category: 'community',
    date: '10-Nov-24 to 20-Nov-24',
    location: 'Goa',
    premium: false,
  },
  {
    id: 9,
    name: 'Hyderabad Corporate Cricket Series',
    type: 'upcoming',
    ballType: 'leather',
    category: 'corporate',
    date: '05-Dec-24 to 15-Dec-24',
    location: 'Hyderabad',
    premium: true,
  },
  {
    id: 10,
    name: 'Bangalore School Cricket Cup',
    type: 'past',
    ballType: 'tennis',
    category: 'school',
    date: '01-Jul-24 to 10-Jul-24',
    location: 'Bangalore',
    premium: true,
  },
];


const TournamentPage = () => {
  const filterOptions = [
    {
      name: "Categories",
      types: ["All", "Open", "Corporate", "Community", "School", "Series"]
    },
    {
      name: "Status",
      types: ["All", "Ongoing", "Upcoming", "Past"]
    },
    {
      name: "Ball Type",
      types: ["All", "Leather"]
    }
  ];

  
  const [showFilter, setShowFilter] = useState(false)
  const [category, setCategory] = useState('All');
  const [ballType, setBallType] = useState('All');
  const [status, setStatus] = useState('All');
  const [filteredTournaments, setFilteredTournaments] = useState(tournamentData);

  // Function to apply filters when any option is selected
  const applyFilter = () => {
    let filtered = tournamentData;

    if (category !== 'All') {
      filtered = filtered.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }

    if (ballType !== 'All') {
      filtered = filtered.filter(t => t.ballType.toLowerCase() === ballType.toLowerCase());
    }

    if (status !== 'All') {
      filtered = filtered.filter(t => t.type.toLowerCase() === status.toLowerCase());
    }

    setFilteredTournaments(filtered);
  };

  // Apply filter whenever any filter value is changed
  useEffect(() => {
    applyFilter();
  }, [category, ballType, status]);

  return (
    <div className='flex flex-col px-5 sm:px-20 sm:flex-row gap-6 sm:gap-10 pt-10 border-t'>
      {/* Left side filter options */}
      <div className='filter min-w-60 '>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='uppercase my-2 text-2xl flex items-center gap-2 cursor-pointer'>
          Filters
          <img
            className={`h-5 w-[10px] sm:hidden transform ${showFilter ? 'rotate-90' : ''}`}
            src="https://img.icons8.com/ios-glyphs/50/forward.png"
            alt="forward"/>
        </p>

        {/* Filter options */}
        {filterOptions.map((item, index) => (
          <div
            key={index}
            className={`border sm:w-60 border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`} >

            <p className='mb-3 text-sm font-medium uppercase'>{item.name}</p>
            
            <div className='flex flex-col text-sm gap-2 font-light text-gray-700'>

              {item.types.map((type, typeIndex) => (
                <p key={typeIndex} className='flex mb-0 gap-2 text-base'>
                  <input
                    className='w-3'
                    type='radio'
                    name={item.name}
                    value={type}
                    checked={
                      item.name === "Categories" ? category === type :
                      item.name === "Status" ? status === type :
                      ballType === type
                    }
                    onChange={(e) => {
                      if (item.name === "Categories") setCategory(e.target.value);
                      if (item.name === "Status") setStatus(e.target.value);
                      if (item.name === "Ball Type") setBallType(e.target.value);
                    }}
                  />
                  {type}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right side tournament listing */}
      <div>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"Cricket"} text2={"tournaments"} />
        </div>

        {/* Tournament listing */}
        <div className='tournament-cards'>
          {filteredTournaments.length > 0 ? (
            filteredTournaments.map((item, index) => (
              <TournamentCard key={index} tournament={item} />
            ))
          ) : (
            <p className="text-lg font-semibold">No tournaments found !!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
