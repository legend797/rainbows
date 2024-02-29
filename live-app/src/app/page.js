'use server'
import Home from "./home/Home";
import { cookies } from 'next/headers'
 
export async function create (data) {

  const oneDay = 24 * 60 * 60 * 1000
  cookies().set({
    name: 'token',
    value: data.JWT,
    expires: Date.now() + oneDay,
    httpOnly: true,
    path: '/',
  })
  cookies().set({
    name: 'id',
    value: data.playbackId,
    expires: Date.now() + oneDay,
    httpOnly: true,
    path: '/',
  })
}

export const verifyTicket = async (ticket) => {

	const res = await fetch(`https://api.risrainbow.com/ticket?ticket=${ticket}`, {
		method: 'POST',
		headers: {
		},
	});
  if (res.status !== 200) {
    return false
  }
	const data = await res.json();
  await create(data)
	return true;
};

const checkCookie = async () => {
  if (cookies().get('token') && cookies().get('id')) {
    return true
  } 
  return false;
}

export default async function Main() {
  const isTicketVerified = await checkCookie()
  return (
  
      <Home verifyTicket={verifyTicket} isTicketVerified={isTicketVerified} />

  );
}