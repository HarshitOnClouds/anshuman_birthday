
import { GlitchText, CountUp, TargetCursor, Galaxy, ModelViewer,ChromaGrid,Stack } from './components/index'

function App() {

  const items = [
  {
    image: "1.jpg",
    title: "Just A Chill Guy",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  }, 
  {
    image: "7.jpg",
    title: "Nonchalant, even on birthday",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "3.jpg",
    title: "Very Fit, Can Do 0.7 Pullups",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "6.jpg",
    title: "Pookie",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "2.jpg",
    title: "Hog rider(n#gga) from coc and cr",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "4.jpg",
    title: "Is The Aesthetic Baggy Curly Hair 6Ft",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "5.jpg",
    title: "Has BEST Friends",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  
 
  {
    image: "8.jpg",
    title: "Smelly Chaddi Gang member",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "9.jpg",
    title: "Bar mai ladki dekhke sapne sajane wala",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "10.jpg",
    title: "Dil Ka Saaf,Nek,Wholesome,Gawar Insaan",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "15.jpg",
    title: "PUBG GOD (Sharpshooter)",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  }, 
  {
    image: "14.jpg",
    title: "At Heart a pookie sensitive mf who was made strong by this curel world",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "13.jpg",
    title: "Nepaliyo Ki Tarah Hasne Wala",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    image: "12.jpg",
    title: "Chopped,Below 6Ft,Postive Canthal Tilt,Recessed Jaw, 2.7/10 On a Good Day,Unfunny,Mid Creature",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
 
   {
    image: "11.jpg",
    title: "Mera Bestie Vestie",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },

];

const images = [
  { id: 7, img: "22.png" },
  { id: 6, img: "21.png" },
  { id: 5, img: "20.png" },
  { id: 4, img: "19.png" },
  { id: 3, img: "18.png" },
  { id: 2, img: "17.png" },
  { id: 1, img: "16.png" },
  ];
  return (
    <>
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.0}
        glowIntensity={1.5}
        saturation={1.0}
        hueShift={200}
        transparent={false}
      />

      <div className='text-white relative w-full flex flex-col min-h-screen z-10'>
        <div>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor={true}
          />
          <div className='flex justify-around items-center px-10'>
            <CountUp
              from={300}
              to={19}
              separator=","
              direction="up"
              duration={3}
              className="count-up-text text-5xl cursor-target font-serif"
            />
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={false}
              className='custom-class cursor-target'
            >
              HAPPY BIRTHDAY MASAMURE/ANSHUMAN
            </GlitchText>


            <CountUp
              from={-262}
              to={19}
              separator=","
              direction="up"
              duration={3}
              className="count-up-text text-5xl cursor-target font-serif"
            />
          </div>
        </div>

        <div className='mt-30 flex' >
          <div className='cursor-target'>
            <ModelViewer
              url="bike.glb"
              width={800}
              height={600}
            />
          </div>
          <div className=' text-5xl gap-y-5 flex flex-col justify-center items-center' >
            <p className='cursor-target'>
              *zoom out of the left thingy cause it comes zoomed in*
            </p>
            <p className='cursor-target'>
              what i would gift you if i had money
            </p>
          </div>
        </div>

        <div className='mt-30'>
          <div className='mb-30 text-center text-9xl cursor-target'>
            WHO IS ANSHUMAN
          </div>
          <ChromaGrid 
          className='cursor-target'
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

          <div className='mt-60 mx-auto flex flex-col items-center'>
            <p className='text-5xl font-serif cursor-target mb-20'> open the card by swiping</p>
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 300, height: 300 }}
              cardsData={images}
            />
          </div>

          <div className='my-60 text-center text-5xl'>
            Finally Happy Budday Yaar, I appreciate you ok, baaki sax sux krte reh and moj kar
          </div>

      </div>
    </>
  )
}

export default App
