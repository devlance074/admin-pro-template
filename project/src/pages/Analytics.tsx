import React from 'react';
import { LineChart } from '../components/charts/LineChart';
import { BarChart } from '../components/charts/BarChart';
import { Card } from '../components/ui/Card';
import { chartData } from '../utils/mockData';

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Comprehensive analytics and insights for your business
        </p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <LineChart data={chartData} title="Revenue Trend Analysis" />
        <BarChart data={chartData} title="Monthly Performance" />
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Performing Categories
          </h3>
          <div className="space-y-3">
            {['Technology', 'Marketing', 'Sales', 'Support'].map((category, index) => (
              <div key={category} className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">{category}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${90 - index * 15}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {90 - index * 15}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Conversion Metrics
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">3.24%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">$127</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Avg. Order Value</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Traffic Sources
          </h3>
          <div className="space-y-3">
            {[
              { source: 'Direct', percentage: 45 },
              { source: 'Organic Search', percentage: 30 },
              { source: 'Social Media', percentage: 15 },
              { source: 'Referral', percentage: 10 }
            ].map((item) => (
              <div key={item.source} className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">{item.source}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};