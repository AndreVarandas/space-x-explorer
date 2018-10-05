import { Rocket } from "./Rocket";

export interface Launch {
    flight_number: number,
    mission_name: string,
    mission_id: Array<string>,
    launch_year: number,
    launch_date_unix: Date,
    launch_date_utc: Date,
    launch_date_local: Date,
    is_tentative: boolean,
    tentative_max_precision: string,
    rocket: Rocket,
    ships: Array<string>,
    telemetry: {
      flight_club: string,
    },
    launch_site: {
      site_id: string,
      site_name: string,
      site_name_long: string,
    },
    launch_success: boolean,
    links: {
      mission_patch:string,
      mission_patch_small:string,
      reddit_campaign:string,
      reddit_launch:string,
      reddit_recovery:string,
      reddit_media:string,
      presskit:string,
      article_link:string,
      wikipedia:string,
      video_link:string,
      flickr_images: Array<string>,
    },
    details: string,
    upcoming: boolean,
    static_fire_date_utc: Date
    static_fire_date_unix: Date
}