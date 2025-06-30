import React from 'react';
import { Card } from '../ui/Card';
import { recentActivity } from '../../utils/mockData';

export const RecentActivity: React.FC = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4">
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.user}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {activity.action}
              </p>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};