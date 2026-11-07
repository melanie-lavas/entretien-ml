// Envoi des demandes du site vers la boîte courriel de M.L Excellence,
// via Web3Forms (service gratuit). La clé d'accès est publique par
// conception : elle permet uniquement d'envoyer des demandes à
// info.mlexcellance@gmail.com, l'adresse pour laquelle elle a été créée.
export const WEB3FORMS_ACCESS_KEY = "b66b7f8f-b8e6-40e7-a80c-8bcbd72b987f";

export async function sendLeadByEmail(
  fields: Record<string, string>,
): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: "Site mlentretien.com",
        ...fields,
      }),
    });
    const data = (await response
      .json()
      .catch(() => null)) as { success?: boolean } | null;
    return Boolean(response.ok && data?.success);
  } catch {
    return false;
  }
}
