import { Card, CardContent } from "@/components/ui/card";

interface PortfolioItem {
  label: string;
  count: string;
  description: string;
  color: "green" | "blue" | "gray";
}

interface PortfolioVisualProps {
  title: string;
  items: PortfolioItem[];
  footer?: string;
}

export function PortfolioVisual({ title, items, footer }: PortfolioVisualProps) {
  const colorMap = {
    green: {
      bg: "from-green-50 to-green-100",
      border: "border-green-200",
      labelText: "text-green-800",
      countText: "text-green-900",
      descText: "text-green-700",
    },
    blue: {
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      labelText: "text-blue-800",
      countText: "text-blue-900",
      descText: "text-blue-700",
    },
    gray: {
      bg: "from-gray-50 to-gray-100",
      border: "border-gray-200",
      labelText: "text-gray-700",
      countText: "text-gray-900",
      descText: "text-gray-600",
    },
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-amber-500/10"></div>
      <CardContent className="p-8 relative">
        <h3 className="text-lg font-bold text-gray-900 mb-6">
          {title}
        </h3>
        
        <div className="space-y-4">
          {items.map((item, idx) => {
            const colors = colorMap[item.color];
            return (
              <div
                key={idx}
                className={`bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-lg p-4`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold ${colors.labelText} uppercase tracking-wider`}>
                    {item.label}
                  </span>
                  <span className={`text-2xl font-bold ${colors.countText}`}>
                    {item.count}
                  </span>
                </div>
                <div className={`text-xs ${colors.descText}`}>
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>

        {footer && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-600 italic">
              {footer}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
