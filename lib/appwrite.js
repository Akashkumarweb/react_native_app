import { Account, Client, ID,  Avatars} from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.thewebumbrella.rnpa',
    projectId: '66b5f4320028805d86c3',
    databaseId: '66b5f5f00029141ceb19',
    userCollectionId: '66b5f615002483a73552',
    videoCollectionId: '66b5f643002cf58806e6',
    storageId: '66b5f7e5003b0dc88747',
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 

    
    const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }


    // Sign In
export async function signIn(email, password) {
    try {
      const session = await account.createEmailSession(email, password);
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }
