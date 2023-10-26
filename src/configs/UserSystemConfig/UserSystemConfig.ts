export class UserSystemConfig {
  static get IsManagerOrStaff() {
    return true
  }
}

if (UserSystemConfig.IsManagerOrStaff) {
  // do something here
}
