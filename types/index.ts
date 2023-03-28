export interface IReleaseAsset {
  browser_download_url: string;
  size: number;
  download_count: number;
  name: string;
}

export interface IRelease {
  all_releases: string;
  author: string;
  published_at: string;
  release_notes: string;
  releases: IReleaseAsset[];
  tag_name: string;
}
