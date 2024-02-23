
import './Landing.css'

function Landing() {
  const characters = [
    {
      id: 1,
      name: 'Venus',
      hex: '#ff49a8',
      symbol: '♡'
    },
    {
      id: 2,
      name: 'Sun',
      hex: '#ffc924',
      symbol:'☀︎\u{0000FE0E}'
    },
    {
      id: 3,
      name: 'Uranus',
      hex: '#3cabff',
      symbol:'♅'
    },
    {
      id: 4,
      name: 'Saturn',
      hex: '#78b060',
      symbol:'♄'
    },
    {
      id: 5,
      name: 'Moon',
      hex: '#b69dff',
      symbol:'☽'
    },
    {
      id: 6,
      name: 'Pluto',
      hex: '#ff2828',
      symbol: '❖︎'
    },
    
  ]

  const events = [
    {
      id: 1,
      eName: 'Lunar Luminance',
      start: '04/03/2024',
      end: '11/03/2024',
      main: characters[4],
      asc: [characters[5], characters[3]]
    },
    {
      id: 2,
      eName: 'Spring Equinox Festival',
      start: '25/03/2024',
      end: '01/04/2024',
      main: characters[1],
      asc: [characters[0], characters[2]]
    },
    {
      id: 3,
      eName: 'Uranian Dawn',
      start: '1/04/2024',
      end: '8/04/2024',
      main: characters[2],
      asc: [characters[1], characters[5]]
    },
    {
      id: 4,
      eName: 'Floral Delight',
      start: '13/05/2024',
      end: '20/05/2024',
      main: characters[0],
      asc: [characters[3], characters[4]]
    },
    {
      id: 5,
      eName: 'Midnight Mascarade',
      start: '26/05/2024',
      end: '04/06/2024',
      main: characters[5],
      asc: [characters[2], characters[0]]
    },
    {
      id: 6,
      eName: 'Cosmic Carnival Chaos',
      start: '27/06/2024',
      end: '03/07/2024',
      main: characters[3],
      asc: [characters[4], characters[1]]
    },
  ];

  events;

  return (

    <>
    <ul>
 {
  events.map((x) => (
    <>


  <li key={x.id} style={{color: x.main.hex}}>
   {x.main.symbol}
   <div className="additional-info">
    <h2> ??? </h2>
    <h3> {x.main.name} • {x.asc[0].name} • {x.asc[1].name} </h3> 
    
    <p> {x.start} — {x.end} </p>
  </div>
  </li> 
  </>
 )
 
 
 )
 
 }
 </ul>
    </>

     )
}

export default Landing
