import { dailySpecials } from '@/lib/drinks';

export default function DailySchedule() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="font-serif text-2xl font-bold text-kopi-800 mb-6 text-center">
        Weekly Specials Schedule
      </h3>
      <div className="space-y-4">
        {dailySpecials.map((drink) => (
          <div
            key={drink.id}
            className="flex items-start gap-4 pb-4 border-b border-kopitiam-200 last:border-0"
          >
            <div className="flex-shrink-0 w-24 text-right">
              <span className="inline-block bg-jade-100 text-jade-800 px-3 py-1 rounded-full text-sm font-medium">
                {drink.day}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-kopi-800 mb-1">{drink.name}</h4>
              <p className="text-kopi-600 text-sm">{drink.chineseName}</p>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-4 pt-2">
          <div className="flex-shrink-0 w-24 text-right">
            <span className="inline-block bg-kopitiam-200 text-kopi-800 px-3 py-1 rounded-full text-sm font-medium">
              Monday
            </span>
          </div>
          <div className="flex-1">
            <p className="text-kopi-600 text-sm italic">Regular menu items only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
