export const formatSize = (bytes: number): string => {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;
  const fmt = (v: number) => {
    const s = v.toFixed(2);
    return s.replace(/\.00$/, "");
  };
  if (bytes >= GB) return `${fmt(bytes / GB)} GB`;
  if (bytes >= MB) return `${fmt(bytes / MB)} MB`;
  return `${fmt(bytes / KB)} KB`;
};


export const generateUUID = () => crypto.randomUUID();

