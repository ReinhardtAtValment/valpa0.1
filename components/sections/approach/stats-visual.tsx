import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  label: string;
  value: string;
  color: "blue" | "teal" | "amber";
}

interface StatsVisualProps {
  title: string;
  stats: StatItem[];
  footer?: {
    label: string;
    value: string;
  };
}

export function StatsVisual({ title, stats, footer }: StatsVisualProps) {
  const colorMap = {
    blue: "border-blue-600",
    teal: "border-teal-600",
    amber: "border-amber-500",
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-700/10"></div>
      <CardContent className="p-8 relative">
        <h3 className="text-lg font-bold text-gray-900 mb-6">
          {title}
        </h3>
        
        <div className="space-y-6">
          {stats.map((stat, idx) => (
            <div key={idx} className={`border-l-4 ${colorMap[stat.color]} pl-4`}>
              <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-sm font-semibold text-gray-900 mb-2">
              {footer.label}
            </div>
            <div className="text-sm text-gray-600">
              {footer.value}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
