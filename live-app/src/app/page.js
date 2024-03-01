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
      'Cache-Control': 'no-cache, no-store, must-revalidate', // Prevent caching
      'Pragma': 'no-cache', // For legacy HTTP/1.0 servers
      'Expires': '0', // Proxies
		},
    cache: 'no-store',
	});
  console.log(res.status)
  if (res.status !== 200) {
    console.log('not valid')
    return false
  }
	const data = await res.json();
  console.log(data)
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