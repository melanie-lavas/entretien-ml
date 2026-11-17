DROP POLICY IF EXISTS "Public can submit leads" ON public.leads;
CREATE POLICY "Public can submit valid leads" ON public.leads
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(nom)) BETWEEN 2 AND 120
  AND char_length(telephone) <= 30
  AND length(regexp_replace(telephone, '\D', '', 'g')) BETWEEN 10 AND 15
  AND (courriel IS NULL OR (char_length(courriel) <= 150 AND courriel ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'))
  AND (message IS NULL OR char_length(message) <= 1000)
  AND char_length(secteur) <= 100
  AND char_length(type_besoin) <= 100
  AND char_length(frequence) <= 100
  AND source_page IN ('/', '/soumission')
);