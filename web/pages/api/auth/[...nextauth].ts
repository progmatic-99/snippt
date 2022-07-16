import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

console.log(process.env.GITHUB_SECRET);
export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
			httpOptions: {
				timeout: 40000,
			},
		}),
		// ...add more providers here
	],
	// database: process.env.DB_URL as string,
	// adapter:
});
