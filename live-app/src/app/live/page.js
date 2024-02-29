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
 
export default async function LivePage() {
	const {token, id} = await getCookie();

	return <Live token={token} id={id}/>;
}
