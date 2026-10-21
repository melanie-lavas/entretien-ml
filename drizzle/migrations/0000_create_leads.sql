CREATE TABLE public.leads (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 nom text NOT NULL CHECK (char_length(btrim(nom)) BETWEEN 2 AND 120),
 telephone text NOT NULL CHECK (char_length(telephone) <= 30 AND telephone ~ '^[0-9+().[:space:]-]+$' AND char_length(regexp_replace(telephone, '[^0-9]', '', 'g')) BETWEEN 10 AND 15),
 courriel text CHECK (courriel IS NULL OR (char_length(courriel) <= 150 AND courriel ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$')),
 secteur text NOT NULL CHECK (secteur IN ('Saint-Grégoire', 'Gentilly', 'Bécancour (autre secteur)', 'Nicolet', 'Trois-Rivières', 'Shawinigan', 'Cap-de-la-Madeleine', 'Grand-Mère', 'Autre secteur')),
 type_besoin text NOT NULL CHECK (type_besoin IN ('Entretien régulier résidentiel', 'Grand ménage', 'Ménage avant vente / fin de bail', 'Commercial', 'Autre')),
 frequence text NOT NULL CHECK (frequence IN ('Chaque semaine', 'Aux 2 semaines', 'Chaque mois', 'Une seule fois', 'À déterminer')),
 message text CHECK (message IS NULL OR char_length(message) <= 1000),
 source_page text NOT NULL CHECK (source_page IN ('/', '/soumission'))
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit leads" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);