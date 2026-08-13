import { songs, getSongBySlug } from "@/content/songs";
import { notFound } from "next/navigation";
import { SongPageClient } from "./SongPageClient";

export function generateStaticParams() {
  return songs.map((s) => ({ slug: s.slug }));
}

export default async function SongPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) notFound();

  return <SongPageClient slug={slug} />;
}
