module.exports = {
    async wakeonlan(h: any) {
        const { homey, query } = h;
        const { mac } = query;
        return mac;
    }
}