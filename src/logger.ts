

export const LEVEL_INFO = 3;
export const LEVEL_ERROR = 5;

export function log(msg: string, context: any = {}, level: number = LEVEL_ERROR) {
  if (level === LEVEL_ERROR) {
    console.error(msg, context);
  } else {
    console.log(msg, context);
  }
}
