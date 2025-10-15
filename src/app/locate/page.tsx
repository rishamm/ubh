import React from 'react';

const stores = [
    {
        name: 'Harmony Town Flagship',
        address: '123 Kinship Ave, Harmony Town, USA 12345',
        hours: 'Mon - Sat: 10am - 8pm, Sun: 11am - 6pm',
        lat: 11.161336,
        lng: 75.945027
    },
    {
        name: 'Seaside Boutique',
        address: '456 Boardwalk Blvd, Summercrest, USA 67890',
        hours: 'Mon - Sun: 10am - 9pm',
        lat: 34.0522,
        lng: -118.2437
    },
    {
        name: 'Mountain View Outlet',
        address: '789 Peak Rd, Aspen Grove, USA 54321',
        hours: 'Mon - Fri: 11am - 7pm, Sat-Sun: 10am - 8pm',
        lat: 39.7392,
        lng: -104.9903
    }
]

const MapEmbed = ({ lat, lng }: { lat: number; lng: number }) => {
    // This pb value is a pre-generated view of the map centered on the desired coordinates.
    const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125419.43586821213!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1687161441234`;

    return (
        <div className="w-full h-full">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                loading="lazy"
                allowFullScreen
                src={embedUrl}
            ></iframe>
        </div>
    );
}


export default function LocatePage() {
    const primaryStore = stores[0];

  return (
    <div className="bg-background">
      <div className="md:px-6 px-0  py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Find Us</h1>
          <p className="mt-6 text-lg md:text-xl">
            Visit our stores to experience the quality and comfort of Threads of Kin in person.
          </p>
        </div>
        
        <div className="mt-16 h-[600px] rounded-none overflow-hidden shadow-lg bg-secondary">
            <MapEmbed lat={primaryStore.lat} lng={primaryStore.lng} />
        </div>
        <h1 className="mt-12 text-3xl font-bold tracking-tight text-left">
          Store Address
        </h1>
        <div className="mt-8 text-left text-lg  text-black">
           Neetanimal
        </div>
        <div className="mt-4 text-left text-lg  text-black">
           Malappuram
        </div>
         <div className="mt-4 text-left text-lg  text-black">
           673637
        </div>
      </div>
    </div>
  );
}
