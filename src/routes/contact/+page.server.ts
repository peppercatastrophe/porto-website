import type { PageServerLoad } from "./$types";
import { backendUrl } from "$env/static/private";

type contactData = {
  emailAddress: string,
  githubLink: string,
  linkedinLink: string,
}

export const load: PageServerLoad = async ({ fetch }): Promise<contactData> => {
  const res = await fetch(`${backendUrl}/api/v1/contact`)
  const contact = await res.json()

  return contact
}
