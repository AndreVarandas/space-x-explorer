import { Core } from "./Core";
import { Payload } from "./Payload";

export interface Rocket {
    rocket_id: string,
    rocket_name: string,
    rocket_type: string,
    first_stage: {
        cores: Array<Core>
    },
    second_stage: {
        block: 5,
        payloads: Array<Payload>
    },
    fairings: {
        reused: boolean,
        recovery_attempt: boolean,
        recovered: boolean,
        ship?: string
    }
}