import { createClient } from "@supabase/supabase-js";
import HVAC from "@/components/templates/HVAC";
import Plumber from "@/components/templates/Plumber";
import Electrician from "@/components/templates/Electrician";
import Roofer from "@/components/templates/Roofer";

export default async function Page({ params }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase
    .from("contractors")
    .select("*");

  if (error) {
    return <div style={{ padding: 24 }}><h1>Error</h1><pre>{error.message}</pre></div>;
  }

  const contractor = data?.find(row => row.slug?.trim() === params.slug?.trim());

  if (!contractor) {
    return <div style={{ padding: 24 }}><h1>Not found</h1><p>No contractor found with slug: {params.slug}</p></div>;
  }

  const trade = contractor.trade?.toUpperCase().trim();

  if (trade === "HVAC") return <HVAC data={contractor} />;
  if (trade === "PLUMBER" || trade === "PLUMBING") return <Plumber data={contractor} />;
  if (trade === "ELECTRICIAN" || trade === "ELECTRICAL") return <Electrician data={contractor} />;
  if (trade === "ROOFER" || trade === "ROOFING") return <Roofer data={contractor} />;

  return (
    <div style={{ padding: 24 }}>
      <h1>{contractor.business_name}</h1>
      <p>Trade: {contractor.trade}</p>
      <p>Unknown template for trade: {contractor.trade}</p>
    </div>
  );
}
