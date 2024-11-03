import { $ } from "bun";

if (process.env.NODE_ENV === "development") {
	await Promise.all([
		$`bunx lefthook install`,
		$`git config commit.template .gitmessage.txt`
	]);

	console.log("To get started developing: edit src/server.ts and `bun start`");
}
