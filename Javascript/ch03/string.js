let str = `"Hello" 'Sister'`;

console.log(str);
console.log(str.length);
console.log(str.substring(2, 4));
console.log(str.slice(-5));
console.log(str.slice(2, 6));
console.log(str.split(" "));
console.log(str.indexOf("s"));
console.log(str.indexOf("s", 12));
console.log(str.startsWith("ell"));
console.log(str.endsWith("is"));
console.log(str.includes("llo"));
console.log(str.normalize());
console.log(str.normalize("NFD"));
console.log(str.normalize("NFC"));
console.log(str.normalize("NFKC"));
console.log(str.normalize("NFKD"));
console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.charAt(3));
console.log(str.charCodeAt(3));

console.log("8".repeat(3));
console.log("ab".padStart(5, "*"));
console.log("  a  ".trim() + "b");
console.log("  a  ".trimStart() + "b");
console.log("  a  ".trimEnd() + "b");