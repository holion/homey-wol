import Homey from 'homey';
import wol2 from 'node-wol';
class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    const cardWakeOnLan = this.homey.flow.getActionCard("wakeonlan");
    cardWakeOnLan.registerRunListener(args => {
      const mac_address = args.mac_address;
      if (mac_address) {
        // Validate mac address
        if (!mac_address.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)) {
          this.log(`Invalid MAC address ${mac_address}`);
          throw new Error('Invalid MAC address');
        }

        this.log('Wake On Lan: ', mac_address);
        wol2.wake(mac_address, (error: any) => {
          if (error) {
            this.log('Wake On Lan error: ', error);
            throw new Error('Wake On Lan error');
          }
        });
      } else {
        this.log(`No MAC address provided`);
        throw new Error('No MAC address provided');
      }
    });
  }

} // 2a:c3:9f:49:75:e5

module.exports = MyApp;
