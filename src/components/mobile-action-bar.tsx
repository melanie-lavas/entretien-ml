import { Link } from "@tanstack/react-router";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileActionBar() {
  return <nav aria-label="Contact rapide" className="mobile-action-bar fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background px-3 pt-3 md:hidden">
    <Button asChild variant="outline" className="h-12 whitespace-normal px-2 text-xs font-bold"><a href="tel:+18199969022"><Phone /><span>Appeler<br />819-996-9022</span></a></Button>
    <Button asChild className="h-12 whitespace-normal px-2 text-xs font-bold"><Link to="/soumission"><Sparkles />Soumission gratuite</Link></Button>
  </nav>;
}