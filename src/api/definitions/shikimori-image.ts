export interface ShikimoriImageSizes {
  [x: string]: string | undefined;
}
export interface ShikimoriImage {
  id: number;
  original_url: string;
  main_url: string;
  preview_url: string;
  can_destroy: boolean;
  user_id: number;
}