import { useEffect, useState } from "react";
import { getGuest, getGuests } from "./API Data/guests";
import GuestList from "./Guests/GuestList";
import GuestDetails from "./Guests/GuestDetails";

export default function App() {
  const [guestId, setGuestId] = useState(null);
  return (
    <>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </>
  );
}
