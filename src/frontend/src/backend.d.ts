import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Signature {
    createdAt: Time;
    areaCode: string;
    lastName: string;
    firstName: string;
}
export type Time = bigint;
export interface backendInterface {
    createSignature(firstName: string, lastName: string, areaCode: string): Promise<void>;
    getSignatureCount(): Promise<bigint>;
    getSignatures(): Promise<Array<Signature>>;
}
