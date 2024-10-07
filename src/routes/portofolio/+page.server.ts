import type { PageServerLoad } from "./$types";
import { backendUrl } from "$env/static/private";

type portofolioData = {
  title: string,
  description: string[],
  githubLink: string,
}

export const load: PageServerLoad = async ({ fetch }): Promise<{ portofolios: portofolioData[] }> => {
  const res = await fetch(`${backendUrl}/api/v1/porto`)
  const portofolios: portofolioData[] = await res.json()

  return { portofolios }
}
