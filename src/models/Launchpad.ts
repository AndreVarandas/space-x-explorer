export interface Launchpad {
    id: number,
    status: string,
    location: {
        name: string,
        region: string,
        latitude: number,
        longitude: number
    },
    vehicles_launched: Array<string>,
    details: string,
    site_id: string,
    site_name_long: string
}