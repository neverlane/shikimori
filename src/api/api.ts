import axios, { AxiosInstance, AxiosRequestHeaders, CreateAxiosDefaults } from 'axios';
import { stringify as stringifyQuery } from 'qs';
import { inspectable } from 'inspectable';
import { ShikimoriAPIError } from '~/errors';
import { API_USER_AGENT, SHIKIMORI_API_URL } from '~/utils/constants';
import { AbuseRequestsAPI, AchievementsAPI, AnimesAPI, AppearAPI, BansAPI, CalendarsAPI, CharactersAPI, ClubsAPI, CommentsAPI, ConstantsAPI, DialogsAPI, EpisodeNotificationsAPI, FavoritesAPI, ForumsAPI, FriendsAPI, GenresAPI, MangasAPI, MessagesAPI, PeopleAPI, PublishersAPI, RanobeAPI, ReviewsAPI, StatsAPI, StudiosAPI, StylesAPI, TopicsAPI, UserImagesAPI, UserRatesAPI, UsersAPI, VideosAPI } from './schemas';

export interface APIOptions {
  token?: string;
  baseURL?: string;
  userAgent?: string;
  axios?: CreateAxiosDefaults;
}

export class API {
  private _token: string;
  private _userAgent: string;
  public request: AxiosInstance;

  public abuseRequests = new AbuseRequestsAPI(this);
  public achievements = new AchievementsAPI(this);
  public animes = new AnimesAPI(this);
  public appear = new AppearAPI(this);
  public bans = new BansAPI(this);
  public calendars = new CalendarsAPI(this);
  public characters = new CharactersAPI(this);
  public clubs = new ClubsAPI(this);
  public comments = new CommentsAPI(this);
  public constants = new ConstantsAPI(this);
  public dialogs = new DialogsAPI(this);
  public episodeNotifications = new EpisodeNotificationsAPI(this);
  public favorites = new FavoritesAPI(this);
  public forums = new ForumsAPI(this);
  public friends = new FriendsAPI(this);
  public genres = new GenresAPI(this);
  public mangas = new MangasAPI(this);
  public messages = new MessagesAPI(this);
  public people = new PeopleAPI(this);
  public publishers = new PublishersAPI(this);
  public ranobe = new RanobeAPI(this);
  public reviews = new ReviewsAPI(this);
  public stats = new StatsAPI(this);
  public studios = new StudiosAPI(this);
  public styles = new StylesAPI(this);
  public topics = new TopicsAPI(this);
  public userImages = new UserImagesAPI(this);
  public userRates = new UserRatesAPI(this);
  public users = new UsersAPI(this);
  public videos = new VideosAPI(this);

  constructor({
    token = '',
    baseURL = SHIKIMORI_API_URL,
    userAgent = API_USER_AGENT,
    axios: axiosConfig = {}
  }: APIOptions = {}) {
    this._token = token;
    this._userAgent = userAgent;
    this.request = axios.create({
      baseURL,
      validateStatus: () => true,
      paramsSerializer: {
        serialize: params => stringifyQuery(params, { arrayFormat: 'comma' })
      },
      ...axiosConfig
    });

    this.request.interceptors.request.use((config) => {
      if(!config.headers) config.headers = <AxiosRequestHeaders> {};
      config.headers['User-Agent'] = this._userAgent;
      if (this._token) config.headers['Authorization'] = `Bearer ${this._token}`;
      return config;
    });

    this.request.interceptors.response.use((response) => {
      if (response.status >= 400) throw new ShikimoriAPIError({
        code: response.status,
        message: response?.data?.message ?? response?.data?.errors ?? response.data ?? 'unknown',
        response,
      });
      return response;
    });
  }

  get hasToken() {
    return this._token.length !== 0;
  }
}

inspectable(API, {
  serialize(api) {
    return {
      token: api.hasToken ? '[set]' : '[unset]',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      userAgent: api._userAgent
    };
  }
});