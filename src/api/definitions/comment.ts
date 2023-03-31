import { DateString } from '~/utils/types';
import { UserShort } from './user';

export type CommentCommentableType = 'Topic' | 'User' | 'Anime' | 'Manga' | 'Character' | 'Person' | 'Article' | 'Club' | 'ClubPage' | 'Collection' | 'Critique' | 'Review';
export interface Comment {
  id: number;
  user_id: number;
  commentable_id: number;
  commentable_type: CommentCommentableType;
  body: string;
  html_body: string;
  created_at: DateString;
  updated_at: DateString;
  is_offtopic: boolean;
  is_summary: boolean;
  can_be_edited: boolean;
  user: UserShort;
}

export type CommentShort = Pick<Comment, 'id' | 'commentable_id' | 'commentable_type' | 'body' | 'user_id' | 'created_at' | 'updated_at' | 'is_offtopic'>