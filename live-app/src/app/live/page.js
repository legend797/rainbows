'use server';
import { cookies } from "next/headers";
import Live from "./Live";

const getCookie = async () => {
	const cookie = cookies()
	const token = cookie.get('token').value
	const id = cookie.get('id').value
	if ( token && id) {
	  return {token, id}
	} 
	return {token:null, id:null}
  }

  export async function removeCookie() {
	const threeDay = 24 * 60 * 60 * 1000 * 3
	cookies().set({
	  name: 'token',
	  value: '',
	  expires: Date.now() - threeDay,
	  httpOnly: true,
	  path: '/',
	})
	cookies().set({
	  name: 'id',
	  value: '',
	  expires: Date.now() - threeDay,
	  httpOnly: true,
	  path: '/',
	})
  }
 
export default async function LivePage() {
	const {token, id} = await getCookie();

	return <Live token={token} id={id} removeCookie={removeCookie} />;
}
