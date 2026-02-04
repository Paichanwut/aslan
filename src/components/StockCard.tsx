import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Stock } from "@/lib/mockData";

interface StockCardProps {
  stock: Stock;
}

export function StockCard({ stock }: StockCardProps) {
  const isPositive = stock.change >= 0;

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-gray-400 tracking-wider">
          {stock.type}
        </span>
        <span className="text-xs font-semibold text-gray-400 tracking-wider">
          {stock.type === "STOCK" ? "STOCK" : "ETF"}{" "}
          {stock.type === "STOCK" ? "" : ""}
        </span>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-bold text-gray-900">{stock.symbol}</h3>
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium mt-1",
              isPositive ? "text-green-600" : "text-red-500",
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="w-3 h-3" />
            ) : (
              <ArrowDownRight className="w-3 h-3" />
            )}
            {stock.change > 0 ? "+" : ""}
            {stock.change}%
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-gray-900">
            ${stock.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
