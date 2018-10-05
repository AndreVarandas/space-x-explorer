export interface Capsule {
    capsule_serial: string,
    capsule_id: string,
    status: string,
    original_launch: Date,
    original_launch_unix: Date,
    missions: Array<string>,
    landings: number,
    type: string,
    details: string,
    reuse_count: number
}