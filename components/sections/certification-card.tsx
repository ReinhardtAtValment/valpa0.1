import { CertificationBadge } from "@/components/ui/certification-badge";

interface CertificationCardProps {
  category: string;
  items: string[];
}

export function CertificationCard({ category, items }: CertificationCardProps) {
  return (
    <div className="relative group h-full">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative p-6 border border-border/50 rounded-xl group-hover:border-primary/30 transition-colors h-full flex flex-col">
        {/* Centered header */}
        <h4 className="font-semibold text-foreground mb-4 text-lg text-center">
          {category}
        </h4>
        
        {/* Certification items as full-width badges */}
        <div className="flex flex-col gap-2">
          {items.map((item, idx) => {
            const isInProgress = item.includes('(in progress)');
            const cleanName = item.replace(' (in progress)', '');
            
            return (
              <CertificationBadge 
                key={idx}
                name={cleanName}
                inProgress={isInProgress}
                variant="outline"
                className="w-full justify-start text-left"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
