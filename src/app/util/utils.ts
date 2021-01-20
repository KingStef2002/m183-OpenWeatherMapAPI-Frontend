export class Utils {
  public static getDate(time: number): string {
    return new Date(time).toLocaleString();
  }
}
