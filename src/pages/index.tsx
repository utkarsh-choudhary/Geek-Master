// src/pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FlightSearchForm from '../components/FlightSearchForm';
import PopularDestinations from '../components/PopularDestinations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TravoMile - Book Your Flights</title>
        <meta name="description" content="Book flights easily with TravoMile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main
        className="flex flex-col items-center justify-center bg-cover bg-center min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800')",
        }}
      >
        <FlightSearchForm />
      </main>

      {/* Popular Destinations Section */}
      <PopularDestinations />
    </div>
  );
}
