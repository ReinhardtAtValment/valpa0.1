import { Card, CardContent } from "@/components/ui/card";

interface CommitmentVisualProps {
  title: string;
  mainValue: string;
  mainLabel: string;
  details: Array<{
    label: string;
    value: string;
  }>;
}

export function CommitmentVisual({ title, mainValue, mainLabel, details }: CommitmentVisualProps) {
  return (
    <Card className="relative overflow-hidden border-0 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10"></div>
      <CardContent className="p-8 relative">
        <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
          {title}
        </h3>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 mb-4">
            <div className="text-white">
              <div className="text-4xl font-bold">{mainValue}</div>
              <div className="text-xs uppercase tracking-wider">{mainLabel}</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {details.map((detail, idx) => (
            <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                {detail.label}
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
