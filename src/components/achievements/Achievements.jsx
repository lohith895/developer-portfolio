import React from 'react';
import AchievementCard from './AchievementCard';
import ACHIEVEMENTS_DATA, { ACHIEVEMENTS_HEADER } from './achievementData';
import { SectionTitle } from '../common/SectionTitle';

import { FaCrown, FaAward } from 'react-icons/fa';

export const Achievements = () => {
  const featuredAchievements = ACHIEVEMENTS_DATA.filter((a) => a.featured);
  const regularAchievements = ACHIEVEMENTS_DATA.filter((a) => !a.featured);

  return (
    <div className="space-y-8">
      <SectionTitle
        badge={ACHIEVEMENTS_HEADER.badge}
        title={ACHIEVEMENTS_HEADER.title}
        subtitle={ACHIEVEMENTS_HEADER.subtitle}
        center={false}
      />

      {/* Featured Leadership & Position of Responsibility */}
      {featuredAchievements.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <FaCrown className="text-amber-400" />
            <span>Leadership & Position of Responsibility</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {featuredAchievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} isFeatured={true} />
            ))}
          </div>
        </div>
      )}

      {/* Technical & Project Achievements */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-xs font-bold uppercase tracking-wider">
          <FaAward className="text-blue-400" />
          <span>Engineering & Technical Achievements</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {regularAchievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
