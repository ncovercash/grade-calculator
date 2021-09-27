export const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyz";
export const CHARSET_LENGTH = 36;

export default function random(length: number): string {
	let str = "";
	for (let i = 0; i < length; i++) {
		str += CHARSET[Math.floor(Math.random() * CHARSET_LENGTH)];
	}
	return str;
}
