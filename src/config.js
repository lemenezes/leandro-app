export default {
	s3: {
		REGION: "us-east-1",
		BUCKET: "notes-app-uploads-leandro"
	  },
	apiGateway: {
		REGION: 'us-east-1',
		URL: 'https://uspg62d8rh.execute-api.us-east-1.amazonaws.com/dev'
	},
	cognito: {
		REGION: 'us-east-1',
		USER_POOL_ID: 'us-east-1_RjVIpRhjC',
		APP_CLIENT_ID: '3csj9ojjhj5vc4697sfk0iq6v5',
		IDENTITY_POOL_ID: 'us-east-1:19f98418-10c7-49af-9e1d-77d402440292'
	}
};
