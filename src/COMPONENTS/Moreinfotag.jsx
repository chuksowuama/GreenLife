import React, { useState } from "react";

const Moreinfotag = () => {
  const [Taginfo, setTaginfo] = useState("Description");

  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <h3 onClick={() => setTaginfo("Description")} className={`cursor-pointer ${Taginfo==="Description"?"border-b-2 border-black font-semibold cursor-pointer":"text-gray-500"}`}>Decription</h3>
        <h3 onClick={() => setTaginfo("Shipping")} className={`cursor-pointer ${Taginfo==="Shipping"?"border-b-2 border-black font-semibold cursor-pointer":"text-gray-500"}`} >Shipping</h3>
      </div>
      <hr className="hr" />
      {Taginfo === "Description" && (
        <div className="flex flex-col gap-4">
          <span>
            Power your passive speakers to give your home soundtrack a boost and
            The soundtrack to your life Maximize your amplifier with powerful
            Bose speakers with your home soundtrack a boost and The soundtrack
            to your life
          </span>

          <ul className="list-disc list-inside space-y-5">
            <li>
              The soundtrack to your life — Power your passive speakers and
              connect the Bose Music Amplifier over Wi-Fi so you can stream all
              your favorites, from playlists to podcasts, easily from your phone
            </li>
            <li>
              Making connections — For an optimal sound experience, pair with
              Bose in-ceiling or outdoor speakers. The custom EQ delivers clear,
              well-balanced sound.
            </li>
            <li>
              Amped-up streaming apps — Access the Bose Music app’s integrated
              music services and internet radio stations over Wi-Fi. Or connect
              to your phone with Bluetooth, Apple AirPlay 2, Spotify Connect, or
              Chromecast built-in.
            </li>
            <li>
              You get lifelike sound at almost all listening levels while vocals
              maintain clarity.
            </li>
            <li>
              Sounds good, right? — For an optimal sound experience, pair the
              Bose Music Amplifier with passive speakers from Bose, like the
              Bose Virtually Invisible 791 in-ceiling speakers and the Bose 251
              environmental speakers.
            </li>
          </ul>
        </div>
      )}
      {Taginfo === "Shipping" && (
        <div className="flex flex-col gap-4">
          <span>
            Power your passive speakers to give your home soundtrack a boost and
            The soundtrack to your life Maximize your amplifier with powerful
            Bose speakers with your home soundtrack a boost and The soundtrack
            to your life
          </span>

          <ul className="list-disc list-inside space-y-5">
            <li>Paste the label on a flat surface on the package</li>
            <li>Make sure that both 1D and 2D barcodes are clearly visible</li>
            <li>
              Ensure that the label is smooth and isn’t creased or wrinkled
            </li>
            <li>Check for any tears, dents, holes or scratches</li>
            <li>Pack your product tightly, with the right size packaging</li>
            <li>Ensure both barcodes are on a flat surface of the package</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Moreinfotag;
