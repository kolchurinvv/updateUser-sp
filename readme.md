! Important !  — serviceAccountKey.json is the ‘key to the kingdom’ so to speak. Be careful not to leak it.

# This is how I update a user record:

## Pre requisites: 
 - installed node (preferably 16.x)
 - latest npm/yarn/pnpm.
 - generate a serviceAccountKey.json
   - [here's](https://firebase.google.com/docs/admin/setup#initialize-sdk) a quick guide on how

## Steps
1) copy the 3 files from the attachment to a folder
2) run __one__ of the following
```bash 
$ yarn
```
or 
```bash 
$ npm install
```
or 
```bash 
$ pnpm i
```
3) run 
``` bash 
$ export GOOGLE_APPLICATION_CREDENTIALS=serviceAccountKey.json
```
4. open the `updateUserRecord.js`; navigate to the bottom of the file and input the old email as the first argument and the one you want to change it to as the value of the second argument: 
 
```javascript
updateUserRecord("old_email@goes.here", {
  email: "new_email@goes.here",
})
```
5) run 
```bash
$ node updateUserRecord.js > response.json
```
this will save the response from the server into response.json in the same folder
<hr>
In the current form the function only fetches the user. In order for it to actually change the info, you need to comment out lines 11-14 (inclusive) and uncomment lines 22-38 (inclusive).
