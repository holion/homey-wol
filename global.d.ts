type WOLOptions = {
    address?: string;
    port?: number;
}

declare module "node-wol" {
    function createMagicPacket(macAddress: string): Buffer;
    function wake(macAddress: string, options?: WOLOptions | function, callback?: function): void;
}