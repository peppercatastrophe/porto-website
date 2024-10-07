import type { PageServerLoad } from "./$types";
import { backendUrl } from "$env/static/private";

type homeData = {
  greeting: string,
  paragraphs: string[]
}

export const load: PageServerLoad = async ({ fetch }): Promise<homeData> => {
  const res = await fetch(`${backendUrl}/api/v1/home`)
  const homeData = await res.json()

  return homeData
}
