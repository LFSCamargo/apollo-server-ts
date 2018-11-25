import userResolvers from './modules/user/userResolvers';

export default {
	Query: {
		...userResolvers.Query
	},
	Mutation: {
		...userResolvers.Mutation
	},
};
