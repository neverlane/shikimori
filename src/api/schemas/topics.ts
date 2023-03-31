import { APISchema } from '~/api/schema';
import { Topic, TopicShort } from '~/api/definitions';

export type TopicParamForum = 'all' | 'animanga' | 'site' | 'games' | 'vn' | 'contests' | 'offtopic' | 'clubs' | 'my_clubs' | 'critiques' | 'news' | 'collections' | 'articles' |'cosplay';
export type TopicParamLinkedType = 'Anime' | 'Manga' | 'Ranobe' | 'Character' | 'Person' | 'Club' | 'ClubPage' | 'Critique' | 'Review' | 'Contest' | 'CosplayGallery' | 'Collection' | 'Article';
export type TopicParamType = 'Topic' | 'Topics::ClubUserTopic' | 'Topics::EntryTopic' | 'Topics::EntryTopics::AnimeTopic' | 'Topics::EntryTopics::ArticleTopic' | 'Topics::EntryTopics::CharacterTopic' | 'Topics::EntryTopics::ClubPageTopic' | 'Topics::EntryTopics::ClubTopic' | 'Topics::EntryTopics::CollectionTopic' | 'Topics::EntryTopics::ContestTopic' | 'Topics::EntryTopics::CosplayGalleryTopic' | 'Topics::EntryTopics::MangaTopic' | 'Topics::EntryTopics::PersonTopic' | 'Topics::EntryTopics::RanobeTopic' | 'Topics::EntryTopics::CritiqueTopic' | 'Topics::EntryTopics::ReviewTopic' | 'Topics::NewsTopic' | 'Topics::NewsTopics::ContestStatusTopic';

export interface TopicsGetParams {
  page?: number;
  limit?: number;
  forum?: TopicParamForum;
  linked_id?: number;
  linked_type?: TopicParamLinkedType;
  type?: TopicParamType;
}
export interface TopicsUpdatesParams {
  page?: number;
  limit?: number;
}
export interface TopicsHotParams {
  limit?: number;
}
export interface TopicsGetByIdParams {
  id: number;
}
export interface TopicsCreateParams {
  body: string;
  forum_id: number;
  linked_id?: number;
  linked_type?: TopicParamLinkedType;
  title: string;
  type: TopicParamType; // TODO: Check this type. Comment: ПОХУЙ
  user_id: number;
}
export interface TopicsUpdateParams {
  id: number;
  topic?: Partial<Pick<TopicsCreateParams, 'body' | 'linked_id' | 'linked_type' | 'title'>>;
}
export interface TopicsDestroyParams {
  id: number;
}
export type TopicsIgnoreParams = TopicsDestroyParams;
export type TopicsUnignoreParams = TopicsDestroyParams;

export type TopicsGetResponse = Topic[];
export type TopicsUpdatesResponse = TopicShort[];
export type TopicsHotResponse = Topic[];
export type TopicsGetByIdResponse = Topic;
export type TopicsCreateResponse = Topic;
export type TopicsUpdateResponse = Topic;
export interface TopicsDestroyResponse {
  notice: string;
}
export interface TopicsIgnoreResponse {
  topic_id: string; 
  is_ignored: boolean;
}
export type TopicsUnignoreResponse = TopicsIgnoreResponse;

export class TopicsAPI extends APISchema {
  async get(params: TopicsGetParams): Promise<TopicsGetResponse> {
    const response = await this.axios.get('/topics', { params });
    return response.data;
  }

  async updates(params: TopicsUpdatesParams): Promise<TopicsUpdatesResponse> {
    const response = await this.axios.get('/topics/updates', { params });
    return response.data;
  }

  async hot(params: TopicsHotParams): Promise<TopicsHotResponse> {
    const response = await this.axios.get('/topics/hot', { params });
    return response.data;
  }

  async getById(params: TopicsGetByIdParams): Promise<TopicsGetByIdResponse> {
    const response = await this.axios.get(`/topics/${params.id}`);
    return response.data;
  }

  async create(params: TopicsCreateParams): Promise<TopicsCreateResponse> {
    const response = await this.axios.post('/topics', params);
    return response.data;
  }

  async update(params: TopicsUpdateParams): Promise<TopicsUpdateResponse> {
    const response = await this.axios.patch(`/topics/${params.id}`, params);
    return response.data;
  }

  async destroy(params: TopicsDestroyParams): Promise<TopicsDestroyResponse> {
    const response = await this.axios.delete(`/topics/${params.id}`);
    return response.data;
  }

  async ignore(params: TopicsIgnoreParams): Promise<TopicsIgnoreResponse> {
    const response = await this.axios.post(`/v2/topics/${params.id}/ignore`);
    return response.data;  
  }

  async unignore(params: TopicsUnignoreParams): Promise<TopicsUnignoreResponse> {
    const response = await this.axios.delete(`/v2/topics/${params.id}/ignore`);
    return response.data;  
  }
}