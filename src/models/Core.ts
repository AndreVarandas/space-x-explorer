export interface Core {
    core_serial: string,
    block: number,
    status: string,
    original_launch: Date,
    original_launch_unix: Date,
    missions: Array<string>,
    reuse_count: number,
    rtls_attempts: number,
    rtls_landings: number,
    asds_attempts: number,
    asds_landings: number,
    water_landing: boolean,
    details: string
}