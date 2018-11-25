import { ApolloServer, PubSub } from 'apollo-server';
import * as mongoose from 'mongoose';
import { MONGO, PORT } from './config';
import graphqlTypes from './graphqlTypes';
import resolvers from './resolvers';
import { getUser } from './auth/authMethods';

const pubsub = new PubSub()

const server = new ApolloServer({
	resolvers,
	typeDefs: graphqlTypes,
	context: async ({ req }) => {
		const token = req.headers.authorization ? req.headers.authorization : '';
		const user = await getUser(token);
		return {
			user,
			pubsub,
		};
	},
	tracing: true,
});

mongoose.connect(MONGO, {}, err => {
	if (err) {
		console.log('Error: ', err);
		process.exit(1);
	}
	console.log(`Connected to mongodb at: ${MONGO}`);

	server.listen(PORT, () => {
		console.log(`🚀 Apollo server ready on https://localhost:${PORT}/graphql`);
		console.log(`⚡️ Playground exposed on /graphql`);
	});
})