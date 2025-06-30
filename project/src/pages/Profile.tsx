import React, { useState } from 'react';
import { Camera, Save } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const Profile: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Experienced administrator with a passion for efficient team management and system optimization.',
    company: 'Tech Solutions Inc.',
    role: 'Senior Administrator'
  });

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle profile save
    console.log('Profile saved:', profile);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Profile Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Profile Picture Card */}
        <Card className="p-6">
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <button className="absolute bottom-4 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {profile.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{profile.role}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {profile.company}
            </p>
          </div>
        </Card>

        {/* Profile Form */}
        <div className="xl:col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              <Input
                label="Email Address"
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              <Input
                label="Phone Number"
                value={profile.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
              <Input
                label="Location"
                value={profile.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
              <Input
                label="Company"
                value={profile.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
              <Input
                label="Role"
                value={profile.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={4}
                className="
                  w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700
                  bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                  text-gray-900 dark:text-gray-100
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200
                "
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="flex justify-end mt-8">
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};