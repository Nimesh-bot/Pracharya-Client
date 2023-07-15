declare interface AuthState {
  isLoggedIn: boolean;
  access_token?: string;
  refresh_token?: string;
}
