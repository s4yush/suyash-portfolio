/** @type {import('next').NextConfig} */

const redirectLinks = {
  github: "https://github.com/s4yush",
  gmail: "mailto:YOUR_GMAIL@gmail.com",
  spotify: "https://open.spotify.com/user/YOUR_SPOTIFY",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
  instagram: "https://instagram.com/YOUR_INSTAGRAM",
  x: "https://x.com/YOUR_TWITTER",
  twitter: "https://x.com/YOUR_TWITTER",
  yt: "https://youtube.com/@YOUR_YOUTUBE",
};

const nextConfig = {
  async redirects() {
    return Object.entries(redirectLinks).map(([key, value]) => ({
      source: `/${key}`,
      destination: value,
      permanent: false,
    }));
  },
};

module.exports = nextConfig;
