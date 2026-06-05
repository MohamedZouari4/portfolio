import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, Users, Code } from "lucide-react";
import { personal } from "../data";

interface GHStats {
  repos: number;
  stars: number;
  followers: number;
  topLang: string;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GHStats | null>(null);
  const [loading, setLoading] = useState(true);

  const username = personal.github.split("/").pop() || "MohamedZouari4";

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then((r) =>
        r.json()
      ),
    ])
      .then(([user, repos]) => {
        if (cancelled) return;
        const repoList = Array.isArray(repos) ? repos : [];
        const stars = repoList.reduce(
          (sum: number, r: { stargazers_count: number }) => sum + (r.stargazers_count || 0),
          0
        );
        const langCount: Record<string, number> = {};
        repoList.forEach((r: { language: string | null }) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        const topLang =
          Object.entries(langCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "Python";
        setStats({
          repos: user.public_repos ?? repoList.length,
          stars,
          followers: user.followers ?? 0,
          topLang,
        });
      })
      .catch(() => {
        if (!cancelled) setStats({ repos: 0, stars: 0, followers: 0, topLang: "Python" });
      })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [username]);

  const skeletonItems = [0, 1, 2, 3];

  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-3">
        {skeletonItems.map((i) => (
          <div
            key={i}
            className="glass rounded-xl p-4 border border-white/5 animate-pulse flex flex-col items-center gap-2"
          >
            <div className="w-5 h-5 rounded bg-white/10" />
            <div className="h-5 w-10 rounded bg-white/10" />
            <div className="h-2.5 w-16 rounded bg-white/10" />
          </div>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const items = [
    { icon: GitBranch, label: "Public Repos", value: stats.repos, color: "#00D9FF" },
    { icon: Star, label: "Total Stars", value: stats.stars, color: "#F59E0B" },
    { icon: Users, label: "Followers", value: stats.followers, color: "#7C3AED" },
    { icon: Code, label: "Top Language", value: stats.topLang, color: "#00FFB2" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map(({ icon: Icon, label, value, color }, i) => (
        <motion.a
          key={label}
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -3 }}
          className="glass rounded-xl p-4 border border-white/5 hover:border-white/15 transition-all duration-200 flex flex-col items-center gap-1.5 text-center"
        >
          <Icon size={16} style={{ color }} />
          <p className="font-bold text-white text-lg leading-none">{value}</p>
          <p className="text-[#A1A1AA] text-[10px] font-mono">{label}</p>
        </motion.a>
      ))}
    </div>
  );
}
