import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { FaCrown } from 'react-icons/fa';

export const AchievementCard = ({ achievement, index, isFeatured }) => {
  const Icon = achievement.icon;
  const featured = isFeatured || achievement.featured;

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="w-full"
      >
        <Card
          hoverEffect={true}
          className="h-full flex flex-col justify-between space-y-4 border border-amber-500/50 hover:border-amber-400 bg-gradient-to-br from-amber-500/10 via-slate-900/90 to-slate-950 shadow-2xl shadow-amber-500/10 p-6 relative overflow-hidden group"
        >
          {/* Subtle glowing background accent */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 text-2xl border border-amber-500/30 shadow-lg shadow-amber-500/10">
                  {Icon ? <Icon /> : <FaCrown />}
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-400 glass-panel px-3 py-1 rounded-full uppercase tracking-widest border border-amber-500/30 bg-amber-500/10">
                  ★ Featured Leadership
                </span>
              </div>
              {achievement.category && (
                <span className="text-[10px] font-mono text-slate-300 glass-panel px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-800">
                  {achievement.category}
                </span>
              )}
            </div>

            <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors pt-1">
              {achievement.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {achievement.description}
            </p>
          </div>

          {achievement.period && (
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between relative z-10">
              <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-500/30">
                {achievement.period}
              </span>
              <span className="text-xs text-amber-400/80 font-medium">Position of Responsibility</span>
            </div>
          )}
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Card hoverEffect={true} className="h-full flex flex-col justify-between space-y-3 border border-slate-800 hover:border-blue-500/40">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-xl glass-panel ${achievement.color || 'text-amber-400'} text-xl flex-shrink-0`}>
              {Icon ? <Icon /> : null}
            </div>
            {achievement.category && (
              <span className="text-[10px] font-mono text-slate-400 glass-panel px-2.5 py-1 rounded-full uppercase tracking-wider">
                {achievement.category}
              </span>
            )}
          </div>

          <h3 className="text-sm font-bold text-slate-100">{achievement.title}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{achievement.description}</p>
          {achievement.period && (
            <span className="text-[11px] font-mono text-cyan-400 block pt-1">{achievement.period}</span>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default AchievementCard;
