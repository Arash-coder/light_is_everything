type TUser = {
  name: string;
} | null;
type TToken = string | null;
type TRefreshToken = string | null;
interface IAuthState {
  user: TUser;
  token: TToken;
  refreshToken?: TRefreshToken;
}
