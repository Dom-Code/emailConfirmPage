import * as Realm from 'realm-web';

const app = new Realm.App({ id: 'application-0-rucxl' });

interface ConfirmToken {
  /** The token received */
  token: string;
  /** The ID of the token received */
  tokenId: string;
}

export const sendConfirmation = (tokenData: ConfirmToken) => {
  console.log(tokenData);
  app.emailPasswordAuth
    .confirmUser(tokenData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
